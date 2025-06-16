import type { Metadata } from "next"
import SettingsClient from "./client"

export const metadata: Metadata = {
  title: "الإعدادات | نظام إدارة الوكالات",
  description: "إعدادات النظام والحساب الشخصي",
}

export default function SettingsPage() {
  return <SettingsClient />
}
