import { OptimizedImage } from "@/components/ui/optimized-image"
import { PlatformImage } from "@/components/ui/platform-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Award, CreditCard, Headphones, Calendar, Trophy, Star } from "lucide-react"
import { AIChat } from "@/components/ai-chat"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    نظام إدارة الوكالات
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    نظام متخصص في إدارة الوكالات والبث المباشر، نقدم خدمات متكاملة تشمل توظيف العاملين في مجال البث
                    المباشر، شحن اللماس، وإدارة العمليات المالية.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="w-full">
                    <Link href="/auth/register">انضم الآن</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/platforms">تعرف على المنصات</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <OptimizedImage
                  src="/images/logo-new.png"
                  alt="نظام إدارة الوكالات"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                  fallbackSrc="/images/logo.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  آخر الأخبار
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">أحدث الأخبار والإعلانات</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  تابع آخر المستجدات والأخبار المتعلقة بوكالة خلك فخم والمنصات المدعومة
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-blue-500">إعلان</Badge>
                    <span className="text-xs text-muted-foreground">30 مارس 2025</span>
                  </div>
                  <CardTitle className="text-xl">خصم 20% على جميع خدمات الشحن</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    استفد من خصم 20% على جميع خدمات شحن الألماس لجميع المنصات. العرض ساري حتى نهاية الشهر الحالي.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/offers">
                      عرض التفاصيل <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-green-500">تحديث</Badge>
                    <span className="text-xs text-muted-foreground">28 مارس 2025</span>
                  </div>
                  <CardTitle className="text-xl">تحديث نظام الشارات والمكافآت</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    تم تحديث نظام الشارات والمكافآت ليشمل المزيد من الميزات والمكافآت للمذيعين المتميزين.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/badges">
                      عرض التفاصيل <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-purple-500">منصات</Badge>
                    <span className="text-xs text-muted-foreground">25 مارس 2025</span>
                  </div>
                  <CardTitle className="text-xl">إضافة منصة جديدة قريباً</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    نعمل على إضافة منصة جديدة إلى قائمة المنصات المدعومة. ترقبوا المزيد من التفاصيل قريباً.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/platforms">
                      عرض المنصات <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link href="/news">
                  عرض جميع الأخبار <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Competitions & Challenges Section */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  المسابقات والتحديات
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">المسابقات والتحديات الحالية</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  شارك في المسابقات والتحديات واربح جوائز قيمة
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="h-20 w-20 text-primary/20" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary">جاري الآن</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    تحدي المشاهدات
                  </CardTitle>
                  <CardDescription>حقق أكبر عدد من المشاهدات واربح جوائز قيمة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">1 - 15 يونيو 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">42 مشارك</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">الجائزة الأولى: 500$</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/competitions">
                      المشاركة الآن <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-20 w-20 text-primary/20" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary">جاري الآن</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    تحدي الإيرادات
                  </CardTitle>
                  <CardDescription>حقق أعلى إيرادات واربح مكافآت نقدية وترقية عضوية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">1 - 30 يونيو 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">78 مشارك</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">الجائزة الأولى: 1000$ + ترقية عضوية</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/competitions">
                      المشاركة الآن <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/competitions">
                  عرض جميع المسابقات <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  خدماتنا
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">ما الذي نقدمه لك؟</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  نقدم مجموعة متكاملة من الخدمات لمساعدتك على النجاح في عالم البث المباشر
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">إدارة المذيعين</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    نوفر خدمات متكاملة لإدارة المذيعين، بما في ذلك التوظيف، التدريب، والإشراف المستمر لضمان تقديم أفضل
                    أداء.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/services">المزيد من التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">الخدمات المالية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    نقدم خدمات مالية شاملة تتضمن السحب، الإيداع، التحويل، وإدارة الرواتب بطريقة آمنة وسريعة.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/financial">المزيد من التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">الشارات والمسابقات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    نظام متكامل للشارات والمسابقات لتحفيز المذيعين وزيادة التفاعل، مع جوائز قيمة للفائزين.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/badges">المزيد من التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Headphones className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">الدعم الفني</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    فريق دعم فني متخصص متاح على مدار الساعة لحل جميع المشكلات التقنية والإجابة على استفساراتك.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">المزيد من التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  المنصات
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">منصات البث المدعومة</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  نقدم خدماتنا على أشهر منصات البث المباشر في العالم العربي
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8">
              <Tabs defaultValue="super-live" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="super-live">Super Live</TabsTrigger>
                  <TabsTrigger value="party-star">Party Star</TabsTrigger>
                  <TabsTrigger value="popo-live">Popo Live</TabsTrigger>
                </TabsList>
                <TabsContent value="super-live">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                      <PlatformImage platform="super-live" size="md" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">منصة Super Live</h3>
                      <p className="text-muted-foreground mb-4">
                        منصة بث مباشر شهيرة مع نظام مكافآت متميز وفرص كبيرة للمذيعين. توفر المنصة بيئة آمنة وسهلة
                        الاستخدام للمذيعين والمشاهدين.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>راتب ثابت</Badge>
                        <Badge>مكافآت يومية</Badge>
                        <Badge>دعم فني</Badge>
                        <Badge>تدريب مجاني</Badge>
                      </div>
                      <Button asChild className="gap-2">
                        <Link href="/platforms">
                          المزيد من التفاصيل
                          <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="party-star">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                      <PlatformImage platform="party-star" size="md" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">منصة Party Star</h3>
                      <p className="text-muted-foreground mb-4">
                        منصة تفاعلية للبث المباشر مع ميزات فريدة وجمهور واسع من المستخدمين. توفر Party Star فرصًا متنوعة
                        للمذيعين لتحقيق دخل مميز.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>عمولة مرتفعة</Badge>
                        <Badge>جوائز أسبوعية</Badge>
                        <Badge>مسابقات شهرية</Badge>
                        <Badge>دعم مستمر</Badge>
                      </div>
                      <Button asChild className="gap-2">
                        <Link href="/platforms">
                          المزيد من التفاصيل
                          <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="popo-live">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                      <PlatformImage platform="popo-live" size="md" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">منصة Popo Live</h3>
                      <p className="text-muted-foreground mb-4">
                        منصة متنامية للبث المباشر توفر فرصًا كبيرة للمذيعين الجدد والمحترفين. تتميز Popo Live بنظام
                        مكافآت مرن ومتنوع.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>نظام مهام</Badge>
                        <Badge>راتب أسبوعي</Badge>
                        <Badge>سحب فوري</Badge>
                        <Badge>تدريب شامل</Badge>
                      </div>
                      <Button asChild className="gap-2">
                        <Link href="/platforms">
                          المزيد من التفاصيل
                          <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">ابدأ رحلتك مع نظام إدارة الوكالات</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  انضم إلينا اليوم واستفد من خدماتنا المتكاملة لتحقيق النجاح في عالم البث المباشر
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="w-full">
                  <Link href="/auth/register">انضم الآن</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AIChat />
    </div>
  )
}
