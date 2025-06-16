import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart, Target, Clock, CheckCircle, ArrowRight, Eye, Calendar, Megaphone } from "lucide-react"

export const metadata: Metadata = {
  title: "الإعلانات | نظام إدارة الوكالات",
  description: "نشر وإدارة الإعلانات في نظام إدارة الوكالات",
}

export default function AdsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">الإعلانات</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          نشر وإدارة الإعلانات واستهداف الفئات المناسبة وتتبع الأداء
        </p>
      </div>

      <Tabs defaultValue="publish" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="publish">نشر إعلان</TabsTrigger>
          <TabsTrigger value="featured">الإعلانات المميزة</TabsTrigger>
          <TabsTrigger value="analytics">تحليلات الإعلانات</TabsTrigger>
        </TabsList>

        <TabsContent value="publish">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>نشر إعلان جديد</CardTitle>
                  <CardDescription>أنشئ إعلانًا جديدًا واستهدف الفئات المناسبة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="ad-title" className="text-sm font-medium">
                      عنوان الإعلان
                    </label>
                    <input
                      id="ad-title"
                      placeholder="أدخل عنوان الإعلان"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ad-description" className="text-sm font-medium">
                      وصف الإعلان
                    </label>
                    <textarea
                      id="ad-description"
                      placeholder="أدخل وصف الإعلان"
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="ad-type" className="text-sm font-medium">
                        نوع الإعلان
                      </label>
                      <select
                        id="ad-type"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="banner">بانر</option>
                        <option value="popup">نافذة منبثقة</option>
                        <option value="video">فيديو</option>
                        <option value="text">نص</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="ad-position" className="text-sm font-medium">
                        موقع الإعلان
                      </label>
                      <select
                        id="ad-position"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="homepage">الصفحة الرئيسية</option>
                        <option value="platforms">صفحة المنصات</option>
                        <option value="services">صفحة الخدمات</option>
                        <option value="all">جميع الصفحات</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="ad-start-date" className="text-sm font-medium">
                        تاريخ البدء
                      </label>
                      <input
                        type="date"
                        id="ad-start-date"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="ad-end-date" className="text-sm font-medium">
                        تاريخ الانتهاء
                      </label>
                      <input
                        type="date"
                        id="ad-end-date"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ad-target" className="text-sm font-medium">
                      الفئة المستهدفة
                    </label>
                    <select
                      id="ad-target"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="all">جميع المستخدمين</option>
                      <option value="broadcasters">المذيعين فقط</option>
                      <option value="viewers">المشاهدين فقط</option>
                      <option value="new-users">المستخدمين الجدد</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ad-image" className="text-sm font-medium">
                      صورة الإعلان
                    </label>
                    <div className="border border-dashed border-input rounded-md p-6 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Image
                          src="/placeholder.svg?height=100&width=100&text=Upload"
                          alt="رفع صورة"
                          width={100}
                          height={100}
                          className="mx-auto"
                        />
                        <p className="text-sm text-muted-foreground">اسحب وأفلت الصورة هنا أو انقر للاختيار</p>
                        <Button variant="outline" size="sm">
                          اختيار صورة
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ad-budget" className="text-sm font-medium">
                      الميزانية
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <input
                        type="number"
                        id="ad-budget"
                        placeholder="0.00"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 pr-3 pl-8 text-sm"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">معاينة الإعلان</Button>
                  <Button>نشر الإعلان</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">باقات الإعلانات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">الباقة الأساسية</h3>
                      <Badge>$50</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">إعلان لمدة أسبوع في موقع واحد</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>ظهور في موقع واحد</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>تقرير أداء أسبوعي</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">الباقة المميزة</h3>
                      <Badge className="bg-primary">$100</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">إعلان لمدة أسبوعين في جميع المواقع</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>ظهور في جميع المواقع</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>تقرير أداء يومي</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>استهداف متقدم</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">الباقة الاحترافية</h3>
                      <Badge>$200</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">إعلان لمدة شهر كامل مع ميزات حصرية</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>ظهور مميز في جميع المواقع</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>تقرير أداء مفصل</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>استهداف متقدم</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>دعم فني مخصص</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    مقارنة الباقات
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">نصائح للإعلانات الناجحة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">استهدف الجمهور المناسب</h3>
                      <p className="text-xs text-muted-foreground">حدد الفئة المستهدفة بدقة لزيادة فعالية الإعلان</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Eye className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">استخدم صور جذابة</h3>
                      <p className="text-xs text-muted-foreground">الصور الجذابة تزيد من معدل النقر على الإعلان</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">اختر التوقيت المناسب</h3>
                      <p className="text-xs text-muted-foreground">نشر الإعلان في أوقات الذروة يزيد من فعاليته</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="featured">
          <div className="space-y-8">
            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">الإعلانات المميزة</h2>
              <p className="text-muted-foreground mb-6">
                الإعلانات المميزة تظهر في الصفحة الرئيسية لمدة 24 ساعة، مما يضمن وصولها إلى أكبر عدد ممكن من المستخدمين.
                احجز مكانك الآن!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">وصول أكبر</h3>
                    <p className="text-sm text-muted-foreground">يصل إلى 10,000+ مستخدم يوميًا</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Megaphone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">ظهور مميز</h3>
                    <p className="text-sm text-muted-foreground">في أعلى الصفحة الرئيسية</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">تقارير مفصلة</h3>
                    <p className="text-sm text-muted-foreground">تتبع أداء إعلانك بدقة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>الباقة اليومية</CardTitle>
                    <Badge>$50</Badge>
                  </div>
                  <CardDescription>إعلان مميز لمدة 24 ساعة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Featured Ad"
                      alt="إعلان مميز"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ظهور في الصفحة الرئيسية لمدة 24 ساعة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تقرير أداء مفصل</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>دعم فني</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">احجز الآن</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>الباقة الأسبوعية</CardTitle>
                    <Badge>$300</Badge>
                  </div>
                  <CardDescription>إعلان مميز لمدة 7 أيام</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Weekly Featured Ad"
                      alt="إعلان مميز أسبوعي"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ظهور في الصفحة الرئيسية لمدة 7 أيام</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تقارير أداء يومية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>دعم فني مخصص</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>خصم 15% على الإعلانات العادية</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">احجز الآن</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">الإعلانات المميزة الحالية</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-background rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=Featured Ad ${i}`}
                        alt={`إعلان مميز ${i}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary">مميز</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">عنوان الإعلان المميز {i}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        وصف مختصر للإعلان المميز رقم {i}. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>ينتهي في: {i} أيام</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{i * 1000}+ مشاهدة</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">إجمالي المشاهدات</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,567</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500 inline-flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                      12%
                    </span>{" "}
                    منذ الشهر الماضي
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">معدل النقر</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500 inline-flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                      0.5%
                    </span>{" "}
                    منذ الشهر الماضي
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">الإعلانات النشطة</CardTitle>
                  <Megaphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500 inline-flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1 rotate-45" />3
                    </span>{" "}
                    منذ الشهر الماضي
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">متوسط وقت المشاهدة</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1:45</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-500 inline-flex items-center">
                      <ArrowRight className="h-3 w-3 mr-1 rotate-45" />
                      0:15
                    </span>{" "}
                    منذ الشهر الماضي
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>أداء الإعلانات</CardTitle>
                  <CardDescription>تحليل أداء إعلاناتك خلال الشهر الماضي</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Performance Chart"
                      alt="مخطط الأداء"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>توزيع المشاهدات</CardTitle>
                  <CardDescription>توزيع المشاهدات حسب الفئة المستهدفة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600&text=Views Distribution"
                      alt="توزيع المشاهدات"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-md border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="py-3 px-4 text-right">الإعلان</th>
                    <th className="py-3 px-4 text-right">المشاهدات</th>
                    <th className="py-3 px-4 text-right">النقرات</th>
                    <th className="py-3 px-4 text-right">معدل النقر</th>
                    <th className="py-3 px-4 text-right">متوسط وقت المشاهدة</th>
                    <th className="py-3 px-4 text-right">الحالة</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    {
                      name: "إعلان الصفحة الرئيسية",
                      views: "5,432",
                      clicks: "234",
                      ctr: "4.3%",
                      avgTime: "2:10",
                      status: "نشط",
                    },
                    {
                      name: "إعلان صفحة المنصات",
                      views: "3,210",
                      clicks: "98",
                      ctr: "3.1%",
                      avgTime: "1:45",
                      status: "نشط",
                    },
                    {
                      name: "إعلان صفحة الخدمات",
                      views: "2,876",
                      clicks: "76",
                      ctr: "2.6%",
                      avgTime: "1:20",
                      status: "نشط",
                    },
                    {
                      name: "إعلان العروض الخاصة",
                      views: "4,567",
                      clicks: "187",
                      ctr: "4.1%",
                      avgTime: "2:30",
                      status: "نشط",
                    },
                    {
                      name: "إعلان المسابقات",
                      views: "3,654",
                      clicks: "143",
                      ctr: "3.9%",
                      avgTime: "1:55",
                      status: "منتهي",
                    },
                  ].map((ad, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4">{ad.name}</td>
                      <td className="py-3 px-4">{ad.views}</td>
                      <td className="py-3 px-4">{ad.clicks}</td>
                      <td className="py-3 px-4">{ad.ctr}</td>
                      <td className="py-3 px-4">{ad.avgTime}</td>
                      <td className="py-3 px-4">
                        <Badge variant={ad.status === "نشط" ? "default" : "outline"}>{ad.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">توصيات لتحسين أداء الإعلانات</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium mb-2">استهداف أفضل</h3>
                  <p className="text-sm text-muted-foreground">
                    تحليل البيانات يشير إلى أن استهداف المذيعين الجدد قد يحسن معدل النقر بنسبة 15%.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium mb-2">تحسين المحتوى</h3>
                  <p className="text-sm text-muted-foreground">
                    استخدام صور أكثر جاذبية وعناوين أقصر قد يزيد من معدل التفاعل مع الإعلانات.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium mb-2">توقيت أفضل</h3>
                  <p className="text-sm text-muted-foreground">
                    نشر الإعلانات بين الساعة 7-10 مساءً يحقق أعلى معدلات المشاهدة والتفاعل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">ابدأ بنشر إعلانك الآن</h2>
            <p className="text-primary-foreground/80">
              استفد من منصتنا للوصول إلى آلاف المذيعين والمستخدمين المهتمين بخدماتك. نوفر لك أدوات متقدمة لتحليل أداء
              إعلاناتك وتحسينها.
            </p>
            <div className="flex gap-2">
              <Button variant="secondary">نشر إعلان جديد</Button>
              <Button
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                تواصل مع فريق المبيعات
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-48 w-48">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Advertise Now"
                alt="أعلن الآن"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
