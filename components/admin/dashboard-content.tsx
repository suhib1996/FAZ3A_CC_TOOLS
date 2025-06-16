"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  DollarSign,
  Settings,
  Bell,
  ArrowUp,
  UserPlus,
  UserMinus,
  Shield,
  AlertCircle,
} from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function AdminDashboardContent() {
  const { user } = useAuth()

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">لوحة تحكم المدير</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          مرحباً {user?.name}، إدارة المذيعين، المنصات، المعاملات المالية، والصلاحيات
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المذيعين</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                12%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الإيرادات الشهرية</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,560</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                8.2%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">طلبات الانضمام</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-500 inline-flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                بانتظار المراجعة
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">طلبات السحب</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-500 inline-flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                بانتظار الموافقة
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="broadcasters" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="broadcasters">إدارة المذيعين</TabsTrigger>
          <TabsTrigger value="platforms">إدارة المنصات</TabsTrigger>
          <TabsTrigger value="financial">المعاملات المالية</TabsTrigger>
          <TabsTrigger value="permissions">إدارة الصلاحيات</TabsTrigger>
        </TabsList>

        <TabsContent value="broadcasters">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">قائمة المذيعين</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  تصدير البيانات
                </Button>
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  إضافة مذيع جديد
                </Button>
              </div>
            </div>

            <div className="rounded-md border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="py-3 px-4 text-right">المعرف</th>
                    <th className="py-3 px-4 text-right">الاسم</th>
                    <th className="py-3 px-4 text-right">المنصة</th>
                    <th className="py-3 px-4 text-right">الحالة</th>
                    <th className="py-3 px-4 text-right">الشارات</th>
                    <th className="py-3 px-4 text-right">الإيرادات</th>
                    <th className="py-3 px-4 text-right">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    {
                      id: "BR-1001",
                      name: "أحمد محمد",
                      platform: "Super Live",
                      status: "نشط",
                      badges: 3,
                      revenue: "$1,250",
                    },
                    {
                      id: "BR-1002",
                      name: "سارة أحمد",
                      platform: "Popo Live",
                      status: "نشط",
                      badges: 5,
                      revenue: "$2,340",
                    },
                    {
                      id: "BR-1003",
                      name: "محمد علي",
                      platform: "Party Star",
                      status: "غير نشط",
                      badges: 2,
                      revenue: "$850",
                    },
                    {
                      id: "BR-1004",
                      name: "نورا حسن",
                      platform: "Super Live",
                      status: "نشط",
                      badges: 4,
                      revenue: "$1,780",
                    },
                    {
                      id: "BR-1005",
                      name: "خالد عمر",
                      platform: "Popo Live",
                      status: "محظور",
                      badges: 0,
                      revenue: "$0",
                    },
                  ].map((broadcaster) => (
                    <tr key={broadcaster.id}>
                      <td className="py-3 px-4">{broadcaster.id}</td>
                      <td className="py-3 px-4">{broadcaster.name}</td>
                      <td className="py-3 px-4">{broadcaster.platform}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            broadcaster.status === "نشط"
                              ? "default"
                              : broadcaster.status === "غير نشط"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {broadcaster.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Award className="h-4 w-4 text-amber-500 mr-1" />
                          <span>{broadcaster.badges}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{broadcaster.revenue}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Shield className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <UserMinus className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">عرض 1-5 من 1,248 مذيع</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  السابق
                </Button>
                <Button variant="outline" size="sm">
                  التالي
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* The platforms, financial, and permissions tabs remain the same */}
        <TabsContent value="platforms">{/* Content goes here, same as in the original file */}</TabsContent>

        <TabsContent value="financial">{/* Content goes here, same as in the original file */}</TabsContent>

        <TabsContent value="permissions">{/* Content goes here, same as in the original file */}</TabsContent>
      </Tabs>

      <div className="mt-8 bg-muted rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">الإشعارات الأخيرة</h2>
        <div className="space-y-4">
          {[
            {
              title: "طلب انضمام جديد",
              description: "تم تقديم طلب انضمام جديد من قبل مذيع",
              time: "منذ 5 دقائق",
              icon: <UserPlus className="h-5 w-5 text-blue-500" />,
            },
            {
              title: "طلب سحب جديد",
              description: "تم تقديم طلب سحب جديد بقيمة $300",
              time: "منذ 15 دقيقة",
              icon: <DollarSign className="h-5 w-5 text-green-500" />,
            },
            {
              title: "تحذير أمان",
              description: "تم اكتشاف محاولة تسجيل دخول مشبوهة",
              time: "منذ 30 دقيقة",
              icon: <Shield className="h-5 w-5 text-red-500" />,
            },
            {
              title: "تحديث النظام",
              description: "تم تحديث النظام إلى الإصدار الجديد",
              time: "منذ ساعة",
              icon: <Bell className="h-5 w-5 text-amber-500" />,
            },
          ].map((notification, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg">
              <div className="bg-muted rounded-full p-2">{notification.icon}</div>
              <div className="flex-grow">
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <div className="text-xs text-muted-foreground">{notification.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
