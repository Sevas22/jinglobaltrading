"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5 bg-[#030508] text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 place-items-center gap-10 sm:gap-12 md:grid-cols-2 md:place-items-stretch lg:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="flex w-full max-w-sm flex-col items-center gap-5 text-center md:max-w-none md:items-start md:text-left">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
              <Logo inverted />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              <span className="rounded-md border border-gold/30 bg-gold/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Importaciones
              </span>
              <span className="rounded-md border border-gold/30 bg-gold/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Exportaciones
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex w-full max-w-sm flex-col items-center gap-5 text-center md:max-w-none md:items-start md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {t.footer.quickLinks}
            </h3>
            <div className="flex flex-col items-center gap-3 md:items-start">
              {[
                { href: "/", label: t.nav.home },
                { href: "/importaciones", label: "Importaciones" },
                { href: "/exportaciones", label: "Exportaciones" },
                { href: "/store", label: t.nav.store },
                { href: "/request", label: t.nav.request },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex w-full max-w-sm flex-col items-center gap-5 text-center md:max-w-none md:items-start md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {t.footer.contactInfo}
            </h3>
            <div className="flex flex-col items-center gap-4 md:items-start">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="text-sm text-white/70">
                  <p>{siteConfig.contact.addressLine1}</p>
                  <p>{siteConfig.contact.addressLine2}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/70">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-white/70">{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex w-full max-w-sm flex-col items-center gap-5 text-center md:max-w-none md:items-start md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {t.footer.newsletter}
            </h3>
            <p className="text-sm text-white/70">{t.footer.newsletterDesc}</p>
            <div className="flex w-full max-w-xs gap-2 md:max-w-none">
              <Input
                placeholder={t.footer.emailPlaceholder}
                className="min-w-0 flex-1 rounded-lg border-white/10 bg-white/5 text-foreground placeholder:text-white/40 focus-visible:ring-gold/50"
              />
              <Button size="icon" className="h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 rounded-lg bg-gold text-navy hover:bg-gold/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:mt-12 sm:pt-10 md:flex-row lg:mt-16 lg:pt-10">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
            </p>
            <p className="text-xs text-white/50">
              Desarrollado por{" "}
              <a
                href="https://codifikai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                codifikai.com
              </a>
            </p>
          </div>
          <div className="flex justify-center gap-4 md:justify-end">
            <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-white/60 hover:text-gold transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
