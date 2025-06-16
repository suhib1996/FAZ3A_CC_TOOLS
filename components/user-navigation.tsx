"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"

export function UserNavigation() {
  const { user, isAuthenticated } = useAuth()
  const pathname = usePathname()

  if (!isAuthenticated || !user) {
    return null
  }

  // Admin navigation links
  const adminLinks = [
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
  ]

  // Agent navigation links
  const agentLinks = [
    {
      href: "/agent/dashboard",
      label: "لوحة التحكم",
      active: pathname === "/agent/dashboard",
    },
    {
      href: "/agent/broadcasters",
      label: "المذيعون",
      active: pathname === "/agent/broadcasters",
    },
    {
      href: "/financial",
      label: "الإدارة المالية",
      active: pathname === "/financial",
    },
  ]

  // Broadcaster navigation links
  const broadcasterLinks = [
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
    {
      href: "/broadcaster/schedule",
      label: "جدول البث",
      active: pathname === "/broadcaster/schedule",
    },
    {
      href: "/broadcaster/badges",
      label: "الشارات",
      active: pathname === "/broadcaster/badges",
    },
  ]

  // Select the appropriate navigation links based on user role
  const links = user.role === "admin" ? adminLinks : user.role === "agent" ? agentLinks : broadcasterLinks

  return (
    <div className="bg-muted/50 px-4 py-2 rounded-lg">
      <nav className="flex items-center space-x-4 space-x-reverse">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              link.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
