import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4">الصفحة غير موجودة</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو تغيير عنوانها.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button>العودة للصفحة الرئيسية</Button>
        </Link>
      </div>
    </div>
  )
}
