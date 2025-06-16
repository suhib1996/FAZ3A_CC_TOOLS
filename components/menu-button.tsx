"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MenuButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function MenuButton({ isOpen, onClick, className }: MenuButtonProps) {
  // Track if the component is mounted to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // When menu opens, trap focus within the menu
    if (isOpen) {
      // This would be implemented in the parent component
      // that controls the menu's open state
    }
  }, [isOpen])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("relative md:hidden", className)}
        aria-label="فتح القائمة الرئيسية"
      >
        <div className="w-5 h-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn(
        "relative md:hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        "h-10 w-10 p-2 rounded-full transition-colors",
        "hover:bg-muted active:scale-95 touch-manipulation",
        className,
      )}
      aria-label={isOpen ? "إغلاق القائمة الرئيسية" : "فتح القائمة الرئيسية"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-haspopup="dialog"
      data-testid="mobile-menu-button"
    >
      <div className="w-5 h-5 flex flex-col justify-center items-center">
        <span
          className={cn(
            "block h-0.5 w-5 bg-current rounded-full transition-all duration-300",
            isOpen ? "rotate-45 translate-y-[0.1875rem]" : "",
          )}
        />
        <span
          className={cn(
            "block h-0.5 bg-current rounded-full transition-all duration-300 my-0.5",
            isOpen ? "opacity-0 w-0" : "opacity-100 w-5",
          )}
        />
        <span
          className={cn(
            "block h-0.5 w-5 bg-current rounded-full transition-all duration-300",
            isOpen ? "-rotate-45 -translate-y-[0.1875rem]" : "",
          )}
        />
      </div>
      <span className="sr-only">{isOpen ? "إغلاق القائمة" : "فتح القائمة"}</span>
    </Button>
  )
}
