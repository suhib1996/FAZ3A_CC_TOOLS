"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, Plus, Edit, Trash2, Users, DollarSign } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface Platform {
  id: string
  name: string
  description: string
  status: "active" | "inactive" | "maintenance"
  totalUsers: number
  totalEarnings: number
  commissionRate: number
  minPayout: number
  payoutSchedule: string
  features: string[]
}

export default function PlatformsManagementContent() {
  const [platforms, setPlatforms] = useState<Platform[]>([
    {
      id: "1",
      name: "Super Live",
      description: "منصة بث مباشر شهيرة مع نظام مكافآت متميز",
      status: "active",
      totalUsers: 150,
      totalEarnings: 45000,
      commissionRate: 15,
      minPayout: 50,
      payoutSchedule: "شهري",
      features: ["راتب ثابت", "مكافآت يومية", "دعم فني"],
    },
    {
      id: "2",
      name: "Party Star",
      description: "منصة تفاعلية للبث المباشر مع نظام مستويات متدرج",
      status: "active",
      totalUsers: 89,
      totalEarnings: 32000,
      commissionRate: 12,
      minPayout: 100,
      payoutSchedule: "شهري",
      features: ["نظام مستويات", "مكافآت إضافية", "دعم مستمر"],
    },
    {
      id: "3",
      name: "Popo Live",
      description: "منصة متنامية للبث المباشر مع نظام مكافآت مرن",
      status: "active",
      totalUsers: 67,
      totalEarnings: 18500,
      commissionRate: 10,
      minPayout: 40,
      payoutSchedule: "أسبوعي",
      features: ["نظام مهام", "راتب أسبوعي", "سحب فوري"],
    },
  ])

  const [isAddPlatformOpen, setIsAddPlatformOpen] = useState(false)
  const [newPlatform, setNewPlatform] = useState({
    name: "",
    description: "",
    commissionRate: 0,
    minPayout: 0,
    payoutSchedule: "شهري",
    features: "",
  })

  const handleAddPlatform = () => {
    if (!newPlatform.name || !newPlatform.description) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      })
      return
    }

    const platform: Platform = {
      id: Date.now().toString(),
      name: newPlatform.name,
      description: newPlatform.description,
      status: "active",
      totalUsers: 0,
      totalEarnings: 0,
      commissionRate: newPlatform.commissionRate,
      minPayout: newPlatform.minPayout,
      payoutSchedule: newPlatform.payoutSchedule,
      features: newPlatform.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
    }

    setPlatforms([...platforms, platform])
    setNewPlatform({
      name: "",
      description: "",
      commissionRate: 0,
      minPayout: 0,
      payoutSchedule: "شهري",
      features: "",
    })
    setIsAddPlatformOpen(false)

    toast({
      title: "تم بنجاح",
      description: "تم إضافة المنصة الجديدة بنجاح",
    })
  }

  const handleDeletePlatform = (platformId: string) => {
    setPlatforms(platforms.filter((platform) => platform.id !== platformId))
    toast({
      title: "تم الحذف",
      description: "تم حذف المنصة بنجاح",
    })
  }

  const handleStatusChange = (platformId: string, newStatus: Platform["status"]) => {
    setPlatforms(
      platforms.map((platform) => (platform.id === platformId ? { ...platform, status: newStatus } : platform)),
    )
    toast({
      title: "تم التحديث",
      description: "تم تحديث حالة المنصة بنجاح",
    })
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "نشطة"
      case "inactive":
        return "غير نشطة"
      case "maintenance":
        return "صيانة"
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "inactive":
        return "bg-gray-500"
      case "maintenance":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">إدارة المنصات</h1>
          <p className="text-muted-foreground">إدارة منصات البث المباشر المدعومة</p>
        </div>
        <Dialog open={isAddPlatformOpen} onOpenChange={setIsAddPlatformOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              إضافة منصة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>إضافة منصة جديدة</DialogTitle>
              <DialogDescription>أدخل بيانات المنصة الجديدة</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">اسم المنصة</Label>
                <Input
                  id="name"
                  value={newPlatform.name}
                  onChange={(e) => setNewPlatform({ ...newPlatform, name: e.target.value })}
                  placeholder="اسم المنصة"
                />
              </div>
              <div>
                <Label htmlFor="description">الوصف</Label>
                <Textarea
                  id="description"
                  value={newPlatform.description}
                  onChange={(e) => setNewPlatform({ ...newPlatform, description: e.target.value })}
                  placeholder="وصف المنصة"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="commissionRate">معدل العمولة (%)</Label>
                  <Input
                    id="commissionRate"
                    type="number"
                    value={newPlatform.commissionRate}
                    onChange={(e) => setNewPlatform({ ...newPlatform, commissionRate: Number(e.target.value) })}
                    placeholder="15"
                  />
                </div>
                <div>
                  <Label htmlFor="minPayout">الحد الأدنى للسحب ($)</Label>
                  <Input
                    id="minPayout"
                    type="number"
                    value={newPlatform.minPayout}
                    onChange={(e) => setNewPlatform({ ...newPlatform, minPayout: Number(e.target.value) })}
                    placeholder="50"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="payoutSchedule">جدولة الدفع</Label>
                <Select
                  value={newPlatform.payoutSchedule}
                  onValueChange={(value) => setNewPlatform({ ...newPlatform, payoutSchedule: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="يومي">يومي</SelectItem>
                    <SelectItem value="أسبوعي">أسبوعي</SelectItem>
                    <SelectItem value="شهري">شهري</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="features">الميزات (مفصولة بفواصل)</Label>
                <Input
                  id="features"
                  value={newPlatform.features}
                  onChange={(e) => setNewPlatform({ ...newPlatform, features: e.target.value })}
                  placeholder="راتب ثابت, مكافآت يومية, دعم فني"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddPlatformOpen(false)}>
                إلغاء
              </Button>
              <Button onClick={handleAddPlatform}>إضافة المنصة</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المنصات</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{platforms.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">المنصات النشطة</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{platforms.filter((p) => p.status === "active").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المستخدمين</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{platforms.reduce((sum, p) => sum + p.totalUsers, 0)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الإيرادات</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${platforms.reduce((sum, p) => sum + p.totalEarnings, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة المنصات</CardTitle>
          <CardDescription>إدارة جميع منصات البث المباشر المدعومة</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>المنصة</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>المستخدمون</TableHead>
                <TableHead>الإيرادات</TableHead>
                <TableHead>العمولة</TableHead>
                <TableHead>الحد الأدنى للسحب</TableHead>
                <TableHead>جدولة الدفع</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {platforms.map((platform) => (
                <TableRow key={platform.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{platform.name}</div>
                      <div className="text-sm text-muted-foreground">{platform.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(platform.status)}>{getStatusLabel(platform.status)}</Badge>
                  </TableCell>
                  <TableCell>{platform.totalUsers}</TableCell>
                  <TableCell>${platform.totalEarnings.toLocaleString()}</TableCell>
                  <TableCell>{platform.commissionRate}%</TableCell>
                  <TableCell>${platform.minPayout}</TableCell>
                  <TableCell>{platform.payoutSchedule}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeletePlatform(platform.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
