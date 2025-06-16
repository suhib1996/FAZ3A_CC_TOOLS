"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        category: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">اتصل بنا</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          نحن هنا لمساعدتك. تواصل معنا للحصول على الدعم أو الاستفسارات أو أي مساعدة تحتاجها
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                معلومات الاتصال
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">البريد الإلكتروني</p>
                  <p className="text-sm text-muted-foreground">halman555@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">الهاتف</p>
                  <p className="text-sm text-muted-foreground">00962781477774</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">الموقع</p>
                  <p className="text-sm text-muted-foreground">الأردن، عمان</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">ساعات العمل</p>
                  <p className="text-sm text-muted-foreground">24/7 - على مدار الساعة</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الأسئلة الشائعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">كيف يمكنني الانضمام كمذيع؟</h4>
                <p className="text-sm text-muted-foreground">
                  يمكنك التسجيل من خلال صفحة التسجيل واختيار "مذيع" كنوع الحساب.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">ما هي مواعيد دفع الرواتب؟</h4>
                <p className="text-sm text-muted-foreground">
                  تختلف مواعيد الدفع حسب المنصة، عادة ما تكون شهرية أو أسبوعية.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">كيف يمكنني شحن الألماس؟</h4>
                <p className="text-sm text-muted-foreground">يمكنك شحن الألماس من خلال صفحة العروض والشحن في الموقع.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>أرسل لنا رسالة</CardTitle>
              <CardDescription>املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">الاسم الكامل *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+962xxxxxxxxx"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">فئة الاستفسار</Label>
                    <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر فئة الاستفسار" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">استفسار عام</SelectItem>
                        <SelectItem value="technical">دعم فني</SelectItem>
                        <SelectItem value="financial">استفسار مالي</SelectItem>
                        <SelectItem value="platform">استفسار عن المنصات</SelectItem>
                        <SelectItem value="partnership">شراكة</SelectItem>
                        <SelectItem value="complaint">شكوى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">موضوع الرسالة</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="موضوع رسالتك"
                  />
                </div>

                <div>
                  <Label htmlFor="message">الرسالة *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Support Options */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">طرق أخرى للحصول على المساعدة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>المساعد الذكي</CardTitle>
              <CardDescription>احصل على إجابات فورية لأسئلتك</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full">تحدث مع المساعد الآن</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>الدعم الهاتفي</CardTitle>
              <CardDescription>تحدث مع فريق الدعم مباشرة</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full">
                اتصل بنا الآن
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>البريد الإلكتروني</CardTitle>
              <CardDescription>أرسل لنا بريد إلكتروني مفصل</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full">
                إرسال بريد إلكتروني
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
