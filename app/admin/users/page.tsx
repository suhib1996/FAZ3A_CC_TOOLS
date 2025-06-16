"use client"

import { ProtectedRoute } from "@/components/protected-route"
import UsersManagementContent from "@/components/admin/users-management"

export default function UsersManagementPage() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <UsersManagementContent />
    </ProtectedRoute>
  )
}
