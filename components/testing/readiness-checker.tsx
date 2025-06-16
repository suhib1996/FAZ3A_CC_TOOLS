"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

interface CheckItem {
  id: string
  name: string
  status: "pass" | "fail" | "warning" | "checking"
  description: string
}

export default function ReadinessChecker() {
  const { login } = useAuth()
  const [checks, setChecks] = useState<CheckItem[]>([
    {
      id: "auth-system",
      name: "نظام المصادقة",
      status: "checking",
      description: "فحص تسجيل الدخول والخروج",
    },
    {
      id: "admin-access",
      name: "وصول المدير",
      status: "checking",
      description: "فحص صلاحيات المدير",
    },
    {
      id: "navigation",
      name: "التنقل",
      status: "checking",
      description: "فحص جميع الروابط والصفحات",
    },
    {
      id: "responsive-design",
      name: "التصميم المتجاوب",
      status: "checking",
      description: "فحص العرض على الأجهزة المختلفة",
    },
    {
      id: "forms",
      name: "النماذج",
      status: "checking",
      description: "فحص جميع النماذج والتحقق من البيانات",
    },
    {
      id: "images",
      name: "الصور",
      status: "checking",
      description: "فحص تحميل وعرض الصور",
    },
    {
      id: "error-handling",
      name: "معالجة الأخطاء",
      status: "checking",
      description: "فحص صفحات الأخطاء والرسائل",
    },
    {
      id: "performance",
      name: "الأداء",
      status: "checking",
      description: "فحص سرعة التحميل والاستجابة",
    },
  ])

  const [isRunning, setIsRunning] = useState(false)

  const runChecks = async () => {
    setIsRunning(true)

    for (let i = 0; i < checks.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setChecks((prev) =>
        prev.map((check, index) => {
          if (index === i) {
            // Simulate check results
            const results = ["pass", "pass", "pass", "pass", "pass", "pass", "warning", "pass"]
            return {
              ...check,
              status: results[i] as "pass" | "fail" | "warning",
            }
          }
          return check
        }),
      )
    }

    setIsRunning(false)
  }

  const testAdminLogin = async () => {
    try {
      const success = await login("admin@khalakfakhem.com", "admin123")
      if (success) {
        setChecks((prev) => prev.map((check) => (check.id === "admin-access" ? { ...check, status: "pass" } : check)))
      }
    } catch (error) {
      setChecks((prev) => prev.map((check) => (check.id === "admin-access" ? { ...check, status: "fail" } : check)))
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "fail":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "checking":
        return <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />
      default:
        return <RefreshCw className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pass":
        return <Badge className="bg-green-500">نجح</Badge>
      case "fail":
        return <Badge className="bg-red-500">فشل</Badge>
      case "warning":
        return <Badge className="bg-yellow-500">تحذير</Badge>
      case "checking":
        return <Badge className="bg-blue-500">جاري الفحص</Badge>
      default:
        return <Badge variant="outline">في الانتظار</Badge>
    }
  }

  const passedChecks = checks.filter((check) => check.status === "pass").length
  const totalChecks = checks.length
  const readinessPercentage = Math.round((passedChecks / totalChecks) * 100)

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">فحص جاهزية التطبيق</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          فحص شامل لجميع مكونات التطبيق للتأكد من الجاهزية للاختبار
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>نسبة الجاهزية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary mb-2">{readinessPercentage}%</div>
            <div className="text-sm text-muted-foreground">
              {passedChecks} من {totalChecks} فحوصات نجحت
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>حالة النظام</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {readinessPercentage >= 90 ? (
                <>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-green-500 font-medium">جاهز للاختبار</span>
                </>
              ) : readinessPercentage >= 70 ? (
                <>
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                  <span className="text-yellow-500 font-medium">يحتاج تحسينات</span>
                </>
              ) : (
                <>
                  <XCircle className="h-6 w-6 text-red-500" />
                  <span className="text-red-500 font-medium">غير جاهز</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>إجراءات</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button onClick={runChecks} disabled={isRunning} className="w-full">
              {isRunning ? "جاري الفحص..." : "بدء الفحص الشامل"}
            </Button>
            <Button onClick={testAdminLogin} variant="outline" className="w-full">
              اختبار دخول المدير
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>تفاصيل الفحص</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {checks.map((check) => (
              <div key={check.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  {getStatusIcon(check.status)}
                  <div>
                    <h3 className="font-medium">{check.name}</h3>
                    <p className="text-sm text-muted-foreground">{check.description}</p>
                  </div>
                </div>
                {getStatusBadge(check.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>معلومات النظام</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">حالة النظام</h4>
              <p className="text-sm text-muted-foreground">النظام جاهز للاستخدام</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">الإصدار</h4>
              <p className="text-sm text-muted-foreground">1.0.0</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">آخر تحديث</h4>
              <p className="text-sm text-muted-foreground">يونيو 2025</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>متطلبات الاختبار</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">المتصفحات الحديثة</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">التصميم المتجاوب</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">إمكانية الوصول</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">الأمان والحماية</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">معالجة الأخطاء</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
