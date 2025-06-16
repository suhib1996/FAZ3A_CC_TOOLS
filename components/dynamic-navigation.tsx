"use client"

import { useAuth } from "@/contexts/auth-context"
import { UserNavigation } from "@/components/user-navigation"

export function DynamicNavigation() {
  const { isAuthenticated } = useAuth()

  // Only show user navigation when authenticated
  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container py-2">
      <UserNavigation />
    </div>
  )
}
