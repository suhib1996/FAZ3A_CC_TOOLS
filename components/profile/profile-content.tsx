"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/components/ui/use-toast"
import { Award } from "lucide-react"
import { UserAvatar } from "@/components/ui/user-avatar"

export default function ProfileContent() {
  const { user } = useAuth()
  const [isUpdating, setIsUpdating] = useState(false)

  if (!user) return null

  // Get user initials for avatar fallback
  const getInitials = () => {
    if (!user.name) return "U"
    const nameParts = user.name.split(" ")
    if (nameParts.length === 1) return nameParts[0].charAt(0)
    return `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`
  }

  // Get user role in Arabic
  const getRoleInArabic = () => {
    switch (user.role) {
      case "admin":
        return "مدير النظام"
      case "agent":
        return "وكيل"
      case "broadcaster":
        return "مذيع"
      default:
        return "مستخدم"
    }
  }

  const handleUpdateProfile = () => {
    setIsUpdating(true)

    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false)
      toast({
        title: "تم تحديث الملف الشخصي",
        description: "تم تحديث بياناتك بنجاح",
      })
    }, 1000)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">الملف الشخصي</h1>
        <p className="text-muted-foreground text-center max-w-2xl">إدارة معلوماتك الشخصية وإعدادات الحساب</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>الملف الشخصي</CardTitle>
              <CardDescription>معلوماتك الشخصية</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <UserAvatar src={user.avatar} name={user.name} size="xl" />
              <div className="text-center">
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <Badge className="mt-2">{getRoleInArabic()}</Badge>
              </div>
              {user.role === "broadcaster" && (
                <div className="w-full pt-4 border-t border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">المنصة:</span>
                    <span>{user.platform}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">الشارات:</span>
                    <span className="flex items-center">
                      <Award className="h-4 w-4 text-amber-500 ml-1" />
                      {user.badges}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">تاريخ الانضمام:</span>
                    <span>{user.createdAt.toLocaleDateString("ar-SA")}</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">تغيير الصورة</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="personal">المعلومات الشخصية</TabsTrigger>
              <TabsTrigger value="security">الأمان</TabsTrigger>
              <TabsTrigger value="preferences">التفضيلات</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                  <CardDescription>تحديث المعلومات الشخصية الخاصة بك</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">الاسم الأول</Label>
                      <Input id="firstName" defaultValue={user.name.split(" ")[0]} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">الاسم الأخير</Label>
                      <Input id="lastName" defaultValue={user.name.split(" ").slice(1).join(" ")} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" type="tel" placeholder="+962 7XXXXXXXX" />
                  </div>

                  {user.role === "broadcaster" && (
                    <div className="space-y-2">
                      <Label htmlFor="platform">المنصة</Label>
                      <select
                        id="platform"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        defaultValue={user.platform}
                      >
                        <option value="Super Live">Super Live</option>
                        <option value="Party Star">Party Star</option>
                        <option value="Popo Live">Popo Live</option>
                      </select>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button onClick={handleUpdateProfile} disabled={isUpdating}>
                    {isUpdating ? "جاري التحديث..." : "حفظ التغييرات"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>الأمان</CardTitle>
                  <CardDescription>إدارة إعدادات الأمان الخاصة بك</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                    <Input id="new-password" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>تغيير كلمة المرور</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>التفضيلات</CardTitle>
                  <CardDescription>إدارة تفضيلات الحساب</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notifications">إشعارات البريد الإلكتروني</Label>
                      <p className="text-sm text-muted-foreground">تلقي إشعارات حول الأحداث المهمة</p>
                    </div>
                    <input id="notifications" type="checkbox" className="h-5 w-5" defaultChecked />
                  </div>

                  <div className="border-t pt-4"></div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing">رسائل تسويقية</Label>
                      <p className="text-sm text-muted-foreground">تلقي معلومات حول العروض والتحديثات</p>
                    </div>
                    <input id="marketing" type="checkbox" className="h-5 w-5" />
                  </div>

                  <div className="border-t pt-4"></div>

                  <div className="space-y-2">
                    <Label htmlFor="language">اللغة</Label>
                    <select
                      id="language"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      defaultValue="ar"
                    >
                      <option value="ar">العربية</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>حفظ التفضيلات</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
