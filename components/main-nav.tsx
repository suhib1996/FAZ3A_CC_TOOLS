"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Package2 } from "lucide-react" // Using a Lucide icon as a placeholder

// Simplified local type if MainNavItem from "@/types" is not available or complex
interface NavItem {
  href: string
  label: string
  active: boolean
  disabled?: boolean
}

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  // Define siteName directly or pass as a prop if needed
  const siteName = "نظام إدارة الوكالات"

  const appRoutes: NavItem[] = [
    {
      href: "/",
      label: "الرئيسية",
      active: pathname === "/",
    },
    {
      href: "/kiti-agency-promo", // Link to the new promo page
      label: "انضم لـ Kiti معنا",
      active: pathname === "/kiti-agency-promo",
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
      href: "/badges",
      label: "الشارات",
      active: pathname === "/badges",
    },
    {
      href: "/competitions",
      label: "المسابقات",
      active: pathname === "/competitions",
    },
    {
      href: "/admin",
      label: "لوحة التحكم",
      active: pathname.startsWith("/admin"),
    },
    {
      href: "/financial",
      label: "الإدارة المالية",
      active: pathname === "/financial",
    },
    {
      href: "/profile",
      label: "الملف الشخصي",
      active: pathname === "/profile",
    },
    {
      href: "/settings",
      label: "الإعدادات",
      active: pathname === "/settings",
    },
    {
      href: "/ads",
      label: "الإعلانات",
      active: pathname === "/ads",
    },
    {
      href: "/ai-assistant",
      label: "المساعد الذكي",
      active: pathname === "/ai-assistant",
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

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
        <Package2 className="h-6 w-6" aria-hidden="true" />
        <span className="hidden font-bold sm:inline-block">{siteName}</span>
      </Link>
      <nav
        className={cn(
          "flex items-center space-x-4 space-x-reverse lg:space-x-6 lg:space-x-reverse overflow-x-auto",
          "scrollbar-hide py-2 px-1",
          className,
        )}
        role="navigation"
        aria-label="التنقل الرئيسي"
        {...props}
      >
        {appRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "relative text-sm font-medium transition-all duration-200 ease-in-out whitespace-nowrap",
              "px-3 py-2 rounded-lg hover:bg-accent/50 hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "active:scale-95 transform",
              route.active
                ? "text-primary bg-primary/10 border border-primary/20 shadow-sm font-semibold" +
                    " before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2" +
                    " before:w-6 before:h-0.5 before:bg-primary before:rounded-full" +
                    " after:absolute after:inset-0 after:bg-primary/5 after:rounded-lg after:-z-10"
                : "text-muted-foreground hover:text-foreground",
              route.disabled && "cursor-not-allowed opacity-80",
            )}
            aria-current={route.active ? "page" : undefined}
          >
            <span className="relative z-10">{route.label}</span>
            {route.active && (
              <span
                className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"
                aria-hidden="true"
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}
