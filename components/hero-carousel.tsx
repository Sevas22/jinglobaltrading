"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, CircleCheckBig, Globe, Mail, MessageCircle, Package, PackageCheck, Phone, ShieldCheck, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { siteConfig } from "@/lib/site-config"

const slides = [
  {
    image: "/images/jin/global-link-ship.png",
    alt: "Buque GLOBAL LINK en puerto con grúas y contenedores",
  },
  {
    image: "/images/jin/jin-hero-wide.png",
    alt: "Vista aérea de terminal portuaria con Maersk, COSCO y contenedores",
  },
  {
    image: "/images/jin/project-cargo-lift.png",
    alt: "Buque GLOBAL VOYAGER cargando contenedores en puerto",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  const titles = [t.hero.slide1Title, t.hero.slide2Title, t.hero.slide3Title]
  const subs = [t.hero.slide1Sub, t.hero.slide2Sub, t.hero.slide3Sub]
  const highlights = [
    { icon: CircleCheckBig, label: "USA · Europa · Asia" },
    { icon: PackageCheck, label: "Importaciones productivas" },
    { icon: ShieldCheck, label: "Comercialización internacional" },
  ]

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="trade-stars-bg relative w-full overflow-hidden bg-[#05070c] min-h-[85vh] sm:min-h-[88vh] md:min-h-[90vh] lg:h-[95vh] lg:min-h-[640px] xl:min-h-[720px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070c]/70 via-[#05070c]/50 to-[#05070c]/20" />
        </div>
      ))}

      {/* Overlay: mapa mundial - estilo corporativo */}
      <div className="pointer-events-none absolute inset-0 z-[5] opacity-[0.08]">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/brand/world-map-bg.svg)" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_80%_60%_at_25%_15%,rgba(178,31,42,0.12),transparent_45%)]" />

      <div className="relative z-10 flex min-h-[85vh] items-center sm:min-h-[88vh] md:min-h-[90vh] lg:h-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 pt-24 pb-20 sm:pt-28 sm:gap-10 md:pb-24 lg:grid-cols-[minmax(0,1.2fr)_380px] lg:pt-20 lg:pb-16">
            <div className="mx-auto w-full max-w-3xl text-center md:mx-0 md:text-left">
              <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.24em] md:inline-flex">
                Import & Export Trading Company
              </div>

              <h1
                key={`title-${current}`}
                className="animate-in fade-in slide-in-from-bottom-4 mb-4 max-w-2xl text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl sm:mb-5 md:mb-4 md:text-5xl lg:text-6xl xl:text-7xl md:max-w-none"
                style={{ animationDuration: "700ms" }}
              >
                {titles[current]}
              </h1>

              <p
                key={`sub-${current}`}
                className="animate-in fade-in slide-in-from-bottom-4 mx-auto mb-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/90 sm:mb-8 sm:text-base md:mx-0 md:text-lg"
                style={{ animationDuration: "700ms", animationDelay: "150ms", animationFillMode: "backwards" }}
              >
                {subs[current]}
              </p>

              <div
                className="animate-in fade-in slide-in-from-bottom-4 mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3 md:justify-start"
                style={{ animationDuration: "700ms", animationDelay: "230ms", animationFillMode: "backwards" }}
              >
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <item.icon className="h-3.5 w-3.5 shrink-0 text-gold sm:h-4 sm:w-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div
                className="animate-in fade-in slide-in-from-bottom-4 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:justify-start"
                style={{ animationDuration: "700ms", animationDelay: "300ms", animationFillMode: "backwards" }}
              >
                <Button asChild size="lg" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 font-semibold text-navy shadow-xl hover:bg-gold/90 sm:px-6">
                  <a href="https://wa.link/enpj7c" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {t.hero.ctaSecondary}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10 sm:px-6"
                >
                  <Link href="/store" className="flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    {t.hero.cta}
                  </Link>
                </Button>
              </div>
            </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 hidden lg:block" style={{ animationDuration: "700ms", animationDelay: "380ms", animationFillMode: "backwards" }}>
              <div className="rounded-2xl border border-white/10 bg-[#0c0f18]/98 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-all hover:border-gold/30 hover:shadow-gold/5">
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

                <div className="space-y-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:border-gold/40 hover:bg-gold/20 sm:left-4 sm:h-11 sm:w-11"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:border-gold/40 hover:bg-gold/20 sm:right-4 sm:h-11 sm:w-11"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8 sm:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-10 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
