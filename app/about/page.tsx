import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Shield, Headphones, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "من نحن | نظام إدارة الوكالات",
  description: "تعرف على نظام إدارة الوكالات وفريقنا ورؤيتنا",
}

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">من نحن</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          تعرف على وكالة خلك فخم، رؤيتنا، قيمنا، وفريقنا المتميز
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <Badge className="mb-2">قصتنا</Badge>
          <h2 className="text-2xl font-bold mb-4">نظام إدارة الوكالات</h2>
          <p className="text-muted-foreground mb-4">
            تأسس نظام إدارة الوكالات بهدف توفير خدمات متكاملة في مجال البث المباشر وإدارة المذيعين. نسعى لتمكين المذيعين
            العرب وتوفير بيئة عمل احترافية ومربحة لهم.
          </p>
          <p className="text-muted-foreground mb-4">
            نقدم مجموعة متنوعة من الخدمات التي تشمل توظيف العاملين في مجال البث المباشر، شحن اللماس لجميع البرامج، إدارة
            العمليات المالية، تنسيق وإرسال الرواتب، والإشراف والتدريب للمضيفين.
          </p>
          <p className="text-muted-foreground">
            نتميز بخبرة لا تقل عن 5 سنوات في مجال البث المباشر، مما يجعلنا الخيار الأمثل للمذيعين الطامحين للنجاح
            والتميز في هذا المجال.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/logo-new.png"
            alt="نظام إدارة الوكالات"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-10">
          <Badge className="mb-2">رؤيتنا وقيمنا</Badge>
          <h2 className="text-2xl font-bold mb-4">ما يميزنا</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نسعى لتكون وكالة خلك فخم الرائدة في مجال إدارة المذيعين والبث المباشر في العالم العربي، من خلال تقديم خدمات
            متميزة وحلول مبتكرة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Users className="h-8 w-8 text-primary" />
              <CardTitle>فريق محترف</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                فريق من الخبراء المتخصصين في مجال البث المباشر وإدارة المذيعين، مع خبرة تزيد عن 5 سنوات.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Award className="h-8 w-8 text-primary" />
              <CardTitle>جودة الخدمة</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                نلتزم بتقديم أعلى مستويات الجودة في جميع خدماتنا، مع التركيز على رضا العملاء وتحقيق أهدافهم.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Shield className="h-8 w-8 text-primary" />
              <CardTitle>الأمان والموثوقية</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                نضمن أعلى مستويات الأمان والموثوقية في جميع المعاملات المالية والبيانات الشخصية لعملائنا.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Headphones className="h-8 w-8 text-primary" />
              <CardTitle>دعم متواصل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                فريق دعم متاح على مدار الساعة لتقديم المساعدة والإجابة على جميع الاستفسارات وحل المشكلات.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Clock className="h-8 w-8 text-primary" />
              <CardTitle>الالتزام بالمواعيد</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                نلتزم بجميع المواعيد المحددة لدفع الرواتب والمستحقات المالية، مما يعزز الثقة بيننا وبين عملائنا.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Globe className="h-8 w-8 text-primary" />
              <CardTitle>تغطية عالمية</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                نقدم خدماتنا للمذيعين من جميع أنحاء العالم العربي، مع دعم متعدد اللغات وخدمات مالية عالمية.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-10">
          <Badge className="mb-2">فريقنا</Badge>
          <h2 className="text-2xl font-bold mb-4">فريق العمل</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            يضم فريق وكالة خلك فخم نخبة من الخبراء والمتخصصين في مجالات متنوعة، يعملون معًا لتقديم أفضل الخدمات لعملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=عضو الفريق ${i}`}
                  alt={`عضو الفريق ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">اسم عضو الفريق</CardTitle>
                <CardDescription>المنصب الوظيفي</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="text-center mb-10">
          <Badge className="mb-2">شركاؤنا</Badge>
          <h2 className="text-2xl font-bold mb-4">شركاء النجاح</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نفتخر بشراكاتنا مع أفضل المنصات والشركات في مجال البث المباشر والتكنولوجيا.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-muted rounded-lg h-24">
              <Image
                src={`/placeholder.svg?height=60&width=120&text=شريك ${i}`}
                alt={`شريك ${i}`}
                width={120}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
