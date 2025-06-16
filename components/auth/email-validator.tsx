"use client"

import { useState, useEffect } from "react"
import { Check, X } from "lucide-react"

interface EmailValidatorProps {
  email: string
  onValidationChange: (isValid: boolean, message: string) => void
}

export function EmailValidator({ email, onValidationChange }: EmailValidatorProps) {
  const [isValid, setIsValid] = useState(false)
  const [message, setMessage] = useState("")
  const [isChecking, setIsChecking] = useState(false)

  useEffect(() => {
    if (!email) {
      setIsValid(false)
      setMessage("")
      onValidationChange(false, "")
      return
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setIsValid(false)
      setMessage("تنسيق البريد الإلكتروني غير صحيح")
      onValidationChange(false, "تنسيق البريد الإلكتروني غير صحيح")
      return
    }

    // Check for common email providers
    const commonProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"]
    const domain = email.split("@")[1]?.toLowerCase()

    if (domain && commonProviders.includes(domain)) {
      setIsValid(true)
      setMessage("بريد إلكتروني صالح")
      onValidationChange(true, "")
    } else {
      // For other domains, we'll assume they're valid but show a warning
      setIsValid(true)
      setMessage("تأكد من صحة البريد الإلكتروني")
      onValidationChange(true, "")
    }
  }, [email, onValidationChange])

  if (!email) return null

  return (
    <div className="flex items-center gap-2 mt-1 text-sm">
      {isValid ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
      <span className={isValid ? "text-green-600" : "text-red-600"}>{message}</span>
    </div>
  )
}
