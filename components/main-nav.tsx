"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const routes = [
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
      href: "/financial",
      label: "الإدارة المالية",
      active: pathname === "/financial",
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
    <nav
      className={cn(
        "flex items-center space-x-4 space-x-reverse lg:space-x-6 lg:space-x-reverse overflow-x-auto",
        className,
      )}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
