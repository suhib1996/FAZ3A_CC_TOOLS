"use client"

import { ProtectedRoute } from "@/components/protected-route"
import AdminDashboardContent from "@/components/admin/dashboard-content"

export default function AdminDashboardClient() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminDashboardContent />
    </ProtectedRoute>
  )
}
