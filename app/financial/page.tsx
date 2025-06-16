"use client"

import { ProtectedRoute } from "@/components/protected-route"
import FinancialManagementContent from "@/components/financial/management-content"

export default function FinancialManagementPage() {
  return (
    <ProtectedRoute allowedRoles={["admin", "agent"]}>
      <FinancialManagementContent />
    </ProtectedRoute>
  )
}
