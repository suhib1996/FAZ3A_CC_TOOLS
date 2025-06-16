import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Users, Award, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "المسابقات | نظام إدارة الوكالات",
  description: "المسابقات والتحديات المقدمة من نظام إدارة الوكالات",
}

export default function CompetitionsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">المسابقات والتحديات</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          نقدم مجموعة متنوعة من المسابقات والتحديات لتحفيز المذيعين وزيادة التفاعل. شارك في المسابقات واربح جوائز قيمة.
        </p>
      </div>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="current">المسابقات الحالية</TabsTrigger>
          <TabsTrigger value="upcoming">المسابقات القادمة</TabsTrigger>
          <TabsTrigger value="previous">المسابقات السابقة</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=500&text=تحدي+المشاهدات"
                  alt="تحدي المشاهدات"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge className="bg-primary text-primary-foreground">جاري الآن</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    تحدي المشاهدات
                  </CardTitle>
                  <Badge variant="outline" className="font-normal">
                    Super Live
                  </Badge>
                </div>
                <CardDescription>حقق أكبر عدد من المشاهدات واربح جوائز قيمة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1 - 15 يونيو 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">42 مشارك</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">الجائزة الأولى: 500$</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">متبقي: 5 أيام</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  المشاركة الآن
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=500&text=تحدي+الإيرادات"
                  alt="تحدي الإيرادات"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge className="bg-primary text-primary-foreground">جاري الآن</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    تحدي الإيرادات
                  </CardTitle>
                  <Badge variant="outline" className="font-normal">
                    جميع المنصات
                  </Badge>
                </div>
                <CardDescription>حقق أعلى إيرادات واربح مكافآت نقدية وترقية عضوية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1 - 30 يونيو 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">78 مشارك</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">الجائزة الأولى: 1000$ + ترقية عضوية</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">متبقي: 20 يوم</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  المشاركة الآن
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=500&text=تحدي+المحتوى+الإبداعي"
                  alt="تحدي المحتوى الإبداعي"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge variant="secondary">قريبًا</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    تحدي المحتوى الإبداعي
                  </CardTitle>
                  <Badge variant="outline" className="font-normal">
                    Popo Live
                  </Badge>
                </div>
                <CardDescription>قدم محتوى إبداعي مميز واربح جوائز حصرية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1 - 15 يوليو 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">الجائزة الأولى: 300$ + شارة مميزة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">يبدأ بعد: 15 يوم</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  تذكيري عند البدء
                  <Calendar className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=500&text=مسابقة+أفضل+مذيع"
                  alt="مسابقة أفضل مذيع"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge variant="secondary">قريبًا</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    مسابقة أفضل مذيع
                  </CardTitle>
                  <Badge variant="outline" className="font-normal">
                    Party Star
                  </Badge>
                </div>
                <CardDescription>تنافس للفوز بلقب أفضل مذيع للشهر</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">1 - 31 يوليو 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">الجائزة: 500$ + شارة أفضل مذيع + ترقية عضوية</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">يبدأ بعد: 20 يوم</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  تذكيري عند البدء
                  <Calendar className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="previous">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=200&width=500&text=مسابقة+الربيع"
                  alt="مسابقة الربيع"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge variant="outline" className="bg-background/80">
                    منتهية
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">مسابقة الربيع</CardTitle>
                  <Badge variant="outline" className="font-normal text-xs">
                    Super Live
                  </Badge>
                </div>
                <CardDescription className="text-xs">مارس 2023</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">الفائز: أحمد محمد</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=200&width=500&text=تحدي+الساعات"
                  alt="تحدي الساعات"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge variant="outline" className="bg-background/80">
                    منتهية
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">تحدي الساعات</CardTitle>
                  <Badge variant="outline" className="font-normal text-xs">
                    Popo Live
                  </Badge>
                </div>
                <CardDescription className="text-xs">أبريل 2023</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">الفائز: سارة أحمد</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=200&width=500&text=مسابقة+المواهب"
                  alt="مسابقة المواهب"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Badge variant="outline" className="bg-background/80">
                    منتهية
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">مسابقة المواهب</CardTitle>
                  <Badge variant="outline" className="font-normal text-xs">
                    Party Star
                  </Badge>
                </div>
                <CardDescription className="text-xs">مايو 2023</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">الفائز: محمد علي</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">عرض المزيد من المسابقات السابقة</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-muted rounded-lg p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">كيفية المشاركة في المسابقات</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium">التسجيل في المسابقة</h3>
                  <p className="text-sm text-muted-foreground">
                    قم بالتسجيل في المسابقة التي ترغب بالمشاركة فيها من خلال الضغط على زر "المشاركة الآن".
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium">قراءة الشروط والأحكام</h3>
                  <p className="text-sm text-muted-foreground">
                    اطلع على شروط وأحكام المسابقة بعناية وتأكد من فهمك لجميع القواعد والمتطلبات.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium">المشاركة والتفاعل</h3>
                  <p className="text-sm text-muted-foreground">
                    شارك في المسابقة وفقًا للمتطلبات المحددة، سواء كانت زيادة عدد المشاهدات، تحقيق إيرادات، أو تقديم
                    محتوى إبداعي.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-medium">متابعة النتائج</h3>
                  <p className="text-sm text-muted-foreground">
                    تابع نتائجك ومركزك في المسابقة من خلال لوحة التحكم الخاصة بك، وستتلقى إشعارًا في حال فوزك.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline">للاستفسارات، تواصل معنا</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=300&width=500&text=المسابقات+والتحديات"
              alt="المسابقات والتحديات"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
