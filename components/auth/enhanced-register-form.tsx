"use client"

import type React from "react"
import { useState } from "react"
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
import { PasswordStrength } from "./password-strength"
import { EmailValidator } from "./email-validator"
import { Eye, EyeOff, UserPlus, Shield } from "lucide-react"

export default function EnhancedRegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptPrivacy: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [emailMessage, setEmailMessage] = useState("")
  const [passwordStrong, setPasswordStrong] = useState(false)

  const { register } = useAuth()
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

  // Handle password strength
  const handlePasswordStrength = (isStrong: boolean) => {
    setPasswordStrong(isStrong)
  }

  // Validate form
  const validateForm = () => {
    const errors: string[] = []

    if (!formData.firstName.trim()) {
      errors.push("الاسم الأول مطلوب")
    }

    if (!formData.lastName.trim()) {
      errors.push("الاسم الأخير مطلوب")
    }

    if (!emailValid) {
      errors.push(emailMessage || "البريد الإلكتروني غير صحيح")
    }

    if (!passwordStrong) {
      errors.push("كلمة المرور ضعيفة جداً")
    }

    if (formData.password !== formData.confirmPassword) {
      errors.push("كلمات المرور غير متطابقة")
    }

    if (!formData.acceptTerms) {
      errors.push("يجب الموافقة على الشروط والأحكام")
    }

    if (!formData.acceptPrivacy) {
      errors.push("يجب الموافقة على سياسة الخصوصية")
    }

    return errors
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm()
    if (errors.length > 0) {
      toast({
        title: "خطأ في البيانات",
        description: errors[0],
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const success = await register(
        {
          name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
          email: formData.email.toLowerCase(),
          role: "broadcaster", // Default role for new registrations
          createdAt: new Date(),
        },
        formData.password,
      )

      if (success) {
        toast({
          title: "تم إنشاء الحساب بنجاح",
          description: "يرجى تسجيل الدخول باستخدام بيانات حسابك الجديد",
        })
        router.push("/auth/login")
      } else {
        toast({
          title: "فشل إنشاء الحساب",
          description: "البريد الإلكتروني مستخدم بالفعل أو حدث خطأ آخر",
          variant: "destructive",
        })
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

  return (
    <div className="container flex min-h-screen w-screen flex-col items-center justify-center py-10">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <UserPlus className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">إنشاء حساب جديد</h1>
          <p className="text-sm text-muted-foreground">أدخل بياناتك لإنشاء حساب جديد والانضمام إلى منصتنا</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>إنشاء حساب</CardTitle>
              <CardDescription>قم بإنشاء حساب جديد للوصول إلى خدماتنا</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">الاسم الأول *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="محمد"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={50}
                    aria-describedby="firstName-help"
                  />
                  <p id="firstName-help" className="text-xs text-muted-foreground">
                    2-50 حرف
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">الاسم الأخير *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="أحمد"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={50}
                    aria-describedby="lastName-help"
                  />
                  <p id="lastName-help" className="text-xs text-muted-foreground">
                    2-50 حرف
                  </p>
                </div>
              </div>

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
                  aria-describedby="email-validation"
                />
                <div id="email-validation">
                  <EmailValidator email={formData.email} onValidationChange={handleEmailValidation} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={8}
                    aria-describedby="password-strength"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <div id="password-strength">
                  <PasswordStrength password={formData.password} onStrengthChange={handlePasswordStrength} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={8}
                    aria-describedby="confirm-password-help"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute left-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "إخفاء تأكيد كلمة المرور" : "إظهار تأكيد كلمة المرور"}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p id="confirm-password-help" className="text-xs text-red-600">
                    كلمات المرور غير متطابقة
                  </p>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, acceptTerms: checked as boolean }))}
                    required
                  />
                  <Label htmlFor="acceptTerms" className="text-sm font-normal leading-5">
                    أوافق على{" "}
                    <Link href="/terms" className="text-primary hover:underline" target="_blank">
                      الشروط والأحكام
                    </Link>{" "}
                    *
                  </Label>
                </div>

                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox
                    id="acceptPrivacy"
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, acceptPrivacy: checked as boolean }))
                    }
                    required
                  />
                  <Label htmlFor="acceptPrivacy" className="text-sm font-normal leading-5">
                    أوافق على{" "}
                    <Link href="/privacy" className="text-primary hover:underline" target="_blank">
                      سياسة الخصوصية
                    </Link>{" "}
                    *
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                className="w-full"
                type="submit"
                disabled={
                  isSubmitting || !emailValid || !passwordStrong || !formData.acceptTerms || !formData.acceptPrivacy
                }
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner size="sm" />
                    <span>جاري إنشاء الحساب...</span>
                  </div>
                ) : (
                  "إنشاء حساب"
                )}
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                لديك حساب بالفعل؟{" "}
                <Link href="/auth/login" className="text-primary hover:underline">
                  تسجيل الدخول
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-4 w-4" />
            <span>بياناتك محمية بأعلى معايير الأمان</span>
          </div>
          <p>نحن نحترم خصوصيتك ولا نشارك بياناتك مع أطراف ثالثة</p>
        </div>
      </div>
    </div>
  )
}
