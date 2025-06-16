"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function ResetPasswordClientPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال البريد الإلكتروني",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // هنا سيتم إضافة الاتصال بالخادم لإرسال رابط إعادة التعيين
      // محاكاة الاتصال بالخادم
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "تم إرسال رابط إعادة التعيين",
        description: "يرجى التحقق من بريدك الإلكتروني للحصول على تعليمات إعادة تعيين كلمة المرور",
      })
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "تعذر إرسال رابط إعادة التعيين. يرجى المحاولة مرة أخرى لاحقًا",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">إعادة تعيين كلمة المرور</h1>
          <p className="text-sm text-muted-foreground">أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور</p>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>إعادة تعيين كلمة المرور</CardTitle>
              <CardDescription>سنرسل لك رابطًا لإعادة تعيين كلمة المرور</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner size="sm" />
                    <span>جاري الإرسال...</span>
                  </div>
                ) : (
                  "إرسال رابط إعادة التعيين"
                )}
              </Button>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                تذكرت كلمة المرور؟{" "}
                <Link href="/auth/login" className="text-primary hover:underline">
                  العودة لتسجيل الدخول
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
