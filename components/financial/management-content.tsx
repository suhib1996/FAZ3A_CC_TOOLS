"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DollarSign, BarChart, Download, ArrowUpRight, ArrowDownRight, CheckCircle, XCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function FinancialManagementContent() {
  const { user } = useAuth()

  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">الإدارة المالية</h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          إدارة المعاملات المالية، طلبات السحب، وتقارير الأداء
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الرصيد الحالي</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,540</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                18%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الإيرادات</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,560</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                8.2%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الإيداعات</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                12%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المسحوبات</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,230</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 inline-flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                5%
              </span>{" "}
              منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="transactions">المعاملات</TabsTrigger>
          <TabsTrigger value="withdrawals">طلبات السحب</TabsTrigger>
          <TabsTrigger value="reports">التقارير المالية</TabsTrigger>
          <TabsTrigger value="methods">طرق الدفع</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">سجل المعاملات</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  تصدير البيانات
                </Button>
                <Button size="sm">معاملة جديدة</Button>
              </div>
            </div>

            <div className="rounded-md border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="py-3 px-4 text-right">رقم المعاملة</th>
                    <th className="py-3 px-4 text-right">النوع</th>
                    <th className="py-3 px-4 text-right">المستخدم</th>
                    <th className="py-3 px-4 text-right">المبلغ</th>
                    <th className="py-3 px-4 text-right">التاريخ</th>
                    <th className="py-3 px-4 text-right">الحالة</th>
                    <th className="py-3 px-4 text-right">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    {
                      id: "TRX-2025042",
                      type: "سحب",
                      user: "أحمد محمد",
                      amount: "$300.00",
                      date: "25/03/2025",
                      status: "معلق",
                    },
                    {
                      id: "TRX-2025041",
                      type: "إيداع",
                      user: "سارة أحمد",
                      amount: "$500.00",
                      date: "24/03/2025",
                      status: "مكتمل",
                    },
                    {
                      id: "TRX-2025040",
                      type: "تحويل",
                      user: "محمد علي",
                      amount: "$150.00",
                      date: "23/03/2025",
                      status: "مكتمل",
                    },
                    {
                      id: "TRX-2025039",
                      type: "سلفة",
                      user: "نورا حسن",
                      amount: "$200.00",
                      date: "22/03/2025",
                      status: "معلق",
                    },
                    {
                      id: "TRX-2025038",
                      type: "سحب",
                      user: "خالد عمر",
                      amount: "$450.00",
                      date: "21/03/2025",
                      status: "مرفوض",
                    },
                  ].map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="py-3 px-4">{transaction.id}</td>
                      <td className="py-3 px-4">{transaction.type}</td>
                      <td className="py-3 px-4">{transaction.user}</td>
                      <td className="py-3 px-4">{transaction.amount}</td>
                      <td className="py-3 px-4">{transaction.date}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            transaction.status === "مكتمل"
                              ? "default"
                              : transaction.status === "معلق"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          {transaction.status === "معلق" && (
                            <>
                              <Button variant="ghost" size="icon">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <XCircle className="h-4 w-4 text-red-500" />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">عرض 1-5 من 124 معاملة</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  السابق
                </Button>
                <Button variant="outline" size="sm">
                  التالي
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Other tab contents (withdrawals, reports, methods) */}
      </Tabs>
    </div>
  )
}
