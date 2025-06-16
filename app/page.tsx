import { OptimizedImage } from "@/components/ui/optimized-image"
import { PlatformImage } from "@/components/ui/platform-image"
import { ResponsiveContainer } from "@/components/ui/responsive-container"
import { ResponsiveGrid } from "@/components/ui/responsive-grid"
import { ResponsiveText } from "@/components/ui/responsive-text"
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
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <ResponsiveContainer>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <ResponsiveText variant="h1">نظام إدارة الوكالات</ResponsiveText>
                  <ResponsiveText variant="p" className="max-w-[600px] text-muted-foreground">
                    نظام متخصص في إدارة الوكالات والبث المباشر، نقدم خدمات متكاملة تشمل توظيف العاملين في مجال البث
                    المباشر، شحن اللماس، وإدارة العمليات المالية.
                  </ResponsiveText>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/auth/register">انضم الآن</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/platforms">تعرف على المنصات</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <OptimizedImage
                  src="/images/logo-new.png"
                  alt="نظام إدارة الوكالات"
                  width={400}
                  height={400}
                  className="object-contain w-full max-w-[300px] sm:max-w-[400px] h-auto"
                  priority
                  fallbackSrc="/images/logo.png"
                />
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Latest News Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-background">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  آخر الأخبار
                </Badge>
                <ResponsiveText variant="h2">أحدث الأخبار والإعلانات</ResponsiveText>
                <ResponsiveText variant="p" className="max-w-[900px] text-muted-foreground" align="center">
                  تابع آخر المستجدات والأخبار المتعلقة بوكالة خلك فخم والمنصات المدعومة
                </ResponsiveText>
              </div>
            </div>

            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <Badge className="bg-blue-500">إعلان</Badge>
                    <span className="text-xs text-muted-foreground">30 مارس 2025</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">خصم 20% على جميع خدمات الشحن</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
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

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <Badge className="bg-green-500">تحديث</Badge>
                    <span className="text-xs text-muted-foreground">28 مارس 2025</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">تحديث نظام الشارات والمكافآت</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
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

              <Card className="h-full md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <Badge className="bg-purple-500">منصات</Badge>
                    <span className="text-xs text-muted-foreground">25 مارس 2025</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">إضافة منصة جديدة قريباً</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
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
            </ResponsiveGrid>

            <div className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link href="/news">
                  عرض جميع الأخبار <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                </Link>
              </Button>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Competitions & Challenges Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-muted/30">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  المسابقات والتحديات
                </Badge>
                <ResponsiveText variant="h2">المسابقات والتحديات الحالية</ResponsiveText>
                <ResponsiveText variant="p" className="max-w-[900px] text-muted-foreground" align="center">
                  شارك في المسابقات والتحديات واربح جوائز قيمة
                </ResponsiveText>
              </div>
            </div>

            <ResponsiveGrid cols={{ default: 1, lg: 2 }} gap="lg">
              <Card className="overflow-hidden h-full">
                <div className="relative h-32 sm:h-40 md:h-48 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-primary/20" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-xs sm:text-sm">جاري الآن</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Trophy className="h-5 w-5 text-primary flex-shrink-0" />
                    تحدي المشاهدات
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    حقق أكبر عدد من المشاهدات واربح جوائز قيمة
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">1 - 15 يونيو 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">42 مشارك</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Award className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">الجائزة الأولى: 500$</span>
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

              <Card className="overflow-hidden h-full">
                <div className="relative h-32 sm:h-40 md:h-48 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-primary/20" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-xs sm:text-sm">جاري الآن</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Star className="h-5 w-5 text-primary flex-shrink-0" />
                    تحدي الإيرادات
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    حقق أعلى إيرادات واربح مكافآت نقدية وترقية عضوية
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">1 - 30 يونيو 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">78 مشارك</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Award className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">الجائزة الأولى: 1000$ + ترقية عضوية</span>
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
            </ResponsiveGrid>

            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/competitions">
                  عرض جميع المسابقات <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                </Link>
              </Button>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  خدماتنا
                </Badge>
                <ResponsiveText variant="h2">ما الذي نقدمه لك؟</ResponsiveText>
                <ResponsiveText variant="p" className="max-w-[900px] text-muted-foreground" align="center">
                  نقدم مجموعة متكاملة من الخدمات لمساعدتك على النجاح في عالم البث المباشر
                </ResponsiveText>
              </div>
            </div>
            <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3, xl: 4 }} gap="lg" className="mt-8">
              <Card className="h-full">
                <CardHeader className="flex flex-col items-center gap-4 pb-2 sm:flex-row sm:items-start">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl text-center sm:text-right">إدارة المذيعين</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
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

              <Card className="h-full">
                <CardHeader className="flex flex-col items-center gap-4 pb-2 sm:flex-row sm:items-start">
                  <CreditCard className="h-8 w-8 text-primary flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl text-center sm:text-right">الخدمات المالية</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    نقدم خدمات مالية شاملة تتضمن السحب، الإيداع، التحويل، وإدارة الرواتب بطريقة آمنة وسريعة.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/financial">المزيد من التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full">
                <CardHeader className="flex flex-col items-center gap-4 pb-2 sm:flex-row sm:items-start">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl text-center sm:text-right">الشارات والمسابقات</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    نظام متكامل للشارات والمسابقات لتحفيز المذيعين وزيادة التفاعل، مع جوائز قيمة للفائزين.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/badges">المزيد من التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="h-full md:col-span-2 lg:col-span-1">
                <CardHeader className="flex flex-col items-center gap-4 pb-2 sm:flex-row sm:items-start">
                  <Headphones className="h-8 w-8 text-primary flex-shrink-0" />
                  <CardTitle className="text-lg sm:text-xl text-center sm:text-right">الدعم الفني</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    فريق دعم فني متخصص متاح على مدار الساعة لحل جميع المشكلات التقنية والإجابة على استفساراتك.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">المزيد من التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* Platforms Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-muted/50">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  المنصات
                </Badge>
                <ResponsiveText variant="h2">منصات البث المدعومة</ResponsiveText>
                <ResponsiveText variant="p" className="max-w-[900px] text-muted-foreground" align="center">
                  نقدم خدماتنا على أشهر منصات البث المباشر في العالم العربي
                </ResponsiveText>
              </div>
            </div>
            <div className="mx-auto mt-8">
              <Tabs defaultValue="super-live" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 h-auto">
                  <TabsTrigger value="super-live" className="text-xs sm:text-sm">
                    Super Live
                  </TabsTrigger>
                  <TabsTrigger value="party-star" className="text-xs sm:text-sm">
                    Party Star
                  </TabsTrigger>
                  <TabsTrigger value="popo-live" className="text-xs sm:text-sm">
                    Popo Live
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="super-live">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center order-2 lg:order-1">
                      <PlatformImage platform="super-live" size="md" />
                    </div>
                    <div className="order-1 lg:order-2">
                      <ResponsiveText variant="h3" className="mb-4">
                        منصة Super Live
                      </ResponsiveText>
                      <ResponsiveText variant="p" className="text-muted-foreground mb-4">
                        منصة بث مباشر شهيرة مع نظام مكافآت متميز وفرص كبيرة للمذيعين. توفر المنصة بيئة آمنة وسهلة
                        الاستخدام للمذيعين والمشاهدين.
                      </ResponsiveText>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>راتب ثابت</Badge>
                        <Badge>مكافآت يومية</Badge>
                        <Badge>دعم فني</Badge>
                        <Badge>تدريب مجاني</Badge>
                      </div>
                      <Button asChild className="gap-2 w-full sm:w-auto">
                        <Link href="/platforms">
                          المزيد من التفاصيل
                          <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="party-star">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center order-2 lg:order-1">
                      <PlatformImage platform="party-star" size="md" />
                    </div>
                    <div className="order-1 lg:order-2">
                      <ResponsiveText variant="h3" className="mb-4">
                        منصة Party Star
                      </ResponsiveText>
                      <ResponsiveText variant="p" className="text-muted-foreground mb-4">
                        منصة تفاعلية للبث المباشر مع ميزات فريدة وجمهور واسع من المستخدمين. توفر Party Star فرصًا متنوعة
                        للمذيعين لتحقيق دخل مميز.
                      </ResponsiveText>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>عمولة مرتفعة</Badge>
                        <Badge>جوائز أسبوعية</Badge>
                        <Badge>مسابقات شهرية</Badge>
                        <Badge>دعم مستمر</Badge>
                      </div>
                      <Button asChild className="gap-2 w-full sm:w-auto">
                        <Link href="/platforms">
                          المزيد من التفاصيل
                          <ArrowRight className="h-4 w-4 mr-2 rtl-flip" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="popo-live">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center order-2 lg:order-1">
                      <PlatformImage platform="popo-live" size="md" />
                    </div>
                    <div className="order-1 lg:order-2">
                      <ResponsiveText variant="h3" className="mb-4">
                        منصة Popo Live
                      </ResponsiveText>
                      <ResponsiveText variant="p" className="text-muted-foreground mb-4">
                        منصة متنامية للبث المباشر توفر فرصًا كبيرة للمذيعين الجدد والمحترفين. تتميز Popo Live بنظام
                        مكافآت مرن ومتنوع.
                      </ResponsiveText>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge>نظام مهام</Badge>
                        <Badge>راتب أسبوعي</Badge>
                        <Badge>سحب فوري</Badge>
                        <Badge>تدريب شامل</Badge>
                      </div>
                      <Button asChild className="gap-2 w-full sm:w-auto">
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
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <ResponsiveContainer>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <ResponsiveText variant="h2">ابدأ رحلتك مع نظام إدارة الوكالات</ResponsiveText>
                <ResponsiveText variant="p" className="max-w-[900px] text-muted-foreground" align="center">
                  انضم إلينا اليوم واستفد من خدماتنا المتكاملة لتحقيق النجاح في عالم البث المباشر
                </ResponsiveText>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/auth/register">انضم الآن</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
      <AIChat />
    </div>
  )
}
