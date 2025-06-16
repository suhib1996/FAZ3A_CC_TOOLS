"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Globe, Lock, Save, Upload, Trash2 } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

export default function SettingsClient() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Profile settings state
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    bio: "",
    avatar: user?.avatar || "",
  })

  // Notification settings state
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
  })

  // Security settings state
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: "30",
    passwordExpiry: "90",
  })

  // System settings state
  const [systemSettings, setSystemSettings] = useState({
    language: "ar",
    timezone: "Asia/Riyadh",
    dateFormat: "dd/mm/yyyy",
    currency: "SAR",
    theme: "system",
  })

  const handleSaveProfile = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "تم حفظ الملف الشخصي",
        description: "تم تحديث بياناتك الشخصية بنجاح",
      })
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء حفظ البيانات",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveNotifications = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      toast({
        title: "تم حفظ إعدادات الإشعارات",
        description: "تم تحديث تفضيلات الإشعارات بنجاح",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSecurity = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      toast({
        title: "تم حفظ إعدادات الأمان",
        description: "تم تحديث إعدادات الأمان بنجاح",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveSystem = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      toast({
        title: "تم حفظ إعدادات النظام",
        description: "تم تحديث إعدادات النظام بنجاح",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ProtectedRoute allowedRoles={["admin", "agent", "broadcaster"]}>
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">الإعدادات</h1>
            <p className="text-muted-foreground">إدارة إعدادات حسابك والنظام</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                الملف الشخصي
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                الإشعارات
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                الأمان
              </TabsTrigger>
              <TabsTrigger value="system" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                النظام
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                  <CardDescription>تحديث معلوماتك الشخصية وصورة الملف الشخصي</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={profileData.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-lg">{profileData.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        تحديث الصورة
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        حذف الصورة
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>الدور</Label>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{user?.role}</Badge>
                        <span className="text-sm text-muted-foreground">لا يمكن تغيير الدور</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">نبذة شخصية</Label>
                    <Textarea
                      id="bio"
                      placeholder="اكتب نبذة مختصرة عنك..."
                      value={profileData.bio}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, bio: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  <Button onClick={handleSaveProfile} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "جاري الحفظ..." : "حفظ التغييرات"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات الإشعارات</CardTitle>
                  <CardDescription>تخصيص كيفية تلقي الإشعارات والتنبيهات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>إشعارات البريد الإلكتروني</Label>
                        <p className="text-sm text-muted-foreground">تلقي الإشعارات عبر البريد الإلكتروني</p>
                      </div>
                      <Switch
                        checked={notifications.emailNotifications}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({ ...prev, emailNotifications: checked }))
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>الإشعارات الفورية</Label>
                        <p className="text-sm text-muted-foreground">تلقي الإشعارات الفورية في المتصفح</p>
                      </div>
                      <Switch
                        checked={notifications.pushNotifications}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({ ...prev, pushNotifications: checked }))
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>رسائل SMS</Label>
                        <p className="text-sm text-muted-foreground">تلقي الإشعارات عبر الرسائل النصية</p>
                      </div>
                      <Switch
                        checked={notifications.smsNotifications}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({ ...prev, smsNotifications: checked }))
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>رسائل تسويقية</Label>
                        <p className="text-sm text-muted-foreground">تلقي العروض والأخبار التسويقية</p>
                      </div>
                      <Switch
                        checked={notifications.marketingEmails}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({ ...prev, marketingEmails: checked }))
                        }
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>تنبيهات الأمان</Label>
                        <p className="text-sm text-muted-foreground">تنبيهات مهمة حول أمان الحساب</p>
                      </div>
                      <Switch
                        checked={notifications.securityAlerts}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({ ...prev, securityAlerts: checked }))
                        }
                      />
                    </div>
                  </div>

                  <Button onClick={handleSaveNotifications} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "جاري الحفظ..." : "حفظ الإعدادات"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات الأمان</CardTitle>
                  <CardDescription>إدارة أمان حسابك وكلمات المرور</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>المصادقة الثنائية</Label>
                        <p className="text-sm text-muted-foreground">إضافة طبقة حماية إضافية لحسابك</p>
                      </div>
                      <Switch
                        checked={security.twoFactorAuth}
                        onCheckedChange={(checked) => setSecurity((prev) => ({ ...prev, twoFactorAuth: checked }))}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>تنبيهات تسجيل الدخول</Label>
                        <p className="text-sm text-muted-foreground">إشعار عند تسجيل الدخول من جهاز جديد</p>
                      </div>
                      <Switch
                        checked={security.loginAlerts}
                        onCheckedChange={(checked) => setSecurity((prev) => ({ ...prev, loginAlerts: checked }))}
                      />
                    </div>

                    <Separator />

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>انتهاء الجلسة (بالدقائق)</Label>
                        <Select
                          value={security.sessionTimeout}
                          onValueChange={(value) => setSecurity((prev) => ({ ...prev, sessionTimeout: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 دقيقة</SelectItem>
                            <SelectItem value="30">30 دقيقة</SelectItem>
                            <SelectItem value="60">ساعة واحدة</SelectItem>
                            <SelectItem value="120">ساعتان</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>انتهاء كلمة المرور (بالأيام)</Label>
                        <Select
                          value={security.passwordExpiry}
                          onValueChange={(value) => setSecurity((prev) => ({ ...prev, passwordExpiry: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 يوم</SelectItem>
                            <SelectItem value="60">60 يوم</SelectItem>
                            <SelectItem value="90">90 يوم</SelectItem>
                            <SelectItem value="never">لا تنتهي</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="font-medium">تغيير كلمة المرور</h4>
                      <div className="grid gap-4">
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
                        <Button variant="outline" className="w-fit">
                          <Lock className="h-4 w-4 mr-2" />
                          تحديث كلمة المرور
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleSaveSecurity} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "جاري الحفظ..." : "حفظ إعدادات الأمان"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Settings */}
            <TabsContent value="system" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات النظام</CardTitle>
                  <CardDescription>تخصيص إعدادات النظام والواجهة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>اللغة</Label>
                      <Select
                        value={systemSettings.language}
                        onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, language: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ar">العربية</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>المنطقة الزمنية</Label>
                      <Select
                        value={systemSettings.timezone}
                        onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, timezone: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Asia/Riyadh">الرياض</SelectItem>
                          <SelectItem value="Asia/Dubai">دبي</SelectItem>
                          <SelectItem value="Asia/Kuwait">الكويت</SelectItem>
                          <SelectItem value="UTC">UTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>تنسيق التاريخ</Label>
                      <Select
                        value={systemSettings.dateFormat}
                        onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, dateFormat: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>العملة</Label>
                      <Select
                        value={systemSettings.currency}
                        onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, currency: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SAR">ريال سعودي</SelectItem>
                          <SelectItem value="AED">درهم إماراتي</SelectItem>
                          <SelectItem value="USD">دولار أمريكي</SelectItem>
                          <SelectItem value="EUR">يورو</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>المظهر</Label>
                      <Select
                        value={systemSettings.theme}
                        onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, theme: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">فاتح</SelectItem>
                          <SelectItem value="dark">داكن</SelectItem>
                          <SelectItem value="system">تلقائي</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleSaveSystem} disabled={isLoading}>
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? "جاري الحفظ..." : "حفظ إعدادات النظام"}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}
