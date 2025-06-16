import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Shield className="h-24 w-24 text-primary opacity-30" />
        </div>
        <h1 className="text-3xl font-bold mb-4">لا تملك صلاحية الوصول</h1>
        <p className="text-muted-foreground mb-6 max-w-md">
          عذراً، لا تملك الصلاحية اللازمة للوصول إلى هذه الصفحة. إذا كنت تعتقد أن هذا خطأ، يرجى التواصل مع مدير النظام.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button>العودة إلى الصفحة الرئيسية</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">الدعم الفني</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
