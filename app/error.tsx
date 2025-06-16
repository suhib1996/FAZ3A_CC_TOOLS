"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-destructive">خطأ</h1>
      <h2 className="text-2xl font-semibold mt-4">حدث خطأ أثناء تحميل الصفحة</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        نأسف على هذا الخطأ. يمكنك إعادة المحاولة أو العودة إلى الصفحة الرئيسية.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset} variant="outline">
          إعادة المحاولة
        </Button>
        <Link href="/">
          <Button>العودة للصفحة الرئيسية</Button>
        </Link>
      </div>
    </div>
  )
}
