import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "المنصات | نظام إدارة الوكالات",
  description: "منصات البث المباشر المدعومة من نظام إدارة الوكالات",
}

export default function PlatformsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">منصات البث المباشر</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          نقدم خدماتنا على أشهر منصات البث المباشر في العالم العربي. اختر المنصة المناسبة لك وابدأ رحلتك مع نظام إدارة
          الوكالات.
        </p>
      </div>

      <Tabs defaultValue="super-live" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="super-live">Super Live</TabsTrigger>
          <TabsTrigger value="party-star">Party Star</TabsTrigger>
          <TabsTrigger value="popo-live">Popo Live</TabsTrigger>
        </TabsList>

        <TabsContent value="super-live">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-center mb-6">
                <Image
                  src="https://play-lh.googleusercontent.com/NYQ1l0sIM_EL4GwrscRD-tg44ZPIANZNdDdAlh_ZUAlkS2bhl25TrHBztyykjzxaHxY=w480-h960-rw"
                  alt="Super Live"
                  width={200}
                  height={200}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-bold">منصة Super Live</h2>
                <p className="text-muted-foreground">
                  منصة بث مباشر شهيرة مع نظام مكافآت متميز وفرص كبيرة للمذيعين. توفر المنصة بيئة آمنة وسهلة الاستخدام
                  للمذيعين والمشاهدين.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>راتب ثابت</Badge>
                  <Badge>مكافآت يومية</Badge>
                  <Badge>دعم فني</Badge>
                  <Badge>تدريب مجاني</Badge>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link href="https://sprlv.link/y8x2c09d" target="_blank">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      تحميل التطبيق
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">طلب انضمام</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>سياسة الراتب الثابت</CardTitle>
                  <CardDescription>شروط وتفاصيل الراتب الثابت في منصة Super Live</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">الراتب الشهري</span>
                    <span className="font-bold">150$</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">ساعات العمل</span>
                    <span>3 ساعات يوميًا</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">الحد الأدنى للأيام</span>
                    <span>15 يومًا شهريًا</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">المكافآت الإضافية</span>
                    <span>5$ يوميًا</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">تحويل الكونز</span>
                    <span>8 كونز = 1 ماسة</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">تحويل الماسات</span>
                    <span>150 ماسة = 1$</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">موعد استلام الراتب</span>
                    <span>يوم 15 من الشهر التالي</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>شروط الانضمام</CardTitle>
                  <CardDescription>المتطلبات الأساسية للانضمام كمذيع في Super Live</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>خبرة في البث المباشر</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>مظهر أنيق وحضور لائق</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>اجتياز اختبار القبول (أوديشين)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>الالتزام بمواعيد البث</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>عدم الغياب أكثر من 3 أيام متتالية</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    لمزيد من المعلومات حول شروط الانضمام، يرجى التواصل مع فريق الدعم.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="party-star">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-center mb-6">
                <Image
                  src="https://play-lh.googleusercontent.com/8H0VUCqPubX0RzW_R67rJ0Z-IxtccUbke-AXGQEi6h7Ex_ef9vT_Uxdnm_VUt2lcn0o=w480-h960-rw"
                  alt="Party Star"
                  width={200}
                  height={200}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-bold">منصة Party Star</h2>
                <p className="text-muted-foreground">
                  منصة تفاعلية للبث المباشر مع ميزات فريدة وجمهور واسع من المستخدمين. توفر Party Star فرصًا متنوعة
                  للمذيعين لتحقيق دخل مميز من خلال نظام مستويات متدرج.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>عمولة مرتفعة</Badge>
                  <Badge>نظام مستويات</Badge>
                  <Badge>مكافآت إضافية</Badge>
                  <Badge>دعم مستمر</Badge>
                </div>
                <div className="flex gap-4 mt-4">
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    تحميل التطبيق
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline">طلب انضمام</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>سياسة راتب البث المباشر</CardTitle>
                  <CardDescription>تفاصيل نظام الرواتب والمكافآت في منصة Party Star</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    تعتمد منصة Party Star نظام مستويات متدرج يعتمد على عدد الألماس المحصل عليها وعدد ساعات البث. كلما
                    ارتفع مستوى المذيع، زادت نسبة الراتب والمكافآت.
                  </p>
                  <div className="flex justify-center">
                    <Button variant="outline" size="sm" className="mb-4">
                      عرض جدول المستويات كاملاً
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-medium mb-2">أمثلة على المستويات:</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>المستوى 0:</span>
                          <span>25,000 ألماس = 25$</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>المستوى 5:</span>
                          <span>200,000 ألماس = 186$</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>المستوى 10:</span>
                          <span>1,000,000 ألماس = 1,030$</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>المستوى 20:</span>
                          <span>7,500,000 ألماس = 7,725$</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-medium mb-2">متطلبات المستويات:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>المستويات 0-6: 30 ساعة و 15 يوم</li>
                        <li>المستويات 7-13: 20 ساعة و 10 أيام</li>
                        <li>المستويات 14-31: 5 ساعات و 5 أيام</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                  <h3 className="font-medium text-sm">ملاحظات هامة:</h3>
                  <ul className="text-xs text-muted-foreground space-y-1 list-disc pr-4">
                    <li>
                      إذا لم يكمل المضيف الأيام والساعات المطلوبة ولكن أكمل الألماس المطلوبة، سيحصل على 80% من الراتب
                      فقط
                    </li>
                    <li>
                      إذا تم تفعيل المضيف الجديد لأول مرة بعد اليوم 15 بالشهر، الأيام والساعات المطلوبة ستكون 5 أيام و
                      10 ساعات
                    </li>
                    <li>البث المباشر لساعة واحدة يعادل يوماً فعالياً واحد</li>
                    <li>الألماس فوق المستوى المقابل سيتم تحويل 40% منه إلى حساب المضيف في الشهر التالي</li>
                  </ul>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>جدول سياسة راتب البث المباشر</CardTitle>
                <CardDescription>تفاصيل كاملة لنظام المستويات والرواتب في منصة Party Star</CardDescription>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border p-2 text-right">المستوى</th>
                      <th className="border p-2 text-right">الأيام والساعات المطلوبة</th>
                      <th className="border p-2 text-right">الألماس المحصول عليها</th>
                      <th className="border p-2 text-right">راتب المضيف (80%)</th>
                      <th className="border p-2 text-right">البونص (10%)</th>
                      <th className="border p-2 text-right">إجمالي راتب المضيف</th>
                      <th className="border p-2 text-right">عمولة الوكالة</th>
                      <th className="border p-2 text-right">إجمالي الراتب</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">0</td>
                      <td className="border p-2">30H 15D</td>
                      <td className="border p-2">25000</td>
                      <td className="border p-2">25</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">25</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">25</td>
                    </tr>
                    <tr>
                      <td className="border p-2">1</td>
                      <td className="border p-2">30H 15D</td>
                      <td className="border p-2">50000</td>
                      <td className="border p-2">55</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">55</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">55</td>
                    </tr>
                    <tr>
                      <td className="border p-2">2</td>
                      <td className="border p-2">30H 15D</td>
                      <td className="border p-2">80000</td>
                      <td className="border p-2">64</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">64</td>
                      <td className="border p-2">10.4</td>
                      <td className="border p-2">74.4</td>
                    </tr>
                    <tr>
                      <td className="border p-2">5</td>
                      <td className="border p-2">30H 15D</td>
                      <td className="border p-2">200000</td>
                      <td className="border p-2">160</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">160</td>
                      <td className="border p-2">26</td>
                      <td className="border p-2">186</td>
                    </tr>
                    <tr>
                      <td className="border p-2">10</td>
                      <td className="border p-2">20H 10D</td>
                      <td className="border p-2">1000000</td>
                      <td className="border p-2">800</td>
                      <td className="border p-2">100</td>
                      <td className="border p-2">900</td>
                      <td className="border p-2">130</td>
                      <td className="border p-2">1030</td>
                    </tr>
                    <tr>
                      <td className="border p-2">15</td>
                      <td className="border p-2">10H 5D</td>
                      <td className="border p-2">3000000</td>
                      <td className="border p-2">2400</td>
                      <td className="border p-2">300</td>
                      <td className="border p-2">2700</td>
                      <td className="border p-2">390</td>
                      <td className="border p-2">3090</td>
                    </tr>
                    <tr>
                      <td className="border p-2">20</td>
                      <td className="border p-2">5H 5D</td>
                      <td className="border p-2">7500000</td>
                      <td className="border p-2">6000</td>
                      <td className="border p-2">750</td>
                      <td className="border p-2">6750</td>
                      <td className="border p-2">975</td>
                      <td className="border p-2">7725</td>
                    </tr>
                    <tr>
                      <td className="border p-2">25</td>
                      <td className="border p-2">5H 5D</td>
                      <td className="border p-2">25000000</td>
                      <td className="border p-2">20000</td>
                      <td className="border p-2">2500</td>
                      <td className="border p-2">22500</td>
                      <td className="border p-2">3250</td>
                      <td className="border p-2">25750</td>
                    </tr>
                    <tr>
                      <td className="border p-2">30</td>
                      <td className="border p-2">5H 5D</td>
                      <td className="border p-2">50000000</td>
                      <td className="border p-2">40000</td>
                      <td className="border p-2">5000</td>
                      <td className="border p-2">45000</td>
                      <td className="border p-2">6500</td>
                      <td className="border p-2">51500</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
              <CardFooter>
                <div className="space-y-4 w-full">
                  <h3 className="font-medium">تعديلات في السياسة:</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">1.</span>
                      <span>إضافة المستوى 0، الألماس المطلوبة 25 ألف، لمساعدة وتشجيع المضيف الجديد أكثر.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">2.</span>
                      <span>إلغاء عمولة الوكالة في المستوى 1.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">3.</span>
                      <span>إضافة متطلبات الأيام والساعات من المستوى 20 لتجنب الدعم المزيف.</span>
                    </li>
                  </ul>

                  <div className="bg-muted p-4 rounded-lg mt-4">
                    <h3 className="font-medium mb-2">العقوبات:</h3>
                    <p className="text-sm text-muted-foreground">
                      إذا كان المضيف تم حظره للمرة الثالثة، سوف يتم خصم الراتب الشهري بشكل كامل.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="popo-live">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-center mb-6">
                <Image
                  src="https://play-lh.googleusercontent.com/vOzAawKeilRUXKXAshoI1L6A3LeMhRA_uOHbNRKNIJh1ZDuIgPLpAwKdW4b5o0Iaw_E=w480-h960-rw"
                  alt="Popo Live"
                  width={200}
                  height={200}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h2 className="text-2xl font-bold">منصة Popo Live</h2>
                <p className="text-muted-foreground">
                  منصة متنامية للبث المباشر توفر فرصًا كبيرة للمذيعين الجدد والمحترفين. تتميز Popo Live بنظام مكافآت مرن
                  ومتنوع، وتوفر بيئة آمنة وسهلة الاستخدام للمذيعين والمشاهدين.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>نظام مهام</Badge>
                  <Badge>راتب أسبوعي</Badge>
                  <Badge>سحب فوري</Badge>
                  <Badge>تدريب شامل</Badge>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="https://h5-global.v.show/inviteNew/share?c=poppo&link_id=5375297&user_id=4207397"
                    target="_blank"
                  >
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      تحميل التطبيق
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">طلب انضمام</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>أنظمة العمل في Popo Live</CardTitle>
                  <CardDescription>خيارات متعددة للعمل في منصة Popo Live</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. النظام العادي</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>بث مباشر مع إظهار الوجه</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>لا يشترط عدد ساعات محددة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>مكافآت: 3000 - 70000 كونز لكل مهمة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>100,000 كونز = 10$</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>السحب الفوري متاح (الحد الأدنى 10$)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">2. الراتب الثابت (40$ أسبوعيًا)</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>18 ساعة عمل أسبوعيًا</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>تحقيق 500,000 كونز كحد أدنى</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>رفع فيديو غنائي/رقصي/إبداعي</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>مصادقة الوجه ووضع صورة حقيقية</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">3. المكافآت الإضافية</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>مكافأة الاستمرارية: 5$ إضافية لكل أسبوع متواصل</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>مكافأة الإحالة: 10$ لكل مذيع جديد يتم إحضاره</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>مكافأة التميز: 20$ شهريًا للمذيعين المتميزين</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    للانضمام، قم بتحميل التطبيق وإدخال ID الوكالة: 4207397 في قسم "الوكالة"
                  </p>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>مميزات منصة Popo Live</CardTitle>
                  <CardDescription>ما يميز منصة Popo Live عن غيرها</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>سهولة الاستخدام والواجهة البسيطة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>نظام مكافآت متنوع ومرن</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>إمكانية السحب الفوري للأرباح</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>دعم فني متاح على مدار الساعة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>فرص متنوعة للمذيعين الجدد والمحترفين</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
