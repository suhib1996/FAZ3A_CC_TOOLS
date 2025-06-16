"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PartyStarLevelsTable() {
  const [isOpen, setIsOpen] = useState(false)

  const levels = [
    {
      level: 0,
      hours: "30H 15D",
      diamonds: 25000,
      hostSalary: 25,
      bonus: 0,
      totalSalary: 25,
      agencyCommission: 0,
      totalAmount: 25,
    },
    {
      level: 1,
      hours: "30H 15D",
      diamonds: 50000,
      hostSalary: 55,
      bonus: 0,
      totalSalary: 55,
      agencyCommission: 0,
      totalAmount: 55,
    },
    {
      level: 2,
      hours: "30H 15D",
      diamonds: 80000,
      hostSalary: 64,
      bonus: 0,
      totalSalary: 64,
      agencyCommission: 10.4,
      totalAmount: 74.4,
    },
    {
      level: 3,
      hours: "30H 15D",
      diamonds: 120000,
      hostSalary: 96,
      bonus: 0,
      totalSalary: 96,
      agencyCommission: 15.6,
      totalAmount: 111.6,
    },
    {
      level: 4,
      hours: "30H 15D",
      diamonds: 160000,
      hostSalary: 128,
      bonus: 0,
      totalSalary: 128,
      agencyCommission: 20.8,
      totalAmount: 148.8,
    },
    {
      level: 5,
      hours: "30H 15D",
      diamonds: 200000,
      hostSalary: 160,
      bonus: 0,
      totalSalary: 160,
      agencyCommission: 26,
      totalAmount: 186,
    },
    {
      level: 6,
      hours: "30H 15D",
      diamonds: 300000,
      hostSalary: 240,
      bonus: 0,
      totalSalary: 240,
      agencyCommission: 39,
      totalAmount: 279,
    },
    {
      level: 7,
      hours: "20H 10D",
      diamonds: 400000,
      hostSalary: 320,
      bonus: 40,
      totalSalary: 360,
      agencyCommission: 52,
      totalAmount: 412,
    },
    {
      level: 8,
      hours: "20H 10D",
      diamonds: 600000,
      hostSalary: 480,
      bonus: 60,
      totalSalary: 540,
      agencyCommission: 78,
      totalAmount: 618,
    },
    {
      level: 9,
      hours: "20H 10D",
      diamonds: 800000,
      hostSalary: 640,
      bonus: 80,
      totalSalary: 720,
      agencyCommission: 104,
      totalAmount: 824,
    },
    {
      level: 10,
      hours: "20H 10D",
      diamonds: 1000000,
      hostSalary: 800,
      bonus: 100,
      totalSalary: 900,
      agencyCommission: 130,
      totalAmount: 1030,
    },
    {
      level: 11,
      hours: "20H 10D",
      diamonds: 1500000,
      hostSalary: 1200,
      bonus: 150,
      totalSalary: 1350,
      agencyCommission: 195,
      totalAmount: 1545,
    },
    {
      level: 12,
      hours: "20H 10D",
      diamonds: 2000000,
      hostSalary: 1600,
      bonus: 200,
      totalSalary: 1800,
      agencyCommission: 260,
      totalAmount: 2060,
    },
    {
      level: 13,
      hours: "20H 10D",
      diamonds: 2500000,
      hostSalary: 2000,
      bonus: 250,
      totalSalary: 2250,
      agencyCommission: 325,
      totalAmount: 2575,
    },
    {
      level: 14,
      hours: "10H 5D",
      diamonds: 3000000,
      hostSalary: 2400,
      bonus: 300,
      totalSalary: 2700,
      agencyCommission: 390,
      totalAmount: 3090,
    },
    {
      level: 15,
      hours: "10H 5D",
      diamonds: 3500000,
      hostSalary: 2800,
      bonus: 350,
      totalSalary: 3150,
      agencyCommission: 455,
      totalAmount: 3605,
    },
    {
      level: 16,
      hours: "10H 5D",
      diamonds: 4000000,
      hostSalary: 3200,
      bonus: 400,
      totalSalary: 3600,
      agencyCommission: 520,
      totalAmount: 4120,
    },
    {
      level: 17,
      hours: "10H 5D",
      diamonds: 4500000,
      hostSalary: 3600,
      bonus: 450,
      totalSalary: 4050,
      agencyCommission: 585,
      totalAmount: 4635,
    },
    {
      level: 18,
      hours: "10H 5D",
      diamonds: 5000000,
      hostSalary: 4000,
      bonus: 500,
      totalSalary: 4500,
      agencyCommission: 650,
      totalAmount: 5150,
    },
    {
      level: 19,
      hours: "10H 5D",
      diamonds: 6000000,
      hostSalary: 4800,
      bonus: 600,
      totalSalary: 5400,
      agencyCommission: 780,
      totalAmount: 6180,
    },
    {
      level: 20,
      hours: "5H 5D",
      diamonds: 7500000,
      hostSalary: 6000,
      bonus: 750,
      totalSalary: 6750,
      agencyCommission: 975,
      totalAmount: 7725,
    },
    {
      level: 21,
      hours: "5H 5D",
      diamonds: 9000000,
      hostSalary: 7200,
      bonus: 900,
      totalSalary: 8100,
      agencyCommission: 1170,
      totalAmount: 9270,
    },
    {
      level: 22,
      hours: "5H 5D",
      diamonds: 11000000,
      hostSalary: 8800,
      bonus: 1100,
      totalSalary: 9900,
      agencyCommission: 1430,
      totalAmount: 11330,
    },
    {
      level: 23,
      hours: "5H 5D",
      diamonds: 13000000,
      hostSalary: 10400,
      bonus: 1300,
      totalSalary: 11700,
      agencyCommission: 1690,
      totalAmount: 13390,
    },
    {
      level: 24,
      hours: "5H 5D",
      diamonds: 16000000,
      hostSalary: 12800,
      bonus: 1600,
      totalSalary: 14400,
      agencyCommission: 2080,
      totalAmount: 16480,
    },
    {
      level: 25,
      hours: "5H 5D",
      diamonds: 25000000,
      hostSalary: 20000,
      bonus: 2500,
      totalSalary: 22500,
      agencyCommission: 3250,
      totalAmount: 25750,
    },
    {
      level: 26,
      hours: "5H 5D",
      diamonds: 30000000,
      hostSalary: 24000,
      bonus: 3000,
      totalSalary: 27000,
      agencyCommission: 3900,
      totalAmount: 30900,
    },
    {
      level: 27,
      hours: "5H 5D",
      diamonds: 35000000,
      hostSalary: 28000,
      bonus: 3500,
      totalSalary: 31500,
      agencyCommission: 4550,
      totalAmount: 36050,
    },
    {
      level: 28,
      hours: "5H 5D",
      diamonds: 40000000,
      hostSalary: 32000,
      bonus: 4000,
      totalSalary: 36000,
      agencyCommission: 5200,
      totalAmount: 41200,
    },
    {
      level: 29,
      hours: "5H 5D",
      diamonds: 45000000,
      hostSalary: 36000,
      bonus: 4500,
      totalSalary: 40500,
      agencyCommission: 5850,
      totalAmount: 46350,
    },
    {
      level: 30,
      hours: "5H 5D",
      diamonds: 50000000,
      hostSalary: 40000,
      bonus: 5000,
      totalSalary: 45000,
      agencyCommission: 6500,
      totalAmount: 51500,
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">عرض جدول المستويات كاملاً</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>جدول مستويات Party Star</DialogTitle>
          <DialogDescription>تفاصيل كاملة لنظام المستويات والرواتب في منصة Party Star</DialogDescription>
        </DialogHeader>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">المستوى</TableHead>
                <TableHead className="text-right">الأيام والساعات المطلوبة</TableHead>
                <TableHead className="text-right">الألماس المحصول عليها</TableHead>
                <TableHead className="text-right">راتب المضيف (80%)</TableHead>
                <TableHead className="text-right">البونص (10%)</TableHead>
                <TableHead className="text-right">إجمالي راتب المضيف</TableHead>
                <TableHead className="text-right">عمولة الوكالة</TableHead>
                <TableHead className="text-right">إجمالي الراتب</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {levels.map((level) => (
                <TableRow key={level.level}>
                  <TableCell>{level.level}</TableCell>
                  <TableCell>{level.hours}</TableCell>
                  <TableCell>{level.diamonds.toLocaleString()}</TableCell>
                  <TableCell>${level.hostSalary}</TableCell>
                  <TableCell>${level.bonus}</TableCell>
                  <TableCell>${level.totalSalary}</TableCell>
                  <TableCell>${level.agencyCommission}</TableCell>
                  <TableCell>${level.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="space-y-4 mt-4">
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
      </DialogContent>
    </Dialog>
  )
}
