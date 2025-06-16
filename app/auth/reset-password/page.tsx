import type { Metadata } from "next"
import ResetPasswordClientPage from "./ResetPasswordClientPage"

export const metadata: Metadata = {
  title: "إعادة تعيين كلمة المرور | وكالة خلك فخم",
  description: "صفحة إعادة تعيين كلمة المرور لوكالة خلك فخم",
}

export default function ResetPasswordPage() {
  return <ResetPasswordClientPage />
}
