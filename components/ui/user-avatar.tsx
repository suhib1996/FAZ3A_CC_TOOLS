"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

interface UserAvatarProps {
  src?: string | null
  name?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  fallbackIcon?: boolean
}

export function UserAvatar({ src, name, size = "md", className = "", fallbackIcon = true }: UserAvatarProps) {
  const sizeMap = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  }

  const getInitials = () => {
    if (!name) return "U"
    const nameParts = name.split(" ")
    if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase()
    return `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`.toUpperCase()
  }

  return (
    <Avatar className={`${sizeMap[size]} ${className}`}>
      <AvatarImage src={src || undefined} alt={name ? `صورة ${name}` : "صورة المستخدم"} className="object-cover" />
      <AvatarFallback className="bg-primary/10 text-primary">
        {name ? getInitials() : fallbackIcon ? <User className="h-4 w-4" /> : "U"}
      </AvatarFallback>
    </Avatar>
  )
}
