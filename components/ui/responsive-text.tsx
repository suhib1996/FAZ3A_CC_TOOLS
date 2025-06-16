import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import type { JSX } from "react"

interface ResponsiveTextProps {
  children: ReactNode
  className?: string
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small"
  align?: "left" | "center" | "right"
  responsive?: boolean
}

export function ResponsiveText({
  children,
  className,
  variant = "p",
  align = "right",
  responsive = true,
}: ResponsiveTextProps) {
  const baseClasses = {
    h1: responsive
      ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
      : "text-4xl font-bold tracking-tight",
    h2: responsive
      ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
      : "text-3xl font-bold tracking-tight",
    h3: responsive ? "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold" : "text-2xl font-semibold",
    h4: responsive ? "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold" : "text-xl font-semibold",
    h5: responsive ? "text-sm sm:text-base md:text-lg lg:text-xl font-medium" : "text-lg font-medium",
    h6: responsive ? "text-xs sm:text-sm md:text-base lg:text-lg font-medium" : "text-base font-medium",
    p: responsive ? "text-sm sm:text-base md:text-lg leading-relaxed" : "text-base leading-relaxed",
    small: responsive ? "text-xs sm:text-sm md:text-base" : "text-sm",
  }

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const Component = variant as keyof JSX.IntrinsicElements

  return <Component className={cn(baseClasses[variant], alignClasses[align], className)}>{children}</Component>
}
