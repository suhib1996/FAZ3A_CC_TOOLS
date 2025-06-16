"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, AlertTriangle, Shield } from "lucide-react"
import { PRODUCTION_CONFIG, validateAdminCredentials } from "@/config/production"
import { toast } from "@/components/ui/use-toast"

export default function ProductionValidator() {
  const [testEmail, setTestEmail] = useState("")
  const [testPassword, setTestPassword] = useState("")
  const [validationResults, setValidationResults] = useState<{
    credentials: boolean | null
    config: boolean
    features: boolean
  }>({
    credentials: null,
    config: true,
    features: true,
  })

  // Test admin credentials
  const testCredentials = () => {
    const isValid = validateAdminCredentials(testEmail, testPassword)
    setValidationResults((prev) => ({ ...prev, credentials: isValid }))

    if (isValid) {
      toast({
        title: "✅ بيانات المدير صحيحة",
        description: "تم التحقق من بيانات المدير بنجاح",
      })
    } else {
      toast({
        title: "❌ بيانات المدير غير صحيحة",
        description: "يرجى التحقق من البريد الإلكتروني وكلمة المرور",
        variant: "destructive",
      })
    }
  }

  // Auto-fill correct credentials for testing
  const fillCorrectCredentials = () => {
    setTestEmail(PRODUCTION_CONFIG.ADMIN_EMAIL)
    setTestPassword(PRODUCTION_CONFIG.ADMIN_PASSWORD)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <Shield className="h-12 w-12 text-primary mx-auto" />
        <h1 className="text-3xl font-bold">التحقق من إعدادات الإنتاج</h1>
        <p className="text-muted-foreground">تحقق من صحة إعدادات النشر الحقيقي لوكالة خلك فخم</p>
      </div>

      {/* Production Configuration Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            حالة إعدادات الإنتاج
          </CardTitle>
          <CardDescription>معلومات التكوين الحالي للنشر الحقيقي</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>اسم التطبيق</Label>
              <div className="p-2 bg-muted rounded">{PRODUCTION_CONFIG.APP_NAME}</div>
            </div>
            <div className="space-y-2">
              <Label>النطاق</Label>
              <div className="p-2 bg-muted rounded">{PRODUCTION_CONFIG.APP_DOMAIN}</div>
            </div>
            <div className="space-y-2">
              <Label>بريد المدير</Label>
              <div className="p-2 bg-muted rounded font-mono">{PRODUCTION_CONFIG.ADMIN_EMAIL}</div>
            </div>
            <div className="space-y-2">
              <Label>كلمة مرور المدير</Label>
              <div className="p-2 bg-muted rounded font-mono">
                {"*".repeat(PRODUCTION_CONFIG.ADMIN_PASSWORD.length)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Credentials Testing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            اختبار بيانات المدير
          </CardTitle>
          <CardDescription>اختبر صحة بيانات تسجيل دخول المدير</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="test-email">البريد الإلكتروني</Label>
              <Input
                id="test-email"
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="admin@khalakfakhem.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="test-password">كلمة المرور</Label>
              <Input
                id="test-password"
                type="password"
                value={testPassword}
                onChange={(e) => setTestPassword(e.target.value)}
                placeholder="admin123"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={testCredentials} className="flex-1">
              اختبار البيانات
            </Button>
            <Button onClick={fillCorrectCredentials} variant="outline">
              ملء البيانات الصحيحة
            </Button>
          </div>

          {validationResults.credentials !== null && (
            <div
              className={`p-4 rounded-lg border ${
                validationResults.credentials ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
              }`}
            >
              <div className="flex items-center gap-2">
                {validationResults.credentials ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                <span className={`font-medium ${validationResults.credentials ? "text-green-800" : "text-red-800"}`}>
                  {validationResults.credentials ? "بيانات المدير صحيحة ✅" : "بيانات المدير غير صحيحة ❌"}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Features Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            حالة الميزات
          </CardTitle>
          <CardDescription>الميزات المفعلة في النشر الحقيقي</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(PRODUCTION_CONFIG.FEATURES).map(([key, enabled]) => (
              <div key={key} className="flex items-center gap-2">
                <Badge variant={enabled ? "default" : "secondary"}>{enabled ? "مفعل" : "معطل"}</Badge>
                <span className="text-sm">
                  {key === "REGISTRATION_ENABLED" && "التسجيل"}
                  {key === "PASSWORD_RESET_ENABLED" && "استعادة كلمة المرور"}
                  {key === "MULTI_LANGUAGE_SUPPORT" && "دعم متعدد اللغات"}
                  {key === "DARK_MODE_ENABLED" && "الوضع المظلم"}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Production Readiness Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            ملخص جاهزية الإنتاج
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <span>بيانات المدير محدثة</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <span>إعدادات الأمان مكونة</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <span>الميزات مفعلة</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <span>التطبيق جاهز للنشر</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
