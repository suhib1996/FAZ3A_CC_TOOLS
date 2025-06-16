"use client"

import { ProtectedRoute } from "@/components/protected-route"
import PlatformsManagementContent from "@/components/admin/platforms-management"

export default function PlatformsManagementPage() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <PlatformsManagementContent />
    </ProtectedRoute>
  )
}
