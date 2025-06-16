"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

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
  ]

  // Admin specific routes
  const adminRoutes = [
    {
      href: "/admin",
      label: "لوحة التحكم",
      active: pathname === "/admin",
    },
    {
      href: "/financial",
      label: "الإدارة المالية",
      active: pathname === "/financial",
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative p-2 h-10 w-10 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          aria-label="فتح القائمة الرئيسية"
          aria-expanded={open}
          aria-controls="mobile-menu"
          data-testid="mobile-menu-button"
        >
          <Menu className="h-5 w-5 transition-transform duration-200" />
          <span className="sr-only">فتح القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[80%] sm:w-[350px] overflow-y-auto"
        id="mobile-menu"
        aria-label="القائمة الرئيسية"
      >
        <SheetHeader className="text-right">
          <SheetTitle>وكالة خلك فخم</SheetTitle>
          <p className="text-sm text-muted-foreground">قائمة التنقل الرئيسية للموقع</p>
        </SheetHeader>

        {isAuthenticated && user && (
          <div className="flex items-center mt-6 mb-2 p-4 bg-muted rounded-lg">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 mt-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-2 px-3 rounded-md text-sm font-medium transition-colors",
                route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              {route.label}
            </Link>
          ))}

          <div className="h-px bg-border my-4" />

          {isAuthenticated ? (
            <>
              <Link href="/profile" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full mb-2 justify-start">
                  <User className="h-4 w-4 mr-2" />
                  الملف الشخصي
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full mb-2 justify-start text-destructive hover:text-destructive"
                onClick={() => {
                  logout()
                  setOpen(false)
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                تسجيل الخروج
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full mb-2">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link href="/auth/register" onClick={() => setOpen(false)}>
                <Button className="w-full">إنشاء حساب</Button>
              </Link>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
