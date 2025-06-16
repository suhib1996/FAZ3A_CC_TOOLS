import type { Metadata } from "next"
import ReadinessAssessment from "@/components/production/readiness-assessment"

export const metadata: Metadata = {
  title: "تقييم الجاهزية للإنتاج | نظام إدارة الوكالات",
  description: "تقييم شامل لجاهزية التطبيق للنشر في البيئة الإنتاجية",
}

export default function ProductionReadinessPage() {
  return <ReadinessAssessment />
}
