import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"
import { MainNav } from "@/components/main-nav"
import { MobileNavigation } from "@/components/mobile-navigation"
import { AIChat } from "@/components/ai-chat"
import { UserProfile } from "@/components/user-profile"
import { HeaderButtons } from "@/components/header-buttons"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { DynamicNavigation } from "@/components/dynamic-navigation"
import { ErrorBoundary } from "@/components/error-boundary"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata = {
  title: "نظام إدارة الوكالات | الصفحة الرئيسية",
  description: "نظام إدارة الوكالات - خدمات متكاملة للبث المباشر وإدارة المذيعين",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-icon.png",
  },
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-4 lg:gap-6">
                    <Logo size="sm" showText={false} href="/" className="sm:hidden" />
                    <Logo size="md" showText={true} href="/" className="hidden sm:flex" />
                    <ErrorBoundary fallback={<div className="hidden md:block text-sm">خطأ في تحميل القائمة</div>}>
                      <MainNav className="hidden md:flex" />
                    </ErrorBoundary>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <ErrorBoundary fallback={<div className="md:hidden">خطأ في تحميل القائمة</div>}>
                      <MobileNavigation />
                    </ErrorBoundary>
                    <ModeToggle />
                    <UserProfile />
                    <HeaderButtons />
                  </div>
                </div>
              </header>
              <DynamicNavigation />
              <main className="flex-1 w-full">{children}</main>
              <footer className="border-t py-4 sm:py-6">
                <div className="container px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-center text-xs sm:text-sm text-muted-foreground md:text-right">
                    &copy; {new Date().getFullYear()} نظام إدارة الوكالات. جميع الحقوق محفوظة.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
                    <Button
                      variant="link"
                      asChild
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary p-1 sm:p-2"
                    >
                      <Link href="/terms">الشروط والأحكام</Link>
                    </Button>
                    <Button
                      variant="link"
                      asChild
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary p-1 sm:p-2"
                    >
                      <Link href="/privacy">سياسة الخصوصية</Link>
                    </Button>
                    <Button
                      variant="link"
                      asChild
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary p-1 sm:p-2"
                    >
                      <Link href="/contact">اتصل بنا</Link>
                    </Button>
                  </div>
                </div>
              </footer>
              <AIChat />
              <Toaster />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
