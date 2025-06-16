"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function HeaderButtons() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return null // User profile component will be shown instead
  }

  return (
    <div className="hidden md:flex gap-2">
      <Link href="/auth/login">
        <Button variant="outline" size="sm">
          تسجيل الدخول
        </Button>
      </Link>
      <Link href="/auth/register">
        <Button size="sm">إنشاء حساب</Button>
      </Link>
    </div>
  )
}
