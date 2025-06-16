import { AuthRedirect } from "@/components/auth-redirect"
import EnhancedRegisterForm from "@/components/auth/enhanced-register-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "إنشاء حساب جديد | نظام إدارة الوكالات",
  description: "صفحة إنشاء حساب جديد آمنة لنظام إدارة الوكالات",
}

export default function RegisterPage() {
  return (
    <AuthRedirect>
      <EnhancedRegisterForm />
    </AuthRedirect>
  )
}
