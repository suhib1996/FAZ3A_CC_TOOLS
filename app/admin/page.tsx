import type { Metadata } from "next"
import AdminDashboardClient from "./client"

export const metadata: Metadata = {
  title: "لوحة تحكم المدير | وكالة خلك فخم",
  description: "لوحة تحكم المدير لإدارة المذيعين والمنصات والمعاملات المالية",
}

export default function AdminDashboardPage() {
  return <AdminDashboardClient />
}
