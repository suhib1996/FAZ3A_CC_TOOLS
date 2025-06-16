"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// Define user roles
export type UserRole = "guest" | "broadcaster" | "agent" | "admin"

// Define user interface
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  platform?: string
  badges?: number
  revenue?: number
  status?: "active" | "inactive" | "banned"
  createdAt: Date
}

// Auth context interface
interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: Partial<User>, password: string) => Promise<boolean>
  logout: () => void
  hasPermission: (requiredRoles: UserRole[]) => boolean
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Sample user data for simulation
const SAMPLE_USERS: Record<string, { user: User; password: string }> = {
  "admin@khalakfakhem.com": {
    user: {
      id: "USR-001",
      name: "مدير النظام",
      email: "admin@khalakfakhem.com",
      role: "admin",
      avatar: "/placeholder.svg?height=36&width=36",
      badges: 5,
      status: "active",
      createdAt: new Date(2024, 0, 1),
    },
    password: "admin123",
  },
}

// Create the auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("khalak-fakhem-user")
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser)
        setUser({
          ...userData,
          createdAt: new Date(userData.createdAt),
        })
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("khalak-fakhem-user")
      }
    }
    setIsLoading(false)
  }, [])

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    const userRecord = SAMPLE_USERS[email.toLowerCase()]
    if (userRecord && userRecord.password === password) {
      setUser(userRecord.user)
      localStorage.setItem("khalak-fakhem-user", JSON.stringify(userRecord.user))
      return true
    }
    return false
  }

  // Register function
  const register = async (userData: Partial<User>, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if email already exists
    if (userData.email && SAMPLE_USERS[userData.email.toLowerCase()]) {
      return false
    }

    // In a real application, this would create a new user in the database
    // For simulation, we'll just acknowledge success
    return true
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem("khalak-fakhem-user")
    router.push("/")
  }

  // Permission check helper
  const hasPermission = (requiredRoles: UserRole[]): boolean => {
    if (!user) return false
    return requiredRoles.includes(user.role)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
