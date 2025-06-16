import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, BarChart, Users, Lightbulb, MessageSquare, LineChart, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "المساعد الذكي | نظام إدارة الوكالات",
  description: "تعرف على المساعد الذكي وقدراته في تحليل البيانات وتقديم التوصيات",
}

export default function AIAssistantPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">المساعد الذكي</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          نظام ذكاء اصطناعي متقدم لتحليل البيانات وتقديم التوصيات وتحسين أداء المذيعين
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">قوة الذكاء الاصطناعي في خدمتك</h2>
          <p className="text-muted-foreground mb-4">
            يعمل المساعد الذكي على تحليل البيانات وتقديم رؤى قيمة لمساعدتك في تحسين أدائك وزيادة إيراداتك. يستخدم النظام
            تقنيات متقدمة في الذكاء الاصطناعي ومعالجة اللغة الطبيعية لفهم احتياجاتك وتقديم الدعم المناسب.
          </p>
          <p className="text-muted-foreground mb-4">
            سواء كنت مذيعًا جديدًا تبحث عن إرشادات للبدء، أو مذيعًا محترفًا تسعى لتحسين أدائك، أو وكيلًا يدير مجموعة من
            المذيعين، فإن المساعد الذكي يوفر لك الأدوات والتحليلات التي تحتاجها لاتخاذ قرارات مدروسة.
          </p>
          <div className="flex gap-4 mt-6">
            <Button className="gap-2">
              <Bot className="h-4 w-4" />
              تحدث مع المساعد الآن
            </Button>
            <Link href="/contact">
              <Button variant="outline">طلب المساعدة</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=400&text=AI Assistant"
            alt="المساعد الذكي"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <Tabs defaultValue="features" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="features">الميزات الرئيسية</TabsTrigger>
          <TabsTrigger value="analytics">التحليلات والتقارير</TabsTrigger>
          <TabsTrigger value="recommendations">التوصيات الذكية</TabsTrigger>
        </TabsList>

        <TabsContent value="features">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  تقارير أداء تلقائية
                </CardTitle>
                <CardDescription>تحليل شامل لأدائك وإيراداتك</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  يقوم النظام بتوليد تقارير أداء تلقائية تعرض مؤشرات الأداء الرئيسية، مثل عدد المشاهدين، وقت المشاهدة،
                  الإيرادات، ومعدل التفاعل، مع مقارنات بالفترات السابقة وتحليل الاتجاهات.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  تحليل تفضيلات الجمهور
                </CardTitle>
                <CardDescription>فهم عميق لاهتمامات المشاهدين</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  يحلل النظام سلوك المشاهدين وتفاعلاتهم لتحديد اهتماماتهم وتفضيلاتهم، مما يساعدك على فهم جمهورك بشكل
                  أفضل وتقديم محتوى يلبي احتياجاتهم ويزيد من تفاعلهم.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  توصيات محتوى ذكية
                </CardTitle>
                <CardDescription>اقتراحات مخصصة لتحسين المحتوى</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  بناءً على تحليل الأداء وتفضيلات الجمهور، يقدم النظام توصيات ذكية حول نوع المحتوى الذي يجب التركيز عليه،
                  وأفضل الأوقات للبث، والمواضيع التي تحظى باهتمام أكبر من الجمهور.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  دعم فوري على مدار الساعة
                </CardTitle>
                <CardDescription>مساعدة فورية لجميع استفساراتك</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  يوفر المساعد الذكي دعمًا فوريًا على مدار الساعة للإجابة على استفساراتك حول المنصات، الخدمات المالية،
                  نظام الشارات والمسابقات، وأي مشكلات تقنية قد تواجهها أثناء البث.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  تنبؤات مستقبلية
                </CardTitle>
                <CardDescription>توقعات ذكية للأداء المستقبلي</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  باستخدام نماذج التعلم الآلي، يقدم النظام تنبؤات حول الأداء المستقبلي بناءً على البيانات التاريخية
                  والاتجاهات الحالية، مما يساعدك على التخطيط المسبق وتحديد الأهداف الواقعية.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  استراتيجيات النمو
                </CardTitle>
                <CardDescription>خطط مخصصة لتنمية قاعدة المشاهدين</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  يقدم النظام استراتيجيات وخطط عمل مخصصة لمساعدتك على زيادة عدد المشاهدين وتحسين معدلات الاحتفاظ بهم، مع
                  تحديد الإجراءات الملموسة التي يمكنك اتخاذها لتحقيق أهدافك.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>تحليل الأداء الشامل</CardTitle>
                <CardDescription>رؤية متكاملة لأدائك على جميع المنصات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Performance Dashboard"
                    alt="لوحة تحكم الأداء"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  يوفر النظام لوحة تحكم شاملة تعرض مؤشرات الأداء الرئيسية على جميع المنصات، مع إمكانية تصفية البيانات
                  حسب الفترة الزمنية، المنصة، أو نوع المحتوى. يمكنك مراقبة التغيرات في الأداء وتحديد الاتجاهات والأنماط.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  عرض لوحة التحكم
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تقارير مخصصة</CardTitle>
                <CardDescription>تقارير مفصلة حسب احتياجاتك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Custom Reports"
                    alt="تقارير مخصصة"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  يمكنك إنشاء تقارير مخصصة تركز على الجوانب التي تهمك، مثل تحليل الإيرادات، سلوك المشاهدين، أو فعالية
                  المحتوى. يمكن جدولة هذه التقارير لإرسالها بشكل دوري عبر البريد الإلكتروني أو تصديرها بتنسيقات مختلفة.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  إنشاء تقرير مخصص
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تحليل الجمهور</CardTitle>
                <CardDescription>فهم عميق لقاعدة المشاهدين</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Audience Analysis"
                    alt="تحليل الجمهور"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  يقدم النظام تحليلاً تفصيلياً لقاعدة المشاهدين، بما في ذلك التركيبة الديموغرافية، الاهتمامات، أوقات
                  النشاط، ومستويات التفاعل. يساعدك هذا التحليل على فهم جمهورك بشكل أفضل وتخصيص المحتوى وفقاً لاحتياجاتهم.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  عرض تحليل الجمهور
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>مقارنة الأداء</CardTitle>
                <CardDescription>مقارنة أدائك مع المعايير القياسية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Performance Comparison"
                    alt="مقارنة الأداء"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  يمكنك مقارنة أدائك مع المعايير القياسية في الصناعة أو مع أدائك السابق. يوفر النظام مقارنات مفصلة
                  للمؤشرات الرئيسية مثل معدل النمو، الإيرادات، وقت المشاهدة، ومعدل التفاعل، مما يساعدك على تحديد مجالات
                  التحسين.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  عرض المقارنات
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>توصيات المحتوى</CardTitle>
                <CardDescription>اقتراحات ذكية لتحسين المحتوى</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Content Recommendations"
                    alt="توصيات المحتوى"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  بناءً على تحليل أداء المحتوى السابق وتفضيلات الجمهور، يقدم النظام توصيات مخصصة حول أنواع المحتوى التي
                  يجب التركيز عليها، والمواضيع التي تحظى باهتمام أكبر، وكيفية تحسين جودة المحتوى لزيادة التفاعل.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  عرض التوصيات
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>أوقات البث المثالية</CardTitle>
                <CardDescription>تحديد أفضل الأوقات للبث المباشر</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Optimal Broadcast Times"
                    alt="أوقات البث المثالية"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  يحلل النظام أنماط نشاط المشاهدين ويحدد أفضل الأوقات للبث المباشر لتحقيق أقصى قدر من المشاهدات
                  والتفاعل. يمكنك الاطلاع على جدول زمني مقترح للبث يتناسب مع جدولك الشخصي وتفضيلات جمهورك.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  عرض الجدول المقترح
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>استراتيجيات النمو</CardTitle>
                <CardDescription>خطط مخصصة لتنمية قاعدة المشاهدين</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Growth Strategies"
                    alt="استراتيجيات النمو"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  يقدم النظام استراتيجيات وخطط عمل مخصصة لمساعدتك على زيادة عدد المشاهدين وتحسين معدلات الاحتفاظ بهم.
                  تشمل هذه الاستراتيجيات تقنيات جذب مشاهدين جدد، تحسين التفاعل، وبناء مجتمع نشط حول قناتك.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  عرض الاستراتيجيات
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>تحسين الأداء</CardTitle>
                <CardDescription>نصائح مخصصة لتحسين أدائك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Performance Optimization"
                    alt="تحسين الأداء"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  بناءً على تحليل أدائك الحالي، يقدم النظام نصائح وتوصيات مخصصة لتحسين مهاراتك في البث المباشر، تطوير
                  أسلوبك الشخصي، وزيادة جاذبيتك للجمهور. تشمل هذه النصائح جوانب مثل التفاعل مع المشاهدين، تقنيات العرض،
                  وإدارة البث.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  عرض النصائح
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">ابدأ استخدام المساعد الذكي اليوم</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          استفد من قوة الذكاء الاصطناعي لتحليل أدائك وتحسين محتواك وزيادة إيراداتك. المساعد الذكي متاح لجميع أعضاء
          الوكالة بدون تكلفة إضافية.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Bot className="h-4 w-4" />
            تحدث مع المساعد الآن
          </Button>
          <Link href="/auth/register">
            <Button variant="outline" size="lg">
              انضم إلى الوكالة
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
