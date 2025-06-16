import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ResponsiveGridProps {
  children: ReactNode
  className?: string
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    "2xl"?: number
  }
  gap?: "none" | "sm" | "md" | "lg" | "xl"
}

export function ResponsiveGrid({
  children,
  className,
  cols = { default: 1, md: 2, lg: 3 },
  gap = "md",
}: ResponsiveGridProps) {
  const gapClasses = {
    none: "gap-0",
    sm: "gap-2 sm:gap-3",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
    xl: "gap-8 sm:gap-10",
  }

  const getGridCols = () => {
    const classes = []
    if (cols.default) classes.push(`grid-cols-${cols.default}`)
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)
    if (cols["2xl"]) classes.push(`2xl:grid-cols-${cols["2xl"]}`)
    return classes.join(" ")
  }

  return <div className={cn("grid", getGridCols(), gapClasses[gap], className)}>{children}</div>
}
