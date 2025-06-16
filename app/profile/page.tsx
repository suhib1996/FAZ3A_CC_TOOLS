"use client"

import { ProtectedRoute } from "@/components/protected-route"
import ProfileContent from "@/components/profile/profile-content"

export default function ProfilePage() {
  return (
    <ProtectedRoute allowedRoles={["admin", "agent", "broadcaster"]}>
      <ProfileContent />
    </ProtectedRoute>
  )
}
