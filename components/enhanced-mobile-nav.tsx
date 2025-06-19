"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { User, LogOut, Menu, Package2, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context" // Assuming this context provides user info and logout
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { MenuButton } from "@/components/menu-button"; // This was in previous version, ensure it's defined or remove
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { useFocusTrap } from "@/hooks/use-focus-trap"
import { useMobile } from "@/hooks/use-mobile"

// Simplified local type
interface MobileNavItem {
  href: string
  label: string
  active: boolean
  icon?: React.ElementType
  description?: string
}

export function EnhancedMobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth() // Use your actual auth context
  const [mounted, setMounted] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const sheetContentRef = useFocusTrap(open) // Apply focus trap to sheet content
  const isMobile = useMobile()

  useOnClickOutside(navRef, () => {
    if (open && isMobile) setOpen(false)
  })

  useEffect(() => {
    if (isMobile) setOpen(false)
  }, [pathname, isMobile])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open && isMobile) {
        setOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, isMobile])

  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open, isMobile])

  useEffect(() => {
    setMounted(true)
  }, [])

  const siteName = "نظام إدارة الوكالات"

  const baseRoutes: MobileNavItem[] = [
    { href: "/", label: "الرئيسية", active: pathname === "/" },
    { href: "/kiti-agency-promo", label: "انضم لـ Kiti معنا", active: pathname === "/kiti-agency-promo", icon: Star },
    { href: "/platforms", label: "المنصات", active: pathname === "/platforms" },
    { href: "/services", label: "خدماتنا", active: pathname === "/services" },
    { href: "/offers", label: "العروض والشحن", active: pathname === "/offers" },
    { href: "/about", label: "من نحن", active: pathname === "/about" },
    { href: "/contact", label: "اتصل بنا", active: pathname === "/contact" },
  ]

  const authenticatedRoutes: MobileNavItem[] = [
    { href: "/admin", label: "لوحة التحكم", active: pathname.startsWith("/admin") },
    { href: "/financial", label: "الإدارة المالية", active: pathname === "/financial" },
    { href: "/profile", label: "الملف الشخصي", active: pathname === "/profile" },
    { href: "/settings", label: "الإعدادات", active: pathname === "/settings" },
    // Add other authenticated routes here
  ]

  const routes = isAuthenticated ? [...baseRoutes, ...authenticatedRoutes] : baseRoutes

  const handleNavigation = useCallback(
    (href: string) => {
      try {
        setOpen(false)
        // router.push(href); // If using Next.js router directly
      } catch (error) {
        console.error("Navigation error:", error)
      }
    },
    [], // Add router if used
  )

  if (!mounted) {
    return (
      <div className="md:hidden">
        <Button variant="ghost" size="icon" disabled>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  if (!isMobile) {
    return null // Don't render this component on desktop
  }

  return (
    <div ref={navRef} className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="فتح القائمة">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          ref={sheetContentRef} // Apply focus trap here
          side="right"
          className="w-[80%] sm:w-[350px] overflow-y-auto p-0" // Adjusted padding
          aria-label="القائمة الرئيسية"
        >
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2">
              <Package2 className="h-6 w-6" />
              {siteName}
            </SheetTitle>
          </SheetHeader>

          <div className="p-4">
            {isAuthenticated && user ? (
              <div className="flex items-center mb-4 p-3 bg-muted rounded-lg">
                <Avatar className="h-10 w-10 ltr:mr-3 rtl:ml-3">
                  <AvatarImage src={user.avatar || "/placeholder-user.jpg"} alt={user.name || "User avatar"} />
                  <AvatarFallback>{user?.name?.charAt(0)?.toUpperCase() || "U"}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{user.name || "مستخدم"}</p>
                  <p className="text-xs text-muted-foreground">{user.email || "لا يوجد بريد إلكتروني"}</p>
                </div>
              </div>
            ) : null}

            <nav className="flex flex-col gap-1" aria-label="قائمة التنقل المحمولة">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => handleNavigation(route.href)}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md text-sm font-medium transition-colors",
                    route.active
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={route.active ? "page" : undefined}
                >
                  {route.icon && <route.icon className="ltr:mr-2 rtl:ml-2 h-4 w-4" />}
                  {route.label}
                </Link>
              ))}

              <div className="h-px bg-border my-3" aria-hidden="true" />

              {isAuthenticated ? (
                <>
                  <Link href="/profile" onClick={() => handleNavigation("/profile")}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-muted-foreground hover:text-foreground"
                    >
                      <User className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                      الملف الشخصي
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-500/10"
                    onClick={() => {
                      logout()
                      setOpen(false)
                    }}
                  >
                    <LogOut className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                    تسجيل الخروج
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" onClick={() => handleNavigation("/auth/login")}>
                    <Button variant="outline" className="w-full mb-2">
                      تسجيل الدخول
                    </Button>
                  </Link>
                  <Link href="/auth/register" onClick={() => handleNavigation("/auth/register")}>
                    <Button className="w-full">إنشاء حساب</Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
