"use client"

import Link from "next/link"
import { OptimizedImage } from "./optimized-image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
  href?: string
}

export function Logo({ size = "md", showText = true, className = "", href = "/" }: LogoProps) {
  const sizeMap = {
    sm: { width: 32, height: 32, textClass: "text-lg" },
    md: { width: 40, height: 40, textClass: "text-xl" },
    lg: { width: 48, height: 48, textClass: "text-2xl" },
  }

  const { width, height, textClass } = sizeMap[size]

  const LogoContent = () => (
    <div className={`flex items-center gap-2 ${className}`}>
      <OptimizedImage
        src="/images/logo-new.png"
        alt="شعار نظام إدارة الوكالات"
        width={width}
        height={height}
        className="rounded-full"
        fallbackSrc="/images/logo.png"
        priority
      />
      {showText && (
        <span className={`font-bold text-primary ${textClass} hidden sm:inline-block`}>نظام إدارة الوكالات</span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-80">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
