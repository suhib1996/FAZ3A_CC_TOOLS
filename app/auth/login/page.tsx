import { AuthRedirect } from "@/components/auth-redirect"
import EnhancedLoginForm from "@/components/auth/enhanced-login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تسجيل الدخول | نظام إدارة الوكالات",
  description: "صفحة تسجيل الدخول الآمنة لنظام إدارة الوكالات",
}

export default function LoginPage() {
  return (
    <AuthRedirect>
      <EnhancedLoginForm />
    </AuthRedirect>
  )
}
