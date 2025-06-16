"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { User, LogOut, Home, Layers, Package, Tag, Info, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileMenuButton } from "@/components/mobile-menu-button"
import { toast } from "@/components/ui/use-toast"

export function MobileNavigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLElement | null>(null)
  const lastFocusableRef = useRef<HTMLElement | null>(null)

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

  // Handle focus trap for accessibility
  useEffect(() => {
    if (!open || !menuRef.current) return

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    if (focusableElements.length === 0) return

    firstFocusableRef.current = focusableElements[0]
    lastFocusableRef.current = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          lastFocusableRef.current?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          firstFocusableRef.current?.focus()
          e.preventDefault()
        }
      }
    }

    document.addEventListener("keydown", handleTabKey)
    return () => document.removeEventListener("keydown", handleTabKey)
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

  // Navigation routes with icons for better visual cues
  const routes = [
    {
      href: "/",
      label: "الرئيسية",
      active: pathname === "/",
      icon: <Home className="h-4 w-4 ml-2" />,
    },
    {
      href: "/platforms",
      label: "المنصات",
      active: pathname === "/platforms",
      icon: <Layers className="h-4 w-4 ml-2" />,
    },
    {
      href: "/services",
      label: "خدماتنا",
      active: pathname === "/services",
      icon: <Package className="h-4 w-4 ml-2" />,
    },
    {
      href: "/offers",
      label: "العروض والشحن",
      active: pathname === "/offers",
      icon: <Tag className="h-4 w-4 ml-2" />,
    },
    {
      href: "/about",
      label: "من نحن",
      active: pathname === "/about",
      icon: <Info className="h-4 w-4 ml-2" />,
    },
    {
      href: "/contact",
      label: "اتصل بنا",
      active: pathname === "/contact",
      icon: <Phone className="h-4 w-4 ml-2" />,
    },
  ]

  // Handle navigation with error handling
  const handleNavigation = useCallback(
    (href: string) => {
      try {
        router.push(href)
        setOpen(false)
      } catch (error) {
        console.error("Navigation error:", error)
        toast({
          title: "خطأ في التنقل",
          description: "حدث خطأ أثناء محاولة الانتقال. يرجى المحاولة مرة أخرى.",
          variant: "destructive",
        })
      }
    },
    [router],
  )

  // Handle logout with error handling
  const handleLogout = useCallback(() => {
    try {
      logout()
      setOpen(false)
      toast({
        title: "تم تسجيل الخروج بنجاح",
        description: "تم تسجيل خروجك بنجاح من حسابك.",
      })
    } catch (error) {
      console.error("Logout error:", error)
      toast({
        title: "خطأ في تسجيل الخروج",
        description: "حدث خطأ أثناء محاولة تسجيل الخروج. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    }
  }, [logout])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative md:hidden">
      <MobileMenuButton isOpen={open} onClick={() => setOpen(!open)} />

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
              <Avatar className="h-10 w-10 ml-3">
                <AvatarImage src={user.avatar} alt={user.name || "صورة المستخدم"} />
                <AvatarFallback>{user?.name?.charAt(0) || "م"}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{user.name || "المستخدم"}</p>
                <p className="text-xs text-muted-foreground">{user.email || "لا يوجد بريد إلكتروني"}</p>
              </div>
            </div>
          ) : null}

          <nav className="flex flex-col gap-3 mt-8" aria-label="قائمة التنقل المحمولة">
            {routes.map((route) => (
              <button
                key={route.href}
                onClick={() => handleNavigation(route.href)}
                className={cn(
                  "flex items-center py-2 px-3 rounded-md text-sm font-medium transition-colors text-right w-full",
                  "mobile-nav-link focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                  route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted focus:bg-muted/50",
                )}
                aria-current={route.active ? "page" : undefined}
              >
                {route.icon}
                {route.label}
              </button>
            ))}

            <div className="h-px bg-border my-4" aria-hidden="true" />

            {isAuthenticated ? (
              <>
                <button
                  onClick={() => handleNavigation("/profile")}
                  className="flex items-center w-full mb-2 justify-start py-2 px-3 rounded-md text-sm font-medium
                    bg-muted/50 hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <User className="h-4 w-4 ml-2" />
                  الملف الشخصي
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full mb-2 justify-start py-2 px-3 rounded-md text-sm font-medium
                    text-destructive bg-destructive/10 hover:bg-destructive/20 transition-colors
                    focus-visible:ring-2 focus-visible:ring-destructive focus-visible:outline-none"
                >
                  <LogOut className="h-4 w-4 ml-2" />
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavigation("/auth/login")}
                  className="w-full mb-2 py-2 px-3 rounded-md text-sm font-medium
                    bg-muted/50 hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  تسجيل الدخول
                </button>
                <button
                  onClick={() => handleNavigation("/auth/register")}
                  className="w-full py-2 px-3 rounded-md text-sm font-medium
                    bg-primary text-primary-foreground hover:bg-primary/90 transition-colors
                    focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  إنشاء حساب
                </button>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
