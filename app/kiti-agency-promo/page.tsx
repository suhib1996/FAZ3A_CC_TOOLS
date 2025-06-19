import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  DollarSign,
  Users,
  Trophy,
  Gift,
  Clock,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  UserPlus,
  CheckCircle,
  ThumbsUp,
  BarChart,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "انضم إلى وكالة خلك فخم على منصة Kiti | فرصتك للتألق",
  description:
    "حقق أعلى العمولات والمكافآت كمذيع مع وكالة خلك فخم على منصة Kiti. عمولات تصل إلى 180%، نظام ساعات مجزي، ودعم كامل.",
}

export default function KitiAgencyPromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white selection:bg-purple-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="خلفية ترويجية ديناميكية"
            layout="fill"
            objectFit="cover"
            className="opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-purple-900/50 to-slate-900/80"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-new.png"
              alt="شعار وكالة خلك فخم"
              width={150}
              height={150}
              className="rounded-full shadow-2xl border-4 border-purple-500/60"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="block">انضم إلى فريق النجوم مع</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mt-2 drop-shadow-sm">
              وكالة خلك فخم على منصة Kiti
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            فرصتك الذهبية للتألق في عالم البث المباشر! نقدم لك أعلى العمولات، مكافآت حصرية، ودعمًا لا مثيل له لتصبح نجم
            Kiti القادم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg px-10 py-4 text-lg"
              asChild
            >
              <Link href="#join-us">
                <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                انضم إلينا الآن!
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="bg-transparent border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg px-10 py-4 text-lg"
              asChild
            >
              <Link href="#features">
                <Star className="mr-3 h-6 w-6" />
                اكتشف الميزات
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Khalak Fakhem Agency Section */}
      <section id="why-join-us" className="py-16 sm:py-24 bg-slate-800/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              لماذا تختار وكالة خلك فخم على Kiti؟
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              نحن لا نقدم لك منصة للبث فقط، بل نقدم لك شراكة حقيقية نحو النجاح والتميز.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "عمولات هي الأعلى",
                description:
                  "احصل على نسبة عمولة تصل إلى <strong>180%</strong> على دخل الهدايا. وكالتنا تضمن لك أفضل العوائد.",
                gradient: "from-purple-500 to-pink-500",
                borderColor: "border-purple-500",
              },
              {
                icon: Clock,
                title: "مكافآت ساعة مغرية",
                description: "للمذيعين المختارين، مكافأة تصل إلى <strong>5$ بالساعة</strong> (4$ لك + 1$ للوكالة).",
                gradient: "from-green-500 to-teal-500",
                borderColor: "border-green-500",
              },
              {
                icon: Briefcase,
                title: "دعم وتوجيه كامل",
                description: "فريقنا متخصص لمساعدتك في كل خطوة، من الأوديشن إلى تحقيق النجومية.",
                gradient: "from-sky-500 to-indigo-500",
                borderColor: "border-sky-500",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-slate-700/40 ${item.borderColor}/30 hover:${item.borderColor} transition-all duration-300 rounded-xl shadow-xl hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1`}
              >
                <CardHeader className="items-center text-center">
                  <div className={`p-4 bg-gradient-to-br ${item.gradient} rounded-full inline-block mb-4 shadow-lg`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-300 text-md" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Breakdown Section */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
              كيف تحقق الأرباح معنا؟
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">نظام شفاف ومكافآت متنوعة تزيد من دخلك بشكل كبير.</p>
          </div>

          {/* Commission Tiers */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-10 text-white flex items-center justify-center gap-3 tracking-tight">
              <BarChart className="h-8 w-8 text-purple-400" /> عمولات المذيعين على دخل الهدايا
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "VIP",
                  rate: "180%",
                  points: "50,000",
                  reward: "90,000",
                  total: "140,000",
                  usd: "28",
                  color: "yellow",
                  icon: Star,
                },
                {
                  title: "العادي",
                  rate: "160%",
                  points: "50,000",
                  reward: "80,000",
                  total: "130,000",
                  usd: "26",
                  color: "purple",
                  icon: Award,
                },
                {
                  title: "المبتدئ",
                  rate: "120%",
                  points: "50,000",
                  reward: "60,000",
                  total: "110,000",
                  usd: "22",
                  color: "blue",
                  icon: Users,
                },
              ].map((tier) => (
                <Card
                  key={tier.title}
                  className={`bg-slate-800/70 border-2 border-${tier.color}-500/50 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-${tier.color}-500/30 transition-all duration-300`}
                >
                  <CardHeader
                    className={`text-center bg-gradient-to-br from-${tier.color}-600/40 to-${tier.color}-700/50 p-6`}
                  >
                    <Badge
                      variant="secondary"
                      className={`mx-auto w-fit bg-${tier.color}-500 text-${tier.color}-foreground px-4 py-1.5 rounded-full text-sm font-semibold border border-${tier.color}-400`}
                    >
                      {tier.title}
                    </Badge>
                    <CardTitle
                      className={`text-4xl mt-4 font-bold text-${tier.color}-300 flex items-center justify-center gap-2`}
                    >
                      {" "}
                      <tier.icon className={`h-7 w-7 text-${tier.color}-400`} /> {tier.rate}
                    </CardTitle>
                    <CardDescription className={`text-${tier.color}-400 mt-1`}>عمولة على دخل الهدايا</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <div className={`bg-slate-700/50 p-4 rounded-lg border border-${tier.color}-600/50`}>
                      <p className="text-sm font-medium text-slate-300">مثال توضيحي:</p>
                      <p className="text-xs text-slate-400 mt-1">
                        هدية {tier.points} نقطة = {tier.reward} نقطة مكافأة ({tier.rate})
                        <br />
                        الإجمالي: {tier.total} نقطة ≈ {tier.usd}$
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-slate-500 mt-8">
              * لا يوجد تارجت ساعات، ولكن يجب على المذيع تحقيق دخل هدايا. يتم الحساب أسبوعياً (الخميس إلى الأربعاء).
            </p>
          </div>

          {/* Hourly System & Star Host */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mt-16">
            {/* Hourly System */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center text-white flex items-center justify-center gap-3 tracking-tight">
                <Clock className="h-8 w-8 text-green-400" /> نظام المكافآت بالساعة
              </h3>
              <Card className="bg-slate-800/70 border-2 border-green-500/50 shadow-xl rounded-xl overflow-hidden transform hover:shadow-green-500/20 transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-br from-green-600/40 to-green-700/50 p-6">
                  <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-green-300">
                    للمذيعين المختارين
                  </CardTitle>
                  <CardDescription className="text-green-400 mt-1">
                    حصريًا للمذيعات الناطقات بالعربية اللاتي اجتزن الأوديشن بنجاح عبر وكالتنا.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
                    {[
                      { amount: "4$", recipient: "للمذيع/ة", color: "blue", icon: DollarSign },
                      { amount: "1$", recipient: "للوكالة", color: "purple", icon: Users },
                      { amount: "5$", recipient: "المجموع", color: "green", icon: Trophy },
                    ].map((item) => (
                      <div
                        key={item.recipient}
                        className={`bg-slate-700/60 p-4 rounded-lg border-2 border-${item.color}-500/70 shadow-md hover:bg-slate-700/80 transition-all`}
                      >
                        <item.icon className={`h-8 w-8 text-${item.color}-400 mx-auto mb-2`} />
                        <h4 className={`font-bold text-xl text-${item.color}-300`}>{item.amount}</h4>
                        <p className="text-xs text-slate-400">{item.recipient}</p>
                      </div>
                    ))}
                  </div>
                  <h5 className="font-semibold text-lg text-slate-200 mb-3">الشروط:</h5>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {[
                      "بث مباشر ساعة واحدة يومياً كحد أدنى.",
                      "15$ (3 ساعات) كحد أقصى للمكافأة يومياً.",
                      "تفاعل فعال مع المستخدمين.",
                    ].map((condition) => (
                      <li key={condition} className="flex items-start gap-2.5">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" /> {condition}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/70 border-2 border-indigo-500/50 shadow-xl rounded-xl overflow-hidden transform hover:shadow-indigo-500/20 transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-br from-indigo-600/40 to-indigo-700/50 p-6">
                  <CardTitle className="text-xl lg:text-2xl font-bold text-indigo-300">
                    كيف تصبح مذيعاً مختاراً معنا؟
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <h5 className="font-semibold text-lg text-slate-200 mb-3">متطلبات الأوديشن:</h5>
                  <ul className="space-y-2 text-sm text-slate-300 mb-4">
                    {["مظهر أنيق وجذاب، ملابس مناسبة.", "فيديو لا يقل عن 30 ثانية، كاميرا عالية الجودة."].map((req) => (
                      <li key={req} className="flex items-start gap-2">
                        <Sparkles className="inline h-4 w-4 mr-1 text-indigo-400 mt-0.5 shrink-0" /> {req}
                      </li>
                    ))}
                  </ul>
                  <h5 className="font-semibold text-lg text-slate-200 mb-3">العملية:</h5>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "انضم لوكالة خلك فخم.",
                      "أرسل فيديو تجريبي بمساعدتنا.",
                      "اجتياز اختبار الأداء (3 محاولات أسبوعياً).",
                    ].map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <CheckCircle className="inline h-4 w-4 mr-1 text-green-400 mt-0.5 shrink-0" /> {step}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Star Host */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center text-white flex items-center justify-center gap-3 tracking-tight">
                <Star className="h-8 w-8 text-yellow-400" /> ترتيب نجوم Kiti "ستار هوست"
              </h3>
              <Card className="bg-gradient-to-br from-yellow-600/40 via-orange-600/40 to-red-600/40 border-2 border-yellow-500/60 text-white shadow-xl rounded-xl overflow-hidden transform hover:shadow-yellow-500/30 transition-shadow duration-300">
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-yellow-300">
                    لأفضل 20 مذيع أسبوعياً
                  </CardTitle>
                  <CardDescription className="text-yellow-400 mt-1">
                    مكافآت إضافية بالساعة بناءً على ترتيبك في لوحة المتصدرين.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    {
                      rank: "المركز الأول",
                      rate: "50$",
                      host_share: "40$",
                      agency_share: "10$",
                      icon: Trophy,
                      color: "yellow",
                    },
                    {
                      rank: "المراكز 2-10",
                      rate: "20$",
                      host_share: "16$",
                      agency_share: "4$",
                      icon: Award,
                      color: "slate",
                    },
                    {
                      rank: "المراكز 11-20",
                      rate: "10$",
                      host_share: "8$",
                      agency_share: "2$",
                      icon: Star,
                      color: "orange",
                    },
                  ].map((item) => (
                    <div
                      key={item.rank}
                      className={`bg-slate-700/60 p-4 rounded-lg border-2 border-${item.color}-500/70 shadow-md text-center hover:bg-slate-700/80 transition-all`}
                    >
                      <item.icon className={`h-10 w-10 text-${item.color}-400 mx-auto mb-2`} />
                      <h4 className={`font-semibold text-lg text-${item.color}-300`}>{item.rank}</h4>
                      <div className={`text-2xl font-bold text-white my-1`}>
                        {item.rate} <span className="text-sm font-normal">/ ساعة</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        ({item.host_share}$ للمذيع + {item.agency_share}$ للوكالة)
                      </p>
                    </div>
                  ))}
                  <p className="text-center text-xs text-slate-500 mt-4">
                    * يُطبق الراتب بين ساعة واحدة كحد أدنى و 3 ساعات كحد أقصى في اليوم.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/70 border-2 border-sky-500/50 shadow-xl rounded-xl overflow-hidden transform hover:shadow-sky-500/20 transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-br from-sky-600/40 to-sky-700/50 p-6">
                  <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl font-bold text-sky-300">
                    <Users className="h-7 w-7" />
                    ميزات النجوم الداعمين للوكالة
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <p className="text-sm text-slate-300">
                    إذا كان لديك داعمين أقوياء، يمكن لوكالتك الاستفادة أيضاً! أفضل 10 داعمين أسبوعياً يمكنهم منح وكالتك
                    راتباً إضافياً.
                  </p>
                  <div className="bg-slate-700/60 p-4 rounded-lg border-2 border-sky-600/70">
                    <p className="font-semibold text-sky-300">
                      <DollarSign className="inline h-5 w-5 mr-1" />
                      راتب إضافي للوكالة: <strong className="text-lg">2$</strong> في الساعة من كل نجم داعم ضمن أفضل 10.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User Invitation Rewards Section */}
      <section className="py-16 sm:py-24 bg-slate-800/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white shadow-2xl rounded-xl overflow-hidden">
            <CardHeader className="text-center p-8 md:p-12">
              <UserPlus className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-6 opacity-80" />
              <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold">مكافآت دعوة المستخدمين الجدد</CardTitle>
              <CardDescription className="text-lg text-blue-200 mt-3 max-w-xl mx-auto">
                ساعدنا في تنمية مجتمع Kiti واحصل على مكافآت رائعة!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 bg-white/5 dark:bg-black/10 backdrop-blur-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 text-center">
                {[
                  { icon: DollarSign, value: "1$", text: "لكل تحميل وتثبيت جديد.", color: "green" },
                  { icon: TrendingUp, value: "600$", text: "مكافأة شهرية قصوى.", color: "yellow" },
                  { icon: Target, value: "20 مستخدم/يوم", text: "حد الدعوات اليومي للمذيع.", color: "red" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className={`bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition-colors duration-300 transform hover:-translate-y-1`}
                  >
                    <item.icon className={`h-10 w-10 text-${item.color}-300 mx-auto mb-3`} />
                    <h3 className="font-bold text-2xl text-white">{item.value}</h3>
                    <p className="text-sm text-slate-300 opacity-90">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-black/20 p-6 rounded-lg shadow-inner space-y-4">
                <h4 className="font-semibold text-xl text-slate-100 mb-3 text-center">تفاصيل إضافية:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-black/30 p-4 rounded-md hover:bg-black/40 transition-colors">
                    <h5 className="font-medium mb-1 text-lg flex items-center gap-2 text-pink-300">
                      <Gift className="h-5 w-5" /> مكافأة التسجيل:
                    </h5>
                    <p className="text-slate-300 opacity-90">500 عملة للداعي + 500 عملة للوكالة/المضيف.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-md hover:bg-black/40 transition-colors">
                    <h5 className="font-medium mb-1 text-lg flex items-center gap-2 text-green-300">
                      <DollarSign className="h-5 w-5" /> مكافأة أول شحن:
                    </h5>
                    <p className="text-slate-300 opacity-90">500 عملة إضافية للداعي عند أول شحن للمدعو (خلال 72س).</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="join-us" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo-new.png"
            alt="شعار وكالة خلك فخم"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-6 shadow-lg border-2 border-purple-500/50"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">جاهز لتصبح نجم Kiti مع وكالة خلك فخم؟</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            لا تفوت الفرصة! انضم إلينا اليوم وابدأ رحلتك نحو الشهرة والنجاح. فريقنا في انتظارك لتقديم كل الدعم الذي
            تحتاجه.
          </p>
          <Button
            size="xl"
            className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg px-12 py-4 text-lg"
            asChild
          >
            <Link href="/contact?agency=khalak_fakhem">
              <ThumbsUp className="mr-3 h-6 w-6" />
              قدم طلب الانضمام الآن
            </Link>
          </Button>
          <p className="text-sm text-slate-500 mt-6">
            أو تواصل معنا عبر{" "}
            <Link href="/contact" className="text-purple-400 hover:underline hover:text-purple-300 transition-colors">
              صفحة التواصل
            </Link>{" "}
            لـ "وكالة خلك فخم".
          </p>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} وكالة خلك فخم. جميع الحقوق محفوظة.
            <br />
            بالشراكة مع منصة Kiti.
          </p>
        </div>
      </footer>
    </div>
  )
}
