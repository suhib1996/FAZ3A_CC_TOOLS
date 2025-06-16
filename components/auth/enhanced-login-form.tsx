"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/auth-context"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { toast } from "@/components/ui/use-toast"
import { EmailValidator } from "./email-validator"
import { Eye, EyeOff, Shield, AlertTriangle } from "lucide-react"

export default function EnhancedLoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [emailMessage, setEmailMessage] = useState("")
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [isBlocked, setIsBlocked] = useState(false)
  const [blockTimeRemaining, setBlockTimeRemaining] = useState(0)

  const { login } = useAuth()
  const router = useRouter()

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  // Handle email validation
  const handleEmailValidation = (isValid: boolean, message: string) => {
    setEmailValid(isValid)
    setEmailMessage(message)
  }

  // Handle login attempts and blocking
  useEffect(() => {
    const storedAttempts = localStorage.getItem("loginAttempts")
    const storedBlockTime = localStorage.getItem("blockTime")

    if (storedAttempts) {
      setLoginAttempts(Number.parseInt(storedAttempts))
    }

    if (storedBlockTime) {
      const blockTime = Number.parseInt(storedBlockTime)
      const now = Date.now()
      if (now < blockTime) {
        setIsBlocked(true)
        setBlockTimeRemaining(Math.ceil((blockTime - now) / 1000))

        const interval = setInterval(() => {
          const remaining = Math.ceil((blockTime - Date.now()) / 1000)
          if (remaining <= 0) {
            setIsBlocked(false)
            setBlockTimeRemaining(0)
            localStorage.removeItem("blockTime")
            localStorage.removeItem("loginAttempts")
            setLoginAttempts(0)
            clearInterval(interval)
          } else {
            setBlockTimeRemaining(remaining)
          }
        }, 1000)

        return () => clearInterval(interval)
      }
    }
  }, [])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isBlocked) {
      toast({
        title: "تم حظر تسجيل الدخول مؤقتاً",
        description: `يرجى المحاولة بعد ${blockTimeRemaining} ثانية`,
        variant: "destructive",
      })
      return
    }

    if (!emailValid) {
      toast({
        title: "خطأ في البريد الإلكتروني",
        description: emailMessage || "يرجى إدخال بريد إلكتروني صحيح",
        variant: "destructive",
      })
      return
    }

    if (formData.password.length < 6) {
      toast({
        title: "كلمة المرور قصيرة جداً",
        description: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const success = await login(formData.email, formData.password)

      if (success) {
        // Reset login attempts on successful login
        localStorage.removeItem("loginAttempts")
        localStorage.removeItem("blockTime")
        setLoginAttempts(0)

        // Handle remember me
        if (formData.rememberMe) {
          localStorage.setItem("rememberUser", formData.email)
        }

        const redirectPath = sessionStorage.getItem("redirectAfterLogin") || "/"
        sessionStorage.removeItem("redirectAfterLogin")
        router.push(redirectPath)

        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: "مرحباً بك مرة أخرى في نظام إدارة الوكالات",
        })
      } else {
        // Handle failed login attempts
        const newAttempts = loginAttempts + 1
        setLoginAttempts(newAttempts)
        localStorage.setItem("loginAttempts", newAttempts.toString())

        if (newAttempts >= 5) {
          // Block for 15 minutes after 5 failed attempts
          const blockTime = Date.now() + 15 * 60 * 1000
          localStorage.setItem("blockTime", blockTime.toString())
          setIsBlocked(true)
          setBlockTimeRemaining(15 * 60)

          toast({
            title: "تم حظر تسجيل الدخول",
            description: "تم حظر تسجيل الدخول لمدة 15 دقيقة بسبب المحاولات المتكررة الفاشلة",
            variant: "destructive",
          })
        } else {
          toast({
            title: "فشل تسجيل الدخول",
            description: `البريد الإلكتروني أو كلمة المرور غير صحيحة. المحاولات المتبقية: ${5 - newAttempts}`,
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Load remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberUser")
    if (rememberedEmail) {
      setFormData((prev) => ({ ...prev, email: rememberedEmail, rememberMe: true }))
    }
  }, [])

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">تسجيل الدخول الآمن</h1>
          <p className="text-sm text-muted-foreground">أدخل بريدك الإلكتروني وكلمة المرور للدخول إلى حسابك</p>
        </div>

        {isBlocked && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm font-medium text-red-800">تم حظر تسجيل الدخول مؤقتاً</p>
              <p className="text-xs text-red-600">
                الوقت المتبقي: {Math.floor(blockTimeRemaining / 60)}:
                {(blockTimeRemaining % 60).toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        )}

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>تسجيل الدخول</CardTitle>
              <CardDescription>قم بتسجيل الدخول للوصول إلى حسابك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isBlocked}
                  aria-describedby="email-validation"
                />
                <div id="email-validation">
                  <EmailValidator email={formData.email} onValidationChange={handleEmailValidation} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">كلمة المرور *</Label>
                  <Link href="/auth/reset-password" className="text-xs text-primary hover:underline">
                    نسيت كلمة المرور؟
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    disabled={isBlocked}
                    minLength={6}
                    aria-describedby="password-help"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isBlocked}
                    aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <p id="password-help" className="text-xs text-muted-foreground">
                  يجب أن تكون كلمة المرور 6 أحرف على الأقل
                </p>
              </div>

              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked as boolean }))}
                  disabled={isBlocked}
                />
                <Label htmlFor="rememberMe" className="text-sm font-normal">
                  تذكرني
                </Label>
              </div>

              {loginAttempts > 0 && loginAttempts < 5 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    محاولات فاشلة: {loginAttempts}/5. المحاولات المتبقية: {5 - loginAttempts}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" type="submit" disabled={isSubmitting || isBlocked || !emailValid}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner size="sm" />
                    <span>جاري تسجيل الدخول...</span>
                  </div>
                ) : (
                  "تسجيل الدخول"
                )}
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                ليس لديك حساب؟{" "}
                <Link href="/auth/register" className="text-primary hover:underline">
                  إنشاء حساب جديد
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
