"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth, type UserRole } from "@/contexts/auth-context"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles: UserRole[]
  redirectTo?: string
}

export function ProtectedRoute({ children, allowedRoles, redirectTo = "/auth/login" }: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading, hasPermission } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        // Store the intended path for redirect after login
        if (pathname !== "/auth/login") {
          sessionStorage.setItem("redirectAfterLogin", pathname)
        }
        router.push(redirectTo)
      } else if (!hasPermission(allowedRoles)) {
        // User is logged in but doesn't have permission
        router.push("/unauthorized")
      }
    }
  }, [isAuthenticated, isLoading, hasPermission, allowedRoles, router, redirectTo, pathname])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!isAuthenticated || !hasPermission(allowedRoles)) {
    return null
  }

  return <>{children}</>
}
