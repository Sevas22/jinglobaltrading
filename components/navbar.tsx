"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/importaciones", label: "Importaciones" },
    { href: "/exportaciones", label: "Exportaciones" },
    { href: "/store", label: t.nav.store },
    { href: "/request", label: t.nav.request },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#05070c]/98 shadow-xl backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8 lg:py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <Logo inverted />
        </Link>

        {/* Desktop Nav - premium corporativo */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const isRfq = link.href === "/request"
            const rfqClasses = "animate-rfq-attention bg-gold text-navy font-semibold shadow-lg hover:bg-gold/90"
            const baseClasses = isRfq
              ? rfqClasses
              : isActive(link.href)
                ? "bg-white/10 text-white font-medium"
                : "text-white/85 hover:bg-white/5 hover:text-white font-medium"
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-all duration-200 ${baseClasses} ${isRfq ? "" : ""}`}
              >
                {isRfq && <MessageCircle className="h-4 w-4" />}
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side: Mobile menu */}
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 min-h-[44px] min-w-[44px] rounded-lg text-white/90 hover:bg-white/10 hover:text-white md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,calc(100vw-2rem))] border-l border-white/10 bg-[#0a0d14]">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col gap-1 pt-6 pb-8">
                {navLinks.map((link) => {
                  const isRfq = link.href === "/request"
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-[44px] items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                        isRfq
                          ? "animate-rfq-attention bg-gold text-navy shadow-lg"
                          : isActive(link.href)
                            ? "bg-white/10 text-white"
                            : "text-white/85 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {isRfq && <MessageCircle className="h-4 w-4" />}
                      {link.label}
                    </Link>
                  )
                })}
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white/80"
                >
                  {t.nav.admin}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
