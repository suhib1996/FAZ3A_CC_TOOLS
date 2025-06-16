import type { Metadata } from "next"
import FeatureTester from "@/components/testing/feature-tester"

export const metadata: Metadata = {
  title: "اختبار الوظائف | نظام إدارة الوكالات",
  description: "اختبار شامل لجميع وظائف التطبيق",
}

export default function FeaturesTestPage() {
  return <FeatureTester />
}
