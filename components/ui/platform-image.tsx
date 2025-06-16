"use client"

import { OptimizedImage } from "./optimized-image"

interface PlatformImageProps {
  platform: "super-live" | "party-star" | "popo-live"
  size?: "sm" | "md" | "lg"
  className?: string
}

const platformData = {
  "super-live": {
    name: "Super Live",
    src: "https://play-lh.googleusercontent.com/NYQ1l0sIM_EL4GwrscRD-tg44ZPIANZNdDdAlh_ZUAlkS2bhl25TrHBztyykjzxaHxY=w480-h960-rw",
    fallback: "/placeholder.svg?height=200&width=200&text=Super+Live",
  },
  "party-star": {
    name: "Party Star",
    src: "https://play-lh.googleusercontent.com/8H0VUCqPubX0RzW_R67rJ0Z-IxtccUbke-AXGQEi6h7Ex_ef9vT_Uxdnm_VUt2lcn0o=w480-h960-rw",
    fallback: "/placeholder.svg?height=200&width=200&text=Party+Star",
  },
  "popo-live": {
    name: "Popo Live",
    src: "https://play-lh.googleusercontent.com/vOzAawKeilRUXKXAshoI1L6A3LeMhRA_uOHbNRKNIJh1ZDuIgPLpAwKdW4b5o0Iaw_E=w480-h960-rw",
    fallback: "/placeholder.svg?height=200&width=200&text=Popo+Live",
  },
}

export function PlatformImage({ platform, size = "md", className = "" }: PlatformImageProps) {
  const sizeMap = {
    sm: { width: 100, height: 100 },
    md: { width: 200, height: 200 },
    lg: { width: 300, height: 300 },
  }

  const { width, height } = sizeMap[size]
  const platformInfo = platformData[platform]

  return (
    <OptimizedImage
      src={platformInfo.src}
      alt={`شعار منصة ${platformInfo.name}`}
      width={width}
      height={height}
      className={`rounded-lg ${className}`}
      fallbackSrc={platformInfo.fallback}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}
