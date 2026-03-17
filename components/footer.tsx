"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Logo } from "@/components/logo"
import { siteConfig } from "@/lib/site-config"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/jinglobaltrading", Icon: Facebook, label: "Facebook" },
  { href: "https://www.tiktok.com/@jinglobaltrading", Icon: TikTokIcon, label: "TikTok" },
  { href: "https://www.instagram.com/jinglobaltrading", Icon: Instagram, label: "Instagram" },
  { href: "mailto:negocios@jinglobaltrading.com", Icon: Mail, label: "Email" },
  { href: "https://www.youtube.com/channel/UCFDU9hz2yzq1ysElh6VgnBw", Icon: Youtube, label: "YouTube" },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-gold/30 bg-[#030508] text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 place-items-center gap-10 divide-y divide-gold/30 sm:gap-12 md:grid-cols-2 md:place-items-stretch md:divide-y-0 md:divide-x md:divide-gold/30 lg:grid-cols-4 lg:gap-16">
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

          {/* Redes sociales */}
          <div className="flex w-full max-w-sm flex-col items-center gap-5 text-center md:max-w-none md:items-start md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Redes sociales
            </h3>
            <div className="grid grid-cols-3 gap-2 place-items-center md:place-items-start">
              {SOCIAL_LINKS.slice(0, 3).map(({ href, Icon, label }) => {
                const isMailto = href.startsWith("mailto:")
                return (
                  <a
                    key={label}
                    href={href}
                    {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
              <div className="col-span-3 flex justify-center gap-2 md:justify-start">
                {SOCIAL_LINKS.slice(3).map(({ href, Icon, label }) => {
                  const isMailto = href.startsWith("mailto:")
                  return (
                    <a
                      key={label}
                      href={href}
                      {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-gold/30 pt-8 text-center sm:mt-12 sm:pt-10 md:flex-row md:gap-8 lg:mt-16 lg:pt-10">
          <div className="flex flex-col items-center gap-1">
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
        </div>
      </div>
    </footer>
  )
}
