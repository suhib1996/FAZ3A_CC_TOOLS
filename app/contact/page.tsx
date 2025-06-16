import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "اتصل بنا | نظام إدارة الوكالات",
  description: "تواصل مع نظام إدارة الوكالات للاستفسارات والدعم",
}

export default function ContactPage() {
  return <ContactPageClient />
}
