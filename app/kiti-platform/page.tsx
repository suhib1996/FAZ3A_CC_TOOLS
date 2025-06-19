import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  DollarSign,
  Users,
  Trophy,
  Gift,
  Clock,
  TrendingUp,
  MessageCircle,
  Shield,
  Award,
  Target,
  Sparkles,
  UserPlus,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "منصة Kiti | دليلك الشامل للمذيعين والوكالات",
  description:
    "اكتشف نظام العمولات، المكافآت بالساعة، برنامج ستار هوست، ومكافآت دعوة المستخدمين على منصة Kiti للبث المباشر.",
}

// This page will not use the main site header.
// It's designed to be a self-contained informational page about the Kiti platform in general.

export default function KitiPlatformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10  rounded-full p-6 shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Kiti Platform"
                  width={80}
                  height={80}
                  className="opacity-90"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              منصة Kiti - Your Stage to Shine
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              دليلك الشامل لاستكشاف الفرص والمكافآت على منصة Kiti. انضم إلى عالم البث المباشر وحقق أقصى استفادة من
              ميزاتنا المبتكرة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-white/90 font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                اكتشف المزيد
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  تواصل معنا
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Updated to remove shipping agent */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              لماذا تختار منصة Kiti؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              منصة متطورة للبث المباشر تقدم أفضل العوائد والمكافآت للمذيعين والوكالات.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Changed to 3 cols */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/30 p-6">
                <div className="mx-auto bg-purple-100 dark:bg-purple-800/40 rounded-full p-4 w-fit shadow-inner">
                  <DollarSign className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl mt-4 font-semibold text-gray-800 dark:text-white">
                  عمولات مجزية
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-md">
                  عمولات تنافسية على دخل الهدايا تصل إلى 180% للمذيعين، و 60% للوكالات.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="bg-green-50 dark:bg-green-900/30 p-6">
                <div className="mx-auto bg-green-100 dark:bg-green-800/40 rounded-full p-4 w-fit shadow-inner">
                  <Clock className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl mt-4 font-semibold text-gray-800 dark:text-white">
                  مكافآت بالساعة
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-md">
                  تصل إلى 5 دولارات بالساعة للمذيعين المختارين (4$ للمذيع + 1$ للوكالة).
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="bg-blue-50 dark:bg-blue-900/30 p-6">
                <div className="mx-auto bg-blue-100 dark:bg-blue-800/40 rounded-full p-4 w-fit shadow-inner">
                  <UserPlus className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl mt-4 font-semibold text-gray-800 dark:text-white">
                  دعوة مستخدمين
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-md">
                  مكافآت تصل إلى 600 دولار شهرياً لدعوة مستخدمين جدد للمنصة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commission System - Updated based on PDF, removed shipping agent tab */}
      <section className="py-16 sm:py-24 bg-gray-100/70 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              نظام العمولات والمكافآت
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تفاصيل شاملة حول كيفية تحقيق الأرباح على منصة Kiti.
            </p>
          </div>

          <Tabs defaultValue="commission" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
              <TabsTrigger
                value="commission"
                className="py-3 text-md data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                نظام العمولات
              </TabsTrigger>
              <TabsTrigger
                value="hourly"
                className="py-3 text-md data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                النظام بالساعة
              </TabsTrigger>
              <TabsTrigger
                value="star-ranking"
                className="py-3 text-md data-[state=active]:bg-yellow-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                ترتيب النجوم (ستار هوست)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="commission" className="pt-8">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
                عمولات المذيعين على دخل الهدايا
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="border-2 border-yellow-400 dark:border-yellow-600 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center bg-yellow-50 dark:bg-yellow-900/30 p-6">
                    <Badge className="mx-auto w-fit bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      VIP
                    </Badge>
                    <CardTitle className="text-3xl mt-3 font-bold text-yellow-700 dark:text-yellow-400">180%</CardTitle>
                    <CardDescription className="text-yellow-600 dark:text-yellow-500">
                      عمولة على دخل الهدايا
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3 bg-white dark:bg-gray-800">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">مثال توضيحي:</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        هدية 50,000 نقطة = 90,000 نقطة مكافأة (180%)
                        <br />
                        الإجمالي: 140,000 نقطة ≈ 28$
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-400 dark:border-purple-600 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center bg-purple-50 dark:bg-purple-900/30 p-6">
                    <Badge className="mx-auto w-fit bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      العادي
                    </Badge>
                    <CardTitle className="text-3xl mt-3 font-bold text-purple-700 dark:text-purple-400">160%</CardTitle>
                    <CardDescription className="text-purple-600 dark:text-purple-500">
                      عمولة على دخل الهدايا
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3 bg-white dark:bg-gray-800">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">مثال توضيحي:</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        هدية 50,000 نقطة = 80,000 نقطة مكافأة (160%)
                        <br />
                        الإجمالي: 130,000 نقطة ≈ 26$
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-400 dark:border-blue-600 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center bg-blue-50 dark:bg-blue-900/30 p-6">
                    <Badge className="mx-auto w-fit bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      المبتدئ
                    </Badge>
                    <CardTitle className="text-3xl mt-3 font-bold text-blue-700 dark:text-blue-400">120%</CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-500">
                      عمولة على دخل الهدايا
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3 bg-white dark:bg-gray-800">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">مثال توضيحي:</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        هدية 50,000 نقطة = 60,000 نقطة مكافأة (120%)
                        <br />
                        الإجمالي: 110,000 نقطة ≈ 22$
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                * لا يوجد تارجت ساعات، ولكن يجب على المذيع تحقيق دخل هدايا. يتم الحساب أسبوعياً (الخميس إلى الأربعاء).
              </p>

              <Card className="mt-12 bg-gradient-to-r from-teal-500 to-cyan-500 text-white dark:from-teal-700 dark:to-cyan-700 shadow-xl rounded-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Gift className="h-7 w-7" />
                    عمولة الوكالة
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">نسبة العمولة للوكالة:</h4>
                    <p className="text-4xl font-bold">60%</p>
                    <p className="text-sm opacity-90">من إجمالي دخل هدايا جميع مذيعي الوكالة.</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="font-semibold mb-2 text-lg">فترة الحساب:</h4>
                    <p className="text-sm">من الخميس (00:00:00) إلى الأربعاء (23:59:59) بتوقيت السعودية.</p>
                    <p className="text-sm opacity-90">يتم إصدار الدفع يوم الخميس التالي.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hourly" className="pt-8">
              <div className="space-y-10">
                <Card className="shadow-lg rounded-xl overflow-hidden">
                  <CardHeader className="bg-green-50 dark:bg-green-900/30 p-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-green-700 dark:text-green-300">
                      <Clock className="h-7 w-7" />
                      نظام المكافآت بالساعة للمذيعين المختارين
                    </CardTitle>
                    <CardDescription className="text-green-600 dark:text-green-400 mt-1">
                      حصريًا للمذيعات الناطقات بالعربية اللاتي اجتزن الأوديشن بنجاح.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 bg-white dark:bg-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                        <DollarSign className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                        <h3 className="font-bold text-2xl text-blue-700 dark:text-blue-300">4$</h3>
                        <p className="text-sm text-muted-foreground">للمذيع/ة المختار/ة</p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                        <Users className="h-10 w-10 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                        <h3 className="font-bold text-2xl text-purple-700 dark:text-purple-300">1$</h3>
                        <p className="text-sm text-muted-foreground">للوكالة</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                        <Trophy className="h-10 w-10 text-green-600 dark:text-green-400 mx-auto mb-3" />
                        <h3 className="font-bold text-2xl text-green-700 dark:text-green-300">5$</h3>
                        <p className="text-sm text-muted-foreground">المجموع بالساعة</p>
                      </div>
                    </div>

                    <div className="mt-8 space-y-6">
                      <h4 className="font-semibold text-xl text-gray-800 dark:text-gray-200">الشروط والأحكام:</h4>
                      <ul className="space-y-3 text-md text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>
                            الحد الأدنى لوقت البث المباشر: <strong>ساعة واحدة يومياً</strong> (وإلا لن يتم صرف مكافأة
                            الساعة لذلك اليوم).
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span>
                            الحد الأقصى للمكافأة بالساعة يومياً: <strong>15 دولاراً</strong> لكل مذيع/ة مختار/ة (يعادل 3
                            ساعات).
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Sparkles className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                          <span>يجب على المذيعين المختارين التفاعل بفاعلية مع المستخدمين خلال البث المباشر.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                          <span>
                            أي مذيع/ة يتم حظره/ا 3 مرات أو أكثر بسبب عدم تقديم محتوى خلال البث، سيتم إزالته/ا من نظام
                            المذيعين المختارين.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg rounded-xl overflow-hidden">
                  <CardHeader className="bg-indigo-50 dark:bg-indigo-900/30 p-6">
                    <CardTitle className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300">
                      كيف تصبح مذيعاً مختاراً؟
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800">
                    <div>
                      <h4 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">
                        متطلبات الأوديشن (الفيديو التجريبي):
                      </h4>
                      <ul className="space-y-2 text-md text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-indigo-500" /> مظهر أنيق وجذاب.
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-indigo-500" /> ملابس أنيقة ومناسبة.
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-indigo-500" /> مدة الفيديو لا تقل عن 30 ثانية.
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-indigo-500" /> كاميرا عالية الجودة لضمان وضوح الصورة.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-3 text-gray-800 dark:text-gray-200">عملية التقديم:</h4>
                      <ul className="space-y-2 text-md text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" /> انضم إلى وكالة معتمدة.
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" /> أرسل الفيديو التجريبي عبر التطبيق أو
                          الوكالة.
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" /> اجتياز اختبار الأداء.
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" /> يمكن إعادة المحاولة 3 مرات أسبوعياً عبر
                          التطبيق.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="star-ranking" className="pt-8">
              <div className="space-y-10">
                <Card className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white dark:from-yellow-600 dark:via-orange-700 dark:to-red-700 shadow-xl rounded-xl overflow-hidden">
                  <CardHeader className="p-6">
                    <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                      <Star className="h-8 w-8 animate-pulse" />
                      ترتيب نجوم Kiti "ستار هوست"
                    </CardTitle>
                    <CardDescription className="text-yellow-100 dark:text-yellow-200 mt-1 text-lg">
                      مكافآت حصرية للمذيعين الذين يحققون مراكز ضمن أفضل 20 على لوحة المتصدرين الأسبوعية (وفقًا لإجمالي
                      دخل الهدايا).
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-center shadow-lg border border-white/20">
                        <Trophy className="h-16 w-16 text-yellow-300 mx-auto mb-3" />
                        <h3 className="text-2xl font-semibold">المركز الأول</h3>
                        <div className="text-4xl font-bold my-2">
                          50$ <span className="text-xl font-normal">/ ساعة</span>
                        </div>
                        <p className="text-sm opacity-90">(40$ للمذيع + 10$ للوكالة)</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-center shadow-lg border border-white/20">
                        <Award className="h-16 w-16 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-2xl font-semibold">المراكز 2-10</h3>
                        <div className="text-4xl font-bold my-2">
                          20$ <span className="text-xl font-normal">/ ساعة</span>
                        </div>
                        <p className="text-sm opacity-90">(16$ للمذيع + 4$ للوكالة)</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-center shadow-lg border border-white/20">
                        <Star className="h-16 w-16 text-orange-300 mx-auto mb-3" />
                        <h3 className="text-2xl font-semibold">المراكز 11-20</h3>
                        <div className="text-4xl font-bold my-2">
                          10$ <span className="text-xl font-normal">/ ساعة</span>
                        </div>
                        <p className="text-sm opacity-90">(8$ للمذيع + 2$ للوكالة)</p>
                      </div>
                    </div>
                    <p className="text-center text-md opacity-90">
                      * يُطبق الراتب بين ساعة واحدة كحد أدنى و 3 ساعات كحد أقصى في اليوم.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-200">
                      <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg shadow-md">
                        <h4 className="font-semibold text-xl text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                          <CheckCircle /> الترقية
                        </h4>
                        <p className="text-sm">
                          أي مذيع/ة من الفئة "العادية" يدخل ضمن أفضل 200 على لوحة المتصدرين الأسبوعية، سيتم ترقيته/ا
                          تلقائياً إلى فئة "المختار" في الأسبوع التالي.
                        </p>
                      </div>
                      <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-lg shadow-md">
                        <h4 className="font-semibold text-xl text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                          <AlertTriangle /> النزول
                        </h4>
                        <p className="text-sm">
                          أقل من 200 مذيع/ة من فئة "المختار" (بحسب دخل الهدايا) سيتم إعادتهم إلى الفئة "العادية"، مما
                          يضمن استمرار التنافس العادل.
                        </p>
                      </div>
                    </div>
                    <p className="text-center text-sm opacity-90 mt-4">
                      يتم تحديث لوحة المتصدرين أسبوعيًا (الخميس إلى الأربعاء بتوقيت السعودية).
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-lg rounded-xl overflow-hidden mt-10">
                  <CardHeader className="bg-sky-50 dark:bg-sky-900/30 p-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-sky-700 dark:text-sky-300">
                      <Users className="h-7 w-7" />
                      ميزات النجوم الداعمين (Top Supporters)
                    </CardTitle>
                    <CardDescription className="text-sky-600 dark:text-sky-400 mt-1">
                      امتيازات حصرية لأفضل 10 داعمين أسبوعيًا بناءً على إعادة الشحن.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 bg-white dark:bg-gray-800 space-y-4">
                    <p className="text-md text-muted-foreground">
                      بصفتك من كبار الداعمين، يمكنك الحصول على راتب إضافي للوكالة والمساعدة في ترقية المذيعين.
                    </p>
                    <div className="bg-sky-100 dark:bg-sky-900/40 p-4 rounded-lg border border-sky-200 dark:border-sky-800">
                      <p className="font-semibold text-sky-800 dark:text-sky-200">
                        <DollarSign className="inline h-5 w-5 mr-1" />
                        كن نجمًا داعمًا: استمتع براتب إضافي قدره <strong className="text-lg">10$</strong> في الساعة
                        لوكالتك (منها <strong className="text-lg">2$</strong> مباشرة للوكالة).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                        قوة ترقية المذيعين إلى فئة "المختار":
                      </h4>
                      <ul className="list-disc list-inside text-md text-muted-foreground space-y-1">
                        <li>
                          <strong>الداعم #1:</strong> يضمن ترقية 10 مذيعات.
                        </li>
                        <li>
                          <strong>الداعم #2:</strong> يضمن ترقية 5 مذيعات.
                        </li>
                        <li>
                          <strong>الداعم #3:</strong> يضمن ترقية 3 مذيعات.
                        </li>
                        <li>
                          <strong>الداعمون #4 - #10:</strong> كل منهم يضمن ترقية مذيعة واحدة.
                        </li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">
                        * يمكنك ترقية أي مذيعة، حتى لو تم تخفيض تصنيفها سابقًا. إذا خرجت من قائمة أفضل 10 داعمين، ستفقد
                        المذيعات اللاتي قمت بترقيتهن حالة "المختار".
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
                      <h5 className="font-medium text-red-700 dark:text-red-300 flex items-center gap-2">
                        <Shield /> قوة فك الحظر الفورية
                      </h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        أعضاء قائمة أفضل 10 داعمين لديهم صلاحية كبار الشخصيات لإلغاء حظر أي حساب فورًا – دون الحاجة إلى
                        فيديو اعتذار.
                      </p>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      يبدأ عدّاد ترتيب الداعمين كل يوم خميس (00:00:00) حتى الأربعاء (23:59:59) بتوقيت السعودية.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* User Invitation Rewards - Updated based on PDF */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white dark:from-blue-700 dark:via-indigo-700 dark:to-purple-800 shadow-xl rounded-xl overflow-hidden">
            <CardHeader className="text-center p-8">
              <UserPlus className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <CardTitle className="text-3xl sm:text-4xl font-bold">مكافآت دعوة المستخدمين الجدد</CardTitle>
              <CardDescription className="text-lg text-blue-100 dark:text-blue-200 mt-2 max-w-xl mx-auto">
                اربح المال من كل مستخدم جديد تدعوه للانضمام إلى منصة Kiti!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 bg-white/5 dark:bg-black/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 text-center">
                <div className="bg-white/10 p-6 rounded-lg shadow-md">
                  <DollarSign className="h-10 w-10 text-green-300 mx-auto mb-3" />
                  <h3 className="font-bold text-2xl">1$</h3>
                  <p className="text-sm opacity-90">لكل تحميل وتثبيت جديد للتطبيق عبر رابطك.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg shadow-md">
                  <TrendingUp className="h-10 w-10 text-yellow-300 mx-auto mb-3" />
                  <h3 className="font-bold text-2xl">600$</h3>
                  <p className="text-sm opacity-90">مكافأة شهرية قصوى يمكنك تحقيقها من الدعوات.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg shadow-md">
                  <Target className="h-10 w-10 text-red-300 mx-auto mb-3" />
                  <h3 className="font-bold text-2xl">20 مستخدم/يوم</h3>
                  <p className="text-sm opacity-90">الحد الأقصى للدعوات المؤهلة للمكافأة يومياً لكل مذيع.</p>
                </div>
              </div>

              <div className="bg-white/20 p-6 rounded-lg shadow-inner space-y-4">
                <h4 className="font-semibold text-xl mb-3 text-center">تفاصيل إضافية للمكافآت:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-black/20 p-4 rounded-md">
                    <h5 className="font-medium mb-1 text-lg flex items-center gap-2">
                      <Gift className="h-5 w-5 text-pink-300" /> مكافأة التسجيل:
                    </h5>
                    <p className="opacity-90">
                      يحصل التاجر (الداعي) على 500 عملة، وكذلك الوكالة/المضيف الذي ينتمي إليه المستخدم المدعو.
                    </p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-md">
                    <h5 className="font-medium mb-1 text-lg flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-300" /> مكافأة أول شحن:
                    </h5>
                    <p className="opacity-90">
                      500 عملة إضافية للتاجر (الداعي) إذا قام المستخدم المدعو بأول عملية شحن خلال 72 ساعة من التسجيل.
                    </p>
                    <p className="opacity-90 mt-1">
                      إذا قام الأشخاص الذين تمت دعوتهم بشكل غير مباشر بإتمام أول عملية شحن خلال 72 ساعة من التسجيل،
                      ستحصل على مكافأة بنسبة 20% (200 عملة تاجر أو عملة عادية).
                    </p>
                  </div>
                </div>
                <p className="text-xs opacity-80 text-center mt-4">
                  * يمكن لوكلاء الشحن والوكالات والمضيفين دعوة مستخدمين جدد من خلال رابط الدعوة الخاص بهم.
                  <br />* شحن 1 دولار أمريكي عبر جوجل أو iOS يعادل 1,050 عملة Kiti.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section - WhatsApp numbers removed */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">هل لديك استفسارات؟</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              نحن هنا لمساعدتك. يمكنك التواصل معنا عبر نموذج الاتصال الخاص بنا.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                نموذج التواصل
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center bg-black text-gray-500 text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} منصة Kiti. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  )
}
