import type { Metadata } from "next"
import AdminDashboardClient from "./client"

export const metadata: Metadata = {
  title: "لوحة تحكم المدير | نظام إدارة الوكالات",
  description: "لوحة تحكم المدير لإدارة المذيعين والمنصات والمعاملات المالية",
}

export default function AdminDashboardPage() {
  return <AdminDashboardClient />
}
