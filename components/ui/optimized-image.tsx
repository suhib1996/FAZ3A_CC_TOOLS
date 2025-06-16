"use client"

import Image from "next/image"
import { useState } from "react"
import { ImageIcon } from "lucide-react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
  sizes?: string
  fallbackSrc?: string
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  priority = false,
  sizes,
  fallbackSrc,
  onError,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    if (fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(false)
    }
    onError?.()
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (hasError && !fallbackSrc) {
    return (
      <div
        className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}
        style={fill ? {} : { width, height }}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="h-8 w-8" />
        <span className="sr-only">{alt}</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={fill ? {} : { width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse" aria-hidden="true">
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
        </div>
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${
          fill ? "object-cover" : ""
        }`}
        onError={handleError}
        onLoad={handleLoad}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  )
}
