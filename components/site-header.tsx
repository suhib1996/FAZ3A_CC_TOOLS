import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 space-x-reverse md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 hidden items-center space-x-2 md:flex">
              <Image
                src="/images/logo-new.png"
                alt="نظام إدارة الوكالات"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="hidden font-bold sm:inline-block">نظام إدارة الوكالات</span>
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                تسجيل الدخول
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">انضم الآن</Button>
            </Link>
            <ModeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  )
}
