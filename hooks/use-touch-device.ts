"use client"

import { useState, useEffect } from "react"

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return

    // Check if the device supports touch events
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0,
      )
    }

    checkTouch()

    // Add resize listener to recheck on orientation change
    window.addEventListener("resize", checkTouch)

    return () => {
      window.removeEventListener("resize", checkTouch)
    }
  }, [])

  return isTouchDevice
}
