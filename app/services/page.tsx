import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Users, DollarSign, Award, Headphones, Bot, Shield, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "خدماتنا | نظام إدارة الوكالات",
  description: "تعرف على الخدمات المتكاملة التي يقدمها نظام إدارة الوكالات",
}

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">خدماتنا</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          نقدم مجموعة متكاملة من الخدمات المصممة خصيصًا لتلبية احتياجات المذيعين والوكلاء في عالم البث المباشر
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <Badge className="mb-2">خدماتنا الرئيسية</Badge>
          <h2 className="text-2xl font-bold mb-4">حلول متكاملة للبث المباشر</h2>
          <p className="text-muted-foreground mb-4">
            في نظام إدارة الوكالات، نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب البث المباشر وإدارة المذيعين. نهدف
            إلى توفير بيئة عمل احترافية ومربحة للمذيعين، مع ضمان أعلى مستويات الجودة والأمان.
          </p>
          <p className="text-muted-foreground mb-4">
            تشمل خدماتنا توظيف العاملين في مجال البث المباشر، شحن اللماس لجميع البرامج، إدارة العمليات المالية، تنسيق
            وإرسال الرواتب، والإشراف والتدريب للمضيفين.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="/contact">
              <Button className="gap-2">
                تواصل معنا
                <ArrowRight className="h-4 w-4 rtl-flip" />
              </Button>
            </Link>
            <Link href="/platforms">
              <Button variant="outline">استكشف المنصات</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="خدمات وكالة خلك فخم"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-10">
          <Badge className="mb-2">خدماتنا المتخصصة</Badge>
          <h2 className="text-2xl font-bold mb-4">ما نقدمه لك</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من الخدمات المتخصصة التي تلبي احتياجات المذيعين والوكلاء في مختلف المجالات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                توظيف المذيعين
              </CardTitle>
              <CardDescription>خدمات توظيف وتدريب المذيعين المحترفين</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                نساعدك في العثور على أفضل المذيعين المحترفين للعمل على منصات البث المباشر المختلفة، مع توفير التدريب
                اللازم لضمان أدائهم بأعلى مستوى.
              </p>
              <ul className="text-sm space-y-1 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>اختيار المذيعين المناسبين</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>تدريب شامل على منصات البث</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>متابعة مستمرة للأداء</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  طلب الخدمة
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                الخدمات المالية
              </CardTitle>
              <CardDescription>إدارة شاملة للعمليات المالية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                نوفر خدمات إدارة مالية شاملة تشمل السحب والإيداع وتحويل الأموال وتنسيق الرواتب، مع ضمان أعلى مستويات
                الأمان والسرية.
              </p>
              <ul className="text-sm space-y-1 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>سحب وإيداع الأموال</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>تحويل الأموال عالميًا</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>تنسيق وإرسال الرواتب</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  طلب الخدمة
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                نظام الشارات والمسابقات
              </CardTitle>
              <CardDescription>تحفيز المذيعين وزيادة التفاعل</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                نظام متكامل للشارات والمكافآت والمسابقات لتحفيز المذيعين وزيادة الإنتاجية والتفاعل، مع توفير جوائز قيمة
                للفائزين.
              </p>
              <ul className="text-sm space-y-1 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>شارات تقديرية متنوعة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>مسابقات شهرية وأسبوعية</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>جوائز نقدية وعينية</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  طلب الخدمة
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-primary" />
                الدعم الفني
              </CardTitle>
              <CardDescription>دعم فني متخصص على مدار الساعة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                فريق دعم فني متخصص متاح على مدار الساعة لحل جميع المشكلات التقنية التي قد تواجهها أثناء البث المباشر أو
                استخدام المنصات.
              </p>
              <ul className="text-sm space-y-1 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>دعم على مدار الساعة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>حل المشكلات التقنية</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>توجيه وإرشاد المذيعين</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  طلب الخدمة
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                الذكاء الاصطناعي
              </CardTitle>
              <CardDescription>حلول ذكية لتحسين تجربة البث</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                نوفر حلول ذكاء اصطناعي متقدمة لتحسين تجربة البث المباشر وزيادة التفاعل مع المشاهدين، مع تحليل البيانات
                لتحسين الأداء.
              </p>
              <ul className="text-sm space-y-1 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>تحليل بيانات المشاهدين</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>توصيات لتحسين المحتوى</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>دعم المحادثات الآلية</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  طلب الخدمة
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                تكامل المنصات
              </CardTitle>
              <CardDescription>دعم متكامل لمنصات البث المختلفة</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                نوفر دعمًا متكاملًا لمختلف منصات البث المباشر، مع إمكانية الربط بينها وإدارتها من خلال واجهة موحدة سهلة
                الاستخدام.
              </p>
              <ul className="text-sm space-y-1 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>دعم منصات متعددة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>واجهة إدارة موحدة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>تقارير أداء متكاملة</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full">
                  طلب الخدمة
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">لماذا تختار نظام إدارة الوكالات؟</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          نحن نجمع بين الخبرة الواسعة في مجال البث المباشر والالتزام بتقديم أعلى مستويات الجودة والاحترافية.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                خبرة واسعة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">سنوات من الخبرة في مجال البث المباشر وإدارة المذيعين.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                أمان وموثوقية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">نضمن أعلى مستويات الأمان والموثوقية في جميع خدماتنا.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-purple-500" />
                دعم فني متخصص
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                فريق دعم فني متخصص متاح على مدار الساعة لحل جميع المشكلات.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-orange-500" />
                حلول مبتكرة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">نقدم حلولًا مبتكرة ومخصصة لتلبية احتياجاتك الفريدة.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">ابدأ رحلتك مع نظام إدارة الوكالات اليوم</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          انضم إلى الآلاف من المذيعين الناجحين الذين يثقون بخدماتنا واستفد من خبرتنا الواسعة في مجال البث المباشر.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              تواصل معنا
              <ArrowRight className="h-4 w-4 rtl-flip" />
            </Button>
          </Link>
          <Link href="/platforms">
            <Button variant="outline" size="lg">
              استكشف المنصات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
