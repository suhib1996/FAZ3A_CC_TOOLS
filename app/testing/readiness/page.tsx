import type { Metadata } from "next"
import ReadinessChecker from "@/components/testing/readiness-checker"

export const metadata: Metadata = {
  title: "فحص الجاهزية | نظام إدارة الوكالات",
  description: "فحص جاهزية التطبيق للاختبار",
}

export default function ReadinessPage() {
  return <ReadinessChecker />
}
