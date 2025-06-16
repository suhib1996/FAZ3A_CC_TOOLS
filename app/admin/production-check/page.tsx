import type { Metadata } from "next"
import ProductionValidator from "@/components/admin/production-validator"

export const metadata: Metadata = {
  title: "التحقق من إعدادات الإنتاج | نظام إدارة الوكالات",
  description: "التحقق من صحة إعدادات النشر الحقيقي",
}

export default function ProductionCheckPage() {
  return <ProductionValidator />
}
