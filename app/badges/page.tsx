import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, CheckCircle, Star, Users, Clock, Trophy, Crown, Moon, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "الشارات التقديرية | نظام إدارة الوكالات",
  description: "شارات نظام إدارة الوكالات التقديرية للمذيعين المتميزين",
}

export default function BadgesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">نظام الشارات التقديرية</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          اكتسب شارات تقديرية فريدة تعكس إنجازاتك وتميزك في عالم البث المباشر
        </p>
      </div>

      <Tabs defaultValue="achievement" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="achievement">شارات الإنجاز</TabsTrigger>
          <TabsTrigger value="membership">شارات العضوية</TabsTrigger>
          <TabsTrigger value="special">شارات خاصة</TabsTrigger>
        </TabsList>

        <TabsContent value="achievement">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* شارة المذيع المتميز */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-20 w-20 text-amber-500" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-amber-500">شارة المذيع المتميز</CardTitle>
                <CardDescription className="text-center">
                  تُمنح للمذيعين الذين يقدمون أداءً استثنائيًا لفترة طويلة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول على الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>500+ ساعة بث مباشر</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>معدل تفاعل ≥ 90%</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تقييم إيجابي من المستخدمين</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">مميزات الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تخفيض 5% على عمولات السحب</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ظهور مميز في نتائج البحث</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارة ثلاثية الأبعاد في الملف الشخصي</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* شارة المحارب الليلي */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Moon className="h-20 w-20 text-indigo-500" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-indigo-500">شارة المحارب الليلي</CardTitle>
                <CardDescription className="text-center">تُمنح للمذيعين النشطين في فترات البث الليلية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول على الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>100+ ساعة بث ليلي (12 ص - 6 ص)</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>الالتزام بمواعيد البث الليلي</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تحقيق معدل مشاهدة جيد في الفترة الليلية</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">مميزات الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارة متحركة في الملف الشخصي</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مكافأة إضافية 10% على الإيرادات الليلية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>أولوية في الظهور في فترات الليل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* شارة معلم البث */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-20 w-20 text-green-500" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-green-500">شارة معلم البث</CardTitle>
                <CardDescription className="text-center">
                  تُمنح للمذيعين الذين يساهمون في تدريب وتوجيه المذيعين الجدد
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول على الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>خبرة لا تقل عن 6 أشهر في البث</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تدريب 5+ مذيعين جدد بنجاح</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مشاركة فع��لة في منتدى الوكالة</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">مميزات الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>عمولة 3% على إيرادات المتدربين</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>صلاحيات إضافية في منتدى الوكالة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>دعوات خاصة لورش العمل والفعاليات</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="membership">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* العضوية الذهبية */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Crown className="h-20 w-20 text-amber-500" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-amber-500">العضوية الذهبية</CardTitle>
                <CardDescription className="text-center">
                  عضوية متميزة للمذيعين ذوي الأداء المرتفع والمستمر
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول عليها:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>إيرادات شهرية تزيد عن 2000$</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>استمرارية لمدة 3 أشهر على الأقل</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>التزام كامل بقواعد المنصة والوكالة</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تخفيض العمولة بنسبة 10%</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>سحب فوري للأموال (بدون انتظار)</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مدير حساب شخصي مخصص</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ترويج مجاني على صفحات الوكالة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* العضوية الفضية */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-950/20 dark:to-slate-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-20 w-20 text-slate-400" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-slate-400">العضوية الفضية</CardTitle>
                <CardDescription className="text-center">عضوية متوسطة للمذيعين النشطين والملتزمين</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول عليها:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>إيرادات شهرية بين 1000$ و 2000$</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>استمرارية لمدة شهرين على الأقل</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تفاعل جيد مع المشاهدين</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تخفيض العمولة بنسبة 5%</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>أولوية في معالجة طلبات السحب</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>دعم فني مميز وسريع</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* العضوية البرونزية */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-20 w-20 text-amber-700" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-amber-700">العضوية البرونزية</CardTitle>
                <CardDescription className="text-center">العضوية الأساسية للمذيعين الجدد والمتوسطين</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول عليها:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>إيرادات شهرية بين 500$ و 1000$</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>بث منتظم (15+ يوم شهريًا)</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>اجتياز التدريب الأساسي للمذيعين</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">المميزات:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارة عضوية مميزة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>إمكانية المشاركة في المسابقات الخاصة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مواد تدريبية متقدمة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="special">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* شارة بطل المسابقات */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="h-20 w-20 text-red-500" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-red-500">شارة بطل المسابقات</CardTitle>
                <CardDescription className="text-center">
                  تُمنح للمذيعين الذين يفوزون بثلاث مسابقات أو أكثر
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول على الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>الفوز بثلاث مسابقات مختلفة كحد أدنى</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>الفوز بمسابقة واحدة على الأقل بالمركز الأول</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">مميزات الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>شارة خاصة متحركة أثناء البث</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ظهور في صفحة المشاهير بالموقع</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>فرصة تمثيل الوكالة في الفعاليات</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* شارة المبدع */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Star className="h-20 w-20 text-purple-500" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-purple-500">شارة المبدع</CardTitle>
                <CardDescription className="text-center">
                  تُمنح للمذيعين الذين يقدمون محتوى إبداعيًا ومميزًا
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول على الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تقديم محتوى إبداعي ومميز</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>تلقي تقييمات إيجابية من المشاهدين</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>اختيار الوكالة للمحتوى المميز</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">مميزات الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>ترويج للمحتوى على منصات الوكالة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>فرص للمشاركة في إنتاج محتوى الوكالة</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مكافآت خاصة على المحتوى الإبداعي</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* شارة السفير */}
            <Card className="overflow-hidden">
              <div className="flex justify-center py-6 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10">
                <div className="relative h-32 w-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-20 w-20 text-blue-500" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-blue-500">شارة السفير</CardTitle>
                <CardDescription className="text-center">
                  تُمنح للمذيعين الذين يمثلون الوكالة في الفعاليات والمناسبات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">متطلبات الحصول على الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>اختيار الوكالة للمذيع كسفير رسمي</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>المشاركة في تمثيل الوكالة في الفعاليات</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>المساهمة في استقطاب مذيعين جدد</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">مميزات الشارة:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>عمولة خاصة على المذيعين المستقطبين</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>رحلات مدفوعة للفعاليات الرسمية</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>مكافآت شهرية إضافية</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-muted rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">كيف تحصل على الشارات؟</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اتبع هذه الخطوات البسيطة لتحقيق المتطلبات والحصول على الشارات التقديرية المختلفة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold">1. سجل في الوكالة</h3>
            <p className="text-sm text-muted-foreground">قم بالتسجيل في وكالة خلك فخم وإكمال ملفك الشخصي</p>
          </div>

          <div className="text-center space-y-3">
            <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold">2. ابدأ البث بانتظام</h3>
            <p className="text-sm text-muted-foreground">اعمل على تحقيق ساعات بث منتظمة وتفاعل مع جمهورك</p>
          </div>

          <div className="text-center space-y-3">
            <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto">
              <Trophy className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold">3. حقق الإنجازات</h3>
            <p className="text-sm text-muted-foreground">اعمل على تحقيق متطلبات الشارات المختلفة وشارك في المسابقات</p>
          </div>

          <div className="text-center space-y-3">
            <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold">4. اجمع الشارات</h3>
            <p className="text-sm text-muted-foreground">احصل على الشارات واستمتع بالمميزات الخاصة التي توفرها</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/auth/register">
            <Button size="lg">انضم الآن وابدأ جمع الشارات</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
