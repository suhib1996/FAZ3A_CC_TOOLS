"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MenuButton } from "@/components/menu-button"
import { useOnClickOutside } from "@/hooks/use-click-outside"
// Import the focus trap hook
import { useFocusTrap } from "@/hooks/use-focus-trap"
// Import the mobile detection hook
import { useMobile } from "@/hooks/use-mobile"

export function EnhancedMobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const [mounted, setMounted] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close the menu on mobile
  useOnClickOutside(navRef, () => {
    if (open) setOpen(false)
  })

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Ensure component is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Admin specific routes
  const adminRoutes = [
    {
      href: "/admin",
      label: "لوحة التحكم",
      active: pathname === "/admin",
    },
    {
      href: "/admin/broadcasters",
      label: "إدارة المذيعين",
      active: pathname === "/admin/broadcasters",
    },
    {
      href: "/financial",
      label: "الإدارة المالية",
      active: pathname === "/financial",
    },
    {
      href: "/settings",
      label: "الإعدادات",
      active: pathname === "/settings",
    },
  ]

  // Agent specific routes
  const agentRoutes = [
    {
      href: "/agent/dashboard",
      label: "لوحة التحكم",
      active: pathname === "/agent/dashboard",
    },
    {
      href: "/financial",
      label: "الإدارة المالية",
      active: pathname === "/financial",
    },
  ]

  // Broadcaster specific routes
  const broadcasterRoutes = [
    {
      href: "/broadcaster/dashboard",
      label: "لوحة التحكم",
      active: pathname === "/broadcaster/dashboard",
    },
    {
      href: "/broadcaster/earnings",
      label: "الأرباح",
      active: pathname === "/broadcaster/earnings",
    },
  ]

  // Basic routes available to all users
  const publicRoutes = [
    {
      href: "/",
      label: "الرئيسية",
      active: pathname === "/",
    },
    {
      href: "/platforms",
      label: "المنصات",
      active: pathname === "/platforms",
    },
    {
      href: "/services",
      label: "خدماتنا",
      active: pathname === "/services",
    },
    {
      href: "/offers",
      label: "العروض والشحن",
      active: pathname === "/offers",
    },
    {
      href: "/about",
      label: "من نحن",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "اتصل بنا",
      active: pathname === "/contact",
    },
    {
      href: "/settings",
      label: "الإعدادات",
      active: pathname === "/settings",
    },
  ]

  // Get role-specific routes
  const getRoleRoutes = () => {
    if (!user) return []

    switch (user.role) {
      case "admin":
        return adminRoutes
      case "agent":
        return agentRoutes
      case "broadcaster":
        return broadcasterRoutes
      default:
        return []
    }
  }

  // Combine public routes with role-specific routes
  const routes = [...publicRoutes, ...(isAuthenticated ? getRoleRoutes() : [])]

  const handleNavigation = useCallback((href: string) => {
    try {
      setOpen(false)
      // Additional navigation logic if needed
    } catch (error) {
      console.error("Navigation error:", error)
      // Fallback handling
    }
  }, [])

  // Add this inside the component, before the return statement
  const menuRef = useFocusTrap(open)

  // Add this inside the component, before the mounted check
  const isMobile = useMobile()

  // Update the mounted check to also check for mobile
  if (!mounted || !isMobile) {
    return <div className="md:hidden w-10 h-10" />
  }

  return (
    <div ref={navRef} className="relative md:hidden">
      <MenuButton isOpen={open} onClick={() => setOpen(!open)} />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-[80%] sm:w-[350px] overflow-y-auto"
          id="mobile-menu"
          aria-label="القائمة الرئيسية"
          ref={menuRef}
        >
          <SheetHeader className="text-right">
            <SheetTitle>وكالة خلك فخم</SheetTitle>
            <p className="text-sm text-muted-foreground">قائمة التنقل الرئيسية للموقع</p>
          </SheetHeader>

          {isAuthenticated && user ? (
            <div className="flex items-center mt-6 mb-2 p-4 bg-muted rounded-lg">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name || "User avatar"} />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{user.name || "User"}</p>
                <p className="text-xs text-muted-foreground">{user.email || "No email provided"}</p>
              </div>
            </div>
          ) : null}

          <nav className="flex flex-col gap-3 mt-8" aria-label="قائمة التنقل المحمولة">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => handleNavigation(route.href)}
                className={cn(
                  "py-2 px-3 rounded-md text-sm font-medium transition-colors mobile-nav-link",
                  route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
                aria-current={route.active ? "page" : undefined}
              >
                {route.label}
              </Link>
            ))}

            <div className="h-px bg-border my-4" aria-hidden="true" />

            {isAuthenticated ? (
              <>
                <Link href="/profile" onClick={() => handleNavigation("/profile")}>
                  <Button variant="outline" className="w-full mb-2 justify-start">
                    <User className="h-4 w-4 mr-2" />
                    الملف الشخصي
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full mb-2 justify-start text-destructive hover:text-destructive"
                  onClick={() => {
                    try {
                      logout()
                      setOpen(false)
                    } catch (error) {
                      console.error("Logout error:", error)
                      // Show error toast or message
                    }
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
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
        </SheetContent>
      </Sheet>
    </div>
  )
}
