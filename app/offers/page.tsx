import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Gift, Calendar, Clock, CheckCircle, Award, Trophy, Tag, Percent } from "lucide-react"

export const metadata: Metadata = {
  title: "العروض والشحن | نظام إدارة الوكالات",
  description: "العروض والخصومات وخدمات شحن الألماس في نظام إدارة الوكالات",
}

export default function OffersPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">العروض والشحن</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          استفد من عروضنا الحصرية وخدمات شحن الألماس لجميع منصات البث المباشر
        </p>
      </div>

      <Tabs defaultValue="offers" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="offers">العروض الحالية</TabsTrigger>
          <TabsTrigger value="diamonds">شحن الألماس</TabsTrigger>
          <TabsTrigger value="subscriptions">باقات العضوية</TabsTrigger>
        </TabsList>

        <TabsContent value="offers">
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/20 to-primary p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">عرض محدود</Badge>
                  <h2 className="text-3xl font-bold text-white">خصم 20% على جميع خدمات الشحن</h2>
                  <p className="text-white/80">
                    استفد من خصم 20% على جميع خدمات شحن الألماس لجميع المنصات. العرض ساري حتى نهاية الشهر الحالي.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <Button className="bg-white text-primary hover:bg-white/90">احصل على الخصم الآن</Button>
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="h-5 w-5" />
                      <span>ينتهي في: 5 أيام</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-64 w-64">
                    <Image
                      src="/placeholder.svg?height=250&width=250&text=20% OFF"
                      alt="خصم 20%"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <Gift className="h-5 w-5 text-primary" />
                      عرض الترحيب
                    </CardTitle>
                    <Badge>جديد</Badge>
                  </div>
                  <CardDescription>للمذيعين الجدد</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=300&text=Welcome Offer"
                      alt="عرض الترحيب"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">مميزات العرض:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>خصم 30% على أول عملية شحن</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تدريب مجاني لمدة أسبوع</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارة "مذيع جديد" المميزة</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">ساري حتى: 30/04/2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">كود الخصم: NEW30</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">احصل على العرض</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <Percent className="h-5 w-5 text-primary" />
                      خصم موسمي
                    </CardTitle>
                    <Badge variant="outline">محدود</Badge>
                  </div>
                  <CardDescription>خصومات موسمية على العمولات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=300&text=Seasonal Discount"
                      alt="خصم موسمي"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">مميزات العرض:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>خصم 15% على جميع العمولات</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مكافآت إضافية على الإيرادات</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>فرصة المشاركة في مسابقة الصيف</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">ساري حتى: 15/06/2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">كود الخصم: SUMMER15</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">احصل على العرض</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      تحدي الشارات
                    </CardTitle>
                    <Badge className="bg-amber-500">حصري</Badge>
                  </div>
                  <CardDescription>مسابقة للفوز بجوائز حصرية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=300&text=Badge Challenge"
                      alt="تحدي الشارات"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">مميزات العرض:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>جوائز نقدية تصل إلى $1000</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارات حصرية للفائزين</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ترويج مجاني على منصات الوكالة</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">ساري حتى: 01/05/2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">المشاركة مفتوحة</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">المشاركة في التحدي</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="diamonds">
          <div className="space-y-8">
            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">خدمات شحن الألماس</h2>
              <p className="text-muted-foreground mb-6">
                نوفر خدمات شحن الألماس لجميع منصات البث المباشر بأسعار تنافسية وطرق دفع متنوعة. يمكنك شحن الألماس بسهولة
                وأمان من خلال منصتنا.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">أسعار تنافسية</h3>
                    <p className="text-sm text-muted-foreground">أفضل الأسعار في السوق</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">شحن فوري</h3>
                    <p className="text-sm text-muted-foreground">يتم الشحن خلال دقائق</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">ضمان 100%</h3>
                    <p className="text-sm text-muted-foreground">استرداد كامل في حالة الفشل</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                <CardHeader>
                  <CardTitle>Super Live</CardTitle>
                  <CardDescription>شحن ألماس منصة Super Live</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">500</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$5</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">1000</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$10</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">2000</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$20</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">5000</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$50</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">سعر الألماسة:</span>
                    <span>$0.01</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">الحد الأدنى للشحن:</span>
                    <span>500 ألماسة</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">وقت الشحن:</span>
                    <span>فوري</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">شحن الآن</Button>
                </CardFooter>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600" />
                <CardHeader>
                  <CardTitle>Party Star</CardTitle>
                  <CardDescription>شحن ألماس منصة Party Star</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">600</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$6</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">1200</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$12</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">2400</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$24</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">6000</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$60</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">سعر الألماسة:</span>
                    <span>$0.01</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">الحد الأدنى للشحن:</span>
                    <span>600 ألماسة</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">وقت الشحن:</span>
                    <span>فوري</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">شحن الآن</Button>
                </CardFooter>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
                <CardHeader>
                  <CardTitle>Popo Live</CardTitle>
                  <CardDescription>شحن ألماس منصة Popo Live</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">550</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$5.5</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">1100</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$11</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">2200</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$22</div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">5500</div>
                      <div className="text-sm text-muted-foreground">ألماسة</div>
                      <div className="text-lg font-semibold mt-2">$55</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">سعر الألماسة:</span>
                    <span>$0.01</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">الحد الأدنى للشحن:</span>
                    <span>550 ألماسة</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">وقت الشحن:</span>
                    <span>فوري</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">شحن الآن</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">كيفية شحن الألماس</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">اختر المنصة</h3>
                  <p className="text-sm text-muted-foreground">اختر منصة البث المباشر التي ترغب في شحن الألماس لها</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">حدد الكمية</h3>
                  <p className="text-sm text-muted-foreground">اختر كمية الألماس التي ترغب في شحنها</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">اختر طريقة الدفع</h3>
                  <p className="text-sm text-muted-foreground">اختر طريقة الدفع المناسبة لك</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="font-medium mb-2">استلم الألماس</h3>
                  <p className="text-sm text-muted-foreground">سيتم شحن الألماس فورًا إلى حسابك</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="subscriptions">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">باقات العضوية</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                اختر الباقة المناسبة لك واستمتع بمزايا حصرية تساعدك على تحقيق النجاح في عالم البث المباشر
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600" />
                <CardHeader>
                  <CardTitle>الباقة الأساسية</CardTitle>
                  <CardDescription>للمذيعين العاديين والجدد</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-muted-foreground">/شهريًا</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>الوصول إلى منصات البث الأساسية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>دعم فني أساسي</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>عمولة قياسية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تقارير أداء أسبوعية</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    اختيار الباقة
                  </Button>
                </CardFooter>
              </Card>

              <Card className="relative overflow-hidden border-primary">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600" />
                <div className="absolute top-5 right-5">
                  <Badge className="bg-primary">الأكثر شعبية</Badge>
                </div>
                <CardHeader>
                  <CardTitle>الباقة المميزة</CardTitle>
                  <CardDescription>للمذيعين المتميزين</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold">$19.99</span>
                    <span className="text-muted-foreground">/شهريًا</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>جميع مميزات الباقة الأساسية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>خصم 10% على العمولات</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارة "مذيع مميز"</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>أولوية في الظهور على المنصات</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>دعم فني متميز</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تقارير أداء يومية</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">اختيار الباقة</Button>
                </CardFooter>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                <CardHeader>
                  <CardTitle>الباقة الذهبية</CardTitle>
                  <CardDescription>للمذيعين المحترفين</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold">$49.99</span>
                    <span className="text-muted-foreground">/شهريًا</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>جميع مميزات الباقة المميزة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>خصم 20% على العمولات</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارة "مذيع ذهبي"</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مدير حساب شخصي</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ترويج مجاني على منصات الوكالة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تحليلات متقدمة للأداء</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>دعم فني على مدار الساعة</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    اختيار الباقة
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">الأسئلة الشائعة</h2>
              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium mb-2">هل يمكنني تغيير الباقة في أي وقت؟</h3>
                  <p className="text-sm text-muted-foreground">
                    نعم، يمكنك ترقية أو تخفيض باقتك في أي وقت. سيتم تطبيق التغييرات في دورة الفوترة التالية.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium mb-2">هل هناك فترة تجريبية للباقات المدفوعة؟</h3>
                  <p className="text-sm text-muted-foreground">
                    نعم، نقدم فترة تجريبية مجانية لمدة 7 أيام للباقة المميزة و14 يومًا للباقة الذهبية.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-medium mb-2">كيف يتم احتساب الخصم على العمولات؟</h3>
                  <p className="text-sm text-muted-foreground">
                    يتم تطبيق الخصم على جميع العمولات المستحقة للوكالة من إيراداتك على جميع المنصات المدعومة.
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
            <h2 className="text-2xl font-bold">احصل على عروضنا الحصرية</h2>
            <p className="text-primary-foreground/80">
              اشترك في نشرتنا البريدية للحصول على أحدث العروض والخصومات والمسابقات. كن أول من يعلم بالعروض الحصرية.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="flex-grow px-4 py-2 rounded-md border-0 text-foreground"
              />
              <Button variant="secondary">اشتراك</Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-48 w-48">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Special Offers"
                alt="عروض خاصة"
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
