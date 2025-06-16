"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChartIcon as Chart, Clock, DollarSign, Award, Calendar, Star, Trophy, ArrowUpRight } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function BroadcasterDashboardContent() {
  const { user } = useAuth()

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">لوحة تحكم المذيع</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          مرحباً {user?.name}، إدارة حسابك وتتبع أدائك ومعاملاتك المالية
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الرصيد الحالي</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,250</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                12%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ساعات البث</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                8.2%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">عدد الشارات</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-500 inline-flex items-center">
                <Star className="h-3 w-3 mr-1" />
                شارة جديدة متاحة
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ترتيب المسابقة</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />5 مراكز
              </span>{" "}
              منذ الأسبوع الماضي
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="performance">تحليل الأداء</TabsTrigger>
          <TabsTrigger value="earnings">الأرباح والسحب</TabsTrigger>
          <TabsTrigger value="schedule">جدول البث</TabsTrigger>
          <TabsTrigger value="badges">الشارات والمكافآت</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">تحليل الأداء</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  تصدير التقرير
                </Button>
                <Button size="sm">
                  <Chart className="h-4 w-4 mr-2" />
                  تحليل متقدم
                </Button>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">إحصائيات البث</h3>
              <div className="aspect-video relative bg-card rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=800&text=Performance Chart"
                  alt="مخطط الأداء"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>المشاهدات اليومية</CardTitle>
                  <CardDescription>متوسط مشاهدات البث اليومية</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/2] relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Views Chart"
                      alt="مخطط المشاهدات"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-muted-foreground">
                    متوسط المشاهدات: <span className="font-bold">1,250 مشاهد يومياً</span>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الهدايا والتفاعل</CardTitle>
                  <CardDescription>تحليل الهدايا والتفاعل خلال الشهر</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/2] relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Gifts Chart"
                      alt="مخطط الهدايا"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-muted-foreground">
                    أكثر الهدايا تلقياً: <span className="font-bold">الوردة الذهبية (45 مرة)</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="earnings">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">الأرباح والسحب</h2>
              <Button size="sm">طلب سحب جديد</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>الأرباح الشهرية</CardTitle>
                  <CardDescription>تحليل الأرباح خلال الأشهر الثلاثة الماضية</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/2] relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Earnings Chart"
                      alt="مخطط الأرباح"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-muted-foreground">
                    متوسط الأرباح الشهرية: <span className="font-bold">$1,120</span>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>طلبات السحب</CardTitle>
                  <CardDescription>سجل طلبات السحب الحالية والسابقة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="py-2 px-3 text-right">رقم الطلب</th>
                          <th className="py-2 px-3 text-right">المبلغ</th>
                          <th className="py-2 px-3 text-right">التاريخ</th>
                          <th className="py-2 px-3 text-right">الحالة</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {[
                          {
                            id: "WD-1025",
                            amount: "$300",
                            date: "15/03/2025",
                            status: "مكتمل",
                          },
                          {
                            id: "WD-1024",
                            amount: "$250",
                            date: "01/03/2025",
                            status: "مكتمل",
                          },
                          {
                            id: "WD-1023",
                            amount: "$400",
                            date: "15/02/2025",
                            status: "مكتمل",
                          },
                        ].map((withdrawal) => (
                          <tr key={withdrawal.id}>
                            <td className="py-2 px-3">{withdrawal.id}</td>
                            <td className="py-2 px-3">{withdrawal.amount}</td>
                            <td className="py-2 px-3">{withdrawal.date}</td>
                            <td className="py-2 px-3">
                              <Badge>{withdrawal.status}</Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-muted-foreground">
                    الحد الأدنى للسحب: <span className="font-bold">$100</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schedule">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">جدول البث</h2>
              <Button size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                إضافة موعد بث
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>جدول البث الأسبوعي</CardTitle>
                <CardDescription>مواعيد البث المجدولة للأسبوع الحالي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"].map((day) => (
                    <div key={day} className="p-1">
                      <div className="bg-muted p-2 rounded text-center font-medium">{day}</div>
                      {day === "الاثنين" || day === "الأربعاء" || day === "الجمعة" ? (
                        <div className="bg-primary/10 p-2 mt-1 rounded text-sm text-center">
                          <div className="font-medium">7:00 - 10:00 م</div>
                          <div className="text-xs text-muted-foreground">بث مجدول</div>
                        </div>
                      ) : day === "السبت" ? (
                        <div className="bg-primary/20 p-2 mt-1 rounded text-sm text-center">
                          <div className="font-medium">6:00 - 11:00 م</div>
                          <div className="text-xs text-muted-foreground">بث خاص</div>
                        </div>
                      ) : (
                        <div className="p-2 mt-1 rounded text-sm text-center text-muted-foreground">--</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground">
                  مجموع ساعات البث الأسبوعية: <span className="font-bold">12 ساعة</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="badges">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">الشارات والمكافآت</h2>
              <Link href="/badges">
                <Button variant="outline" size="sm">
                  عرض جميع الشارات
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>شارة نجم صاعد</CardTitle>
                    <Badge>مكتسبة</Badge>
                  </div>
                  <CardDescription>تمنح لمن أكمل 50 ساعة بث بنجاح</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/placeholder.svg?height=128&width=128&text=Rising Star"
                      alt="شارة نجم صاعد"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-primary p-1"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    تاريخ الحصول: <span className="font-medium">15/02/2025</span>
                  </div>
                  <Badge variant="outline">+5% مكافأة</Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>شارة وردة الذهب</CardTitle>
                    <Badge>مكتسبة</Badge>
                  </div>
                  <CardDescription>تمنح لمن حصل على 100 وردة ذهبية</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/placeholder.svg?height=128&width=128&text=Gold Rose"
                      alt="شارة وردة الذهب"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-amber-500 p-1"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    تاريخ الحصول: <span className="font-medium">20/02/2025</span>
                  </div>
                  <Badge variant="outline">+10% مكافأة</Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>شارة النخبة</CardTitle>
                    <Badge variant="outline">قيد التقدم</Badge>
                  </div>
                  <CardDescription>تمنح لمن حقق 1000$ في شهر واحد</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/placeholder.svg?height=128&width=128&text=Elite"
                      alt="شارة النخبة"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-muted p-1 opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 px-2 py-1 rounded">
                        <div className="text-sm font-medium">78%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    المتبقي: <span className="font-medium">$220</span>
                  </div>
                  <Badge variant="outline">+15% مكافأة</Badge>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
