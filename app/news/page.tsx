import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "الأخبار | نظام إدارة الوكالات",
  description: "آخر الأخبار والتحديثات من نظام إدارة الوكالات",
}

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "خصم 20% على جميع خدمات الشحن",
      description: "استفد من خصم 20% على جميع خدمات شحن الألماس لجميع المنصات. العرض ساري حتى نهاية الشهر الحالي.",
      image: "/placeholder.svg?height=200&width=400&text=خصم+20%",
      date: "30 مارس 2025",
      category: "إعلان",
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "تحديث نظام الشارات والمكافآت",
      description: "تم تحديث نظام الشارات والمكافآت ليشمل المزيد من الميزات والمكافآت للمذيعين المتميزين.",
      image: "/placeholder.svg?height=200&width=400&text=تحديث+النظام",
      date: "28 مارس 2025",
      category: "تحديث",
      views: 890,
      featured: true,
    },
    {
      id: 3,
      title: "إضافة منصة جديدة قريباً",
      description: "نعمل على إضافة منصة جديدة إلى قائمة المنصات المدعومة. ترقبوا المزيد من التفاصيل قريباً.",
      image: "/placeholder.svg?height=200&width=400&text=منصة+جديدة",
      date: "25 مارس 2025",
      category: "منصات",
      views: 654,
      featured: false,
    },
    {
      id: 4,
      title: "ورشة تدريبية للمذيعين الجدد",
      description: "انضم إلى ورشة التدريب المجانية للمذيعين الجدد وتعلم أساسيات البث المباشر الناجح.",
      image: "/placeholder.svg?height=200&width=400&text=ورشة+تدريبية",
      date: "22 مارس 2025",
      category: "تدريب",
      views: 432,
      featured: false,
    },
    {
      id: 5,
      title: "نتائج مسابقة مارس",
      description: "تم الإعلان عن نتائج مسابقة شهر مارس. تهانينا للفائزين وشكراً لجميع المشاركين.",
      image: "/placeholder.svg?height=200&width=400&text=نتائج+المسابقة",
      date: "20 مارس 2025",
      category: "مسابقات",
      views: 789,
      featured: false,
    },
    {
      id: 6,
      title: "تحسينات على واجهة المستخدم",
      description: "تم إجراء تحسينات على واجهة المستخدم لتوفير تجربة أفضل وأكثر سهولة في الاستخدام.",
      image: "/placeholder.svg?height=200&width=400&text=تحسينات+الواجهة",
      date: "18 مارس 2025",
      category: "تحديث",
      views: 567,
      featured: false,
    },
  ]

  const featuredNews = news.filter((item) => item.featured)
  const regularNews = news.filter((item) => !item.featured)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "إعلان":
        return "bg-blue-500"
      case "تحديث":
        return "bg-green-500"
      case "منصات":
        return "bg-purple-500"
      case "تدريب":
        return "bg-orange-500"
      case "مسابقات":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">الأخبار والتحديثات</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          تابع آخر الأخبار والتحديثات والإعلانات من نظام إدارة الوكالات
        </p>
      </div>

      {/* Featured News */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">الأخبار المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredNews.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-3">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{item.views} مشاهدة</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  قراءة المزيد
                  <ArrowRight className="h-4 w-4 rtl-flip" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Regular News */}
      <div>
        <h2 className="text-2xl font-bold mb-6">جميع الأخبار</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regularNews.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-40">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge className={getCategoryColor(item.category)} size="sm">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{item.views}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  قراءة المزيد
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">اشترك في النشرة الإخبارية</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-grow px-4 py-2 rounded-md border-0 text-foreground"
            />
            <Button variant="secondary">اشتراك</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
