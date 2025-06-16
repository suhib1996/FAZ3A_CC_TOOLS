"use client"

import { ProtectedRoute } from "@/components/protected-route"
import BroadcasterDashboardContent from "@/components/broadcaster/dashboard-content"

export default function BroadcasterDashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["broadcaster"]}>
      <BroadcasterDashboardContent />
    </ProtectedRoute>
  )
}
