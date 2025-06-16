"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Check, X } from "lucide-react"

interface PasswordStrengthProps {
  password: string
  onStrengthChange: (isStrong: boolean) => void
}

interface PasswordRequirement {
  label: string
  test: (password: string) => boolean
  met: boolean
}

export function PasswordStrength({ password, onStrengthChange }: PasswordStrengthProps) {
  const [requirements, setRequirements] = useState<PasswordRequirement[]>([
    { label: "8 أحرف على الأقل", test: (p) => p.length >= 8, met: false },
    { label: "حرف كبير واحد على الأقل", test: (p) => /[A-Z]/.test(p), met: false },
    { label: "حرف صغير واحد على الأقل", test: (p) => /[a-z]/.test(p), met: false },
    { label: "رقم واحد على الأقل", test: (p) => /\d/.test(p), met: false },
    { label: "رمز خاص واحد على الأقل", test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), met: false },
  ])

  const [strength, setStrength] = useState(0)

  useEffect(() => {
    const updatedRequirements = requirements.map((req) => ({
      ...req,
      met: req.test(password),
    }))

    setRequirements(updatedRequirements)

    const metCount = updatedRequirements.filter((req) => req.met).length
    const strengthPercentage = (metCount / requirements.length) * 100
    setStrength(strengthPercentage)

    // Consider password strong if at least 4 out of 5 requirements are met
    const isStrong = metCount >= 4
    onStrengthChange(isStrong)
  }, [password, onStrengthChange])

  const getStrengthLabel = () => {
    if (strength === 0) return ""
    if (strength < 40) return "ضعيف"
    if (strength < 60) return "متوسط"
    if (strength < 80) return "جيد"
    return "قوي"
  }

  const getStrengthColor = () => {
    if (strength < 40) return "bg-red-500"
    if (strength < 60) return "bg-yellow-500"
    if (strength < 80) return "bg-blue-500"
    return "bg-green-500"
  }

  if (!password) return null

  return (
    <div className="space-y-3 mt-2">
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span>قوة كلمة المرور</span>
          <span
            className={`font-medium ${strength >= 80 ? "text-green-600" : strength >= 60 ? "text-blue-600" : strength >= 40 ? "text-yellow-600" : "text-red-600"}`}
          >
            {getStrengthLabel()}
          </span>
        </div>
        <Progress value={strength} className="h-2" />
      </div>

      <div className="space-y-1">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            {req.met ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
            <span className={req.met ? "text-green-700" : "text-gray-600"}>{req.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
