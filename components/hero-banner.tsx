"use client"

import { ArrowRight, Globe, Mail, MessageCircle, Package, Phone, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

interface HeroBannerProps {
  title: string
  subtitle: string
  image?: string
  /** Overlay más cálido con tonos rojo/dorado para tienda y maquinaria */
  overlayVariant?: "default" | "store"
}

export function HeroBanner({ title, subtitle, image, overlayVariant = "default" }: HeroBannerProps) {
  return (
    <section className="trade-stars-bg relative flex min-h-[480px] items-center overflow-hidden pb-16 pt-32">
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <img
          src="/brand/hero-skyline.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Overlay corporativo oscuro */}
      <div
        className={`absolute inset-0 ${
          overlayVariant === "store"
            ? "bg-gradient-to-r from-[#05070c]/75 via-[#05070c]/55 to-[#05070c]/25"
            : "bg-gradient-to-r from-[#05070c]/65 via-[#05070c]/45 to-transparent"
        }`}
      />
      {overlayVariant === "store" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-black/10" />
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_340px]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold backdrop-blur-sm">
              JIN Global Trading
            </div>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              {subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-gold" />
                Importaciones productivas
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-gold" />
                Exportaciones internacionales
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-[#0c0f18]/98 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-all hover:border-gold/30">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.32em] text-foreground/90">
                Zonas de enfoque
              </p>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-foreground/70">
                Global y servicios
              </p>
              <h3 className="mb-6 text-xl font-semibold leading-tight text-foreground">
                Comercio exterior para PYMES. Importaciones y exportaciones.
              </h3>

              <div className="mb-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">Mercados</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { code: "us", name: "Estados Unidos" },
                    { code: "eu", name: "Europa" },
                    { code: "cn", name: "China" },
                    { code: "sg", name: "Singapur" },
                    { code: "sa", name: "Arabia Saudita" },
                    { code: "tr", name: "Turquía" },
                    { code: "ve", name: "Venezuela" },
                  ].map(({ code, name }) => (
                    <img
                      key={code}
                      src={`https://flagcdn.com/w40/${code}.png`}
                      alt={name}
                      title={name}
                      className="h-7 w-10 rounded-sm object-cover shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>

              <div className="mb-5 space-y-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">Servicios</p>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Globe className="h-4 w-4 shrink-0 text-gold/80" />
                  <span>Importaciones</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Package className="h-4 w-4 shrink-0 text-gold/80" />
                  <span>Exportaciones</span>
                </div>
              </div>

              <div className="mb-5 space-y-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">Contacto</p>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-gold/80" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-gold/80" />
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>

              <Button
                asChild
                size="sm"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-navy shadow-lg hover:bg-gold/90"
              >
                <a href="https://wa.link/enpj7c" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Hablar con un asesor
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
