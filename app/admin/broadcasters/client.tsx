"use client"

import { useState } from "react"
import { ProtectedRoute } from "@/components/protected-route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, Edit, Eye, DollarSign, Users, TrendingUp, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Broadcaster {
  id: string
  name: string
  email: string
  platform: string
  followers: number
  revenue: number
  status: "active" | "inactive" | "suspended"
  joinDate: string
  avatar?: string
  rating: number
  totalStreams: number
}

const mockBroadcasters: Broadcaster[] = [
  {
    id: "BC001",
    name: "أحمد محمد",
    email: "ahmed@example.com",
    platform: "TikTok",
    followers: 125000,
    revenue: 15000,
    status: "active",
    joinDate: "2024-01-15",
    rating: 4.8,
    totalStreams: 245,
  },
  {
    id: "BC002",
    name: "فاطمة علي",
    email: "fatima@example.com",
    platform: "Instagram",
    followers: 89000,
    revenue: 12500,
    status: "active",
    joinDate: "2024-02-20",
    rating: 4.6,
    totalStreams: 189,
  },
  {
    id: "BC003",
    name: "محمد حسن",
    email: "mohammed@example.com",
    platform: "YouTube",
    followers: 67000,
    revenue: 8900,
    status: "inactive",
    joinDate: "2024-03-10",
    rating: 4.2,
    totalStreams: 156,
  },
]

export default function BroadcastersManagementClient() {
  const [broadcasters, setBroadcasters] = useState<Broadcaster[]>(mockBroadcasters)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const { toast } = useToast()

  const filteredBroadcasters = broadcasters.filter((broadcaster) => {
    const matchesSearch =
      broadcaster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      broadcaster.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      broadcaster.platform.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || broadcaster.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">نشط</Badge>
      case "inactive":
        return <Badge className="bg-yellow-100 text-yellow-800">غير نشط</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">معلق</Badge>
      default:
        return <Badge>غير محدد</Badge>
    }
  }

  const handleStatusChange = (broadcasterId: string, newStatus: string) => {
    setBroadcasters((prev) =>
      prev.map((broadcaster) =>
        broadcaster.id === broadcasterId
          ? { ...broadcaster, status: newStatus as "active" | "inactive" | "suspended" }
          : broadcaster,
      ),
    )
    toast({
      title: "تم تحديث الحالة",
      description: "تم تحديث حالة المذيع بنجاح",
    })
  }

  const totalRevenue = broadcasters.reduce((sum, broadcaster) => sum + broadcaster.revenue, 0)
  const activeBroadcasters = broadcasters.filter((b) => b.status === "active").length
  const totalFollowers = broadcasters.reduce((sum, broadcaster) => sum + broadcaster.followers, 0)

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">إدارة المذيعين</h1>
            <p className="text-muted-foreground">إدارة وتتبع جميع المذيعين في النظام</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                إضافة مذيع جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>إضافة مذيع جديد</DialogTitle>
                <DialogDescription>أدخل بيانات المذيع الجديد</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    الاسم
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    البريد الإلكتروني
                  </Label>
                  <Input id="email" type="email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="platform" className="text-right">
                    المنصة
                  </Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="اختر المنصة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="twitch">Twitch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  إلغاء
                </Button>
                <Button
                  onClick={() => {
                    setIsAddDialogOpen(false)
                    toast({
                      title: "تم إضافة المذيع",
                      description: "تم إضافة المذيع الجديد بنجاح",
                    })
                  }}
                >
                  إضافة
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المذيعين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{broadcasters.length}</div>
              <p className="text-xs text-muted-foreground">{activeBroadcasters} نشط</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الإيرادات</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المتابعين</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalFollowers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">عبر جميع المنصات</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط التقييم</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.5</div>
              <p className="text-xs text-muted-foreground">من 5 نجوم</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>البحث والتصفية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="البحث بالاسم، البريد الإلكتروني، أو المنصة..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="تصفية بالحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="active">نشط</SelectItem>
                  <SelectItem value="inactive">غير نشط</SelectItem>
                  <SelectItem value="suspended">معلق</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Broadcasters Table */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة المذيعين</CardTitle>
            <CardDescription>إدارة جميع المذيعين المسجلين في النظام</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>المذيع</TableHead>
                  <TableHead>المنصة</TableHead>
                  <TableHead>المتابعون</TableHead>
                  <TableHead>الإيرادات</TableHead>
                  <TableHead>التقييم</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBroadcasters.map((broadcaster) => (
                  <TableRow key={broadcaster.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={broadcaster.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{broadcaster.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{broadcaster.name}</div>
                          <div className="text-sm text-muted-foreground">{broadcaster.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{broadcaster.platform}</Badge>
                    </TableCell>
                    <TableCell>{broadcaster.followers.toLocaleString()}</TableCell>
                    <TableCell>${broadcaster.revenue.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {broadcaster.rating}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(broadcaster.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Select
                          value={broadcaster.status}
                          onValueChange={(value) => handleStatusChange(broadcaster.id, value)}
                        >
                          <SelectTrigger className="w-[100px] h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">نشط</SelectItem>
                            <SelectItem value="inactive">غير نشط</SelectItem>
                            <SelectItem value="suspended">معلق</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </ProtectedRoute>
  )
}
