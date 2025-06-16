import type { Metadata } from "next"
import BroadcastersManagementClient from "./client"

export const metadata: Metadata = {
  title: "إدارة المذيعين | نظام إدارة الوكالات",
  description: "إدارة وتتبع جميع المذيعين في النظام",
}

export default function BroadcastersManagementPage() {
  return <BroadcastersManagementClient />
}
