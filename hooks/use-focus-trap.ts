"use client"

import { useEffect, useRef } from "react"

export function useFocusTrap(isActive: boolean) {
  const firstFocusableElementRef = useRef<HTMLElement | null>(null)
  const lastFocusableElementRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    if (focusableElements.length === 0) return

    firstFocusableElementRef.current = focusableElements[0]
    lastFocusableElementRef.current = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElementRef.current) {
          lastFocusableElementRef.current?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableElementRef.current) {
          firstFocusableElementRef.current?.focus()
          e.preventDefault()
        }
      }
    }

    // Focus the first element when the trap is activated
    firstFocusableElementRef.current?.focus()

    // Add event listener for tab key
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isActive])

  return containerRef
}
