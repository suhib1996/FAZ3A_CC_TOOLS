"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Tablet } from "lucide-react"

export function ResponsiveTest() {
  const [screenSize, setScreenSize] = useState<string>("")
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateScreenInfo = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setDimensions({ width, height })

      if (width < 640) {
        setScreenSize("Mobile (< 640px)")
      } else if (width < 768) {
        setScreenSize("Small Tablet (640px - 768px)")
      } else if (width < 1024) {
        setScreenSize("Tablet (768px - 1024px)")
      } else if (width < 1280) {
        setScreenSize("Desktop (1024px - 1280px)")
      } else {
        setScreenSize("Large Desktop (> 1280px)")
      }
    }

    updateScreenInfo()
    window.addEventListener("resize", updateScreenInfo)
    return () => window.removeEventListener("resize", updateScreenInfo)
  }, [])

  const getDeviceIcon = () => {
    if (dimensions.width < 768) return <Smartphone className="h-5 w-5" />
    if (dimensions.width < 1024) return <Tablet className="h-5 w-5" />
    return <Monitor className="h-5 w-5" />
  }

  const getDeviceColor = () => {
    if (dimensions.width < 768) return "bg-green-500"
    if (dimensions.width < 1024) return "bg-blue-500"
    return "bg-purple-500"
  }

  return (
    <Card className="fixed bottom-4 left-4 z-50 w-80 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          {getDeviceIcon()}
          اختبار الاستجابة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">نوع الجهاز:</span>
          <Badge className={getDeviceColor()}>{screenSize}</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">الأبعاد:</span>
          <span className="text-sm">
            {dimensions.width} × {dimensions.height}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-muted rounded">
            <div className="font-medium">Breakpoints:</div>
            <div>SM: 640px+</div>
            <div>MD: 768px+</div>
            <div>LG: 1024px+</div>
            <div>XL: 1280px+</div>
          </div>
          <div className="p-2 bg-muted rounded">
            <div className="font-medium">Current:</div>
            <div className={dimensions.width >= 640 ? "text-green-600" : "text-red-600"}>
              SM: {dimensions.width >= 640 ? "✓" : "✗"}
            </div>
            <div className={dimensions.width >= 768 ? "text-green-600" : "text-red-600"}>
              MD: {dimensions.width >= 768 ? "✓" : "✗"}
            </div>
            <div className={dimensions.width >= 1024 ? "text-green-600" : "text-red-600"}>
              LG: {dimensions.width >= 1024 ? "✓" : "✗"}
            </div>
            <div className={dimensions.width >= 1280 ? "text-green-600" : "text-red-600"}>
              XL: {dimensions.width >= 1280 ? "✓" : "✗"}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
