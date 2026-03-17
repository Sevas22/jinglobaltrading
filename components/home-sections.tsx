"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Crown,
  CreditCard,
  Facebook,
  Globe,
  Handshake,
  Instagram,
  Landmark,
  Leaf,
  Linkedin,
  Network,
  Play,
  Check,
  ShieldCheck,
  Ship,
  Truck,
  Wine,
  Sprout,
  Wheat,
  Factory,
  Shirt,
  HardHat,
  Box,
  Wrench,
  UtensilsCrossed,
  Tractor,
  Sofa,
  Carrot,
  Package,
  Star,
  CalendarCheck,
  ShoppingBag,
  MessageCircle,
  Users,
  TrendingUp,
  LineChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { useLanguage } from "@/contexts/language-context"
import { siteConfig } from "@/lib/site-config"

const EarthGlobe = dynamic(() => import("@/components/earth-globe").then((m) => ({ default: m.EarthGlobe })), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a0f1a]">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-gold/40 border-t-gold" />
    </div>
  ),
})

const WHATSAPP_URL = "https://wa.link/enpj7c"

function useCountUp(end: number, suffix: string, duration: number, isVisible: boolean) {
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(easeOut * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  const formatted = suffix === "/7" ? String(value) : String(value).padStart(2, "0")
  return `${formatted}${suffix}`
}

export function StatsSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2, rootMargin: "50px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const stat1 = useCountUp(120, "+", 2200, isVisible)
  const stat2 = useCountUp(18, "", 2200, isVisible)
  const stat3 = useCountUp(45, "+", 2200, isVisible)
  const stat4 = useCountUp(95, "%", 2200, isVisible)

  const stats = [
    { value: stat1, label: "Operaciones gestionadas" },
    { value: stat2, label: "Proveedores internacionales" },
    { value: stat3, label: "Proyectos industriales" },
    { value: stat4, label: "Clientes recurrentes" },
  ]

  return (
    <section ref={sectionRef} className="trade-stars-bg relative border-y border-white/5 bg-[#080b12] py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(var(--gold-rgb),0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Mercados a los que llegamos
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="mb-2 text-4xl font-extrabold tracking-tight text-gold md:text-5xl tabular-nums">
                {s.value}
              </span>
              <span className="text-sm font-medium text-white/60">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QuienesSomosSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05, rootMargin: "120px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const stat1 = useCountUp(8, "+", 900, isVisible)
  const stat2 = useCountUp(6, "", 900, isVisible)
  const stat3 = useCountUp(30, "+", 900, isVisible)
  const stat4 = useCountUp(24, "/7", 900, isVisible)

  const integramos = [
    "Importaciones productivas",
    "Comercialización internacional",
    "Financiamiento",
    "Logística internacional",
  ]

  const stats = [
    { value: stat1, label: "Años en comercio internacional" },
    { value: stat2, label: "Mercados destino" },
    { value: stat3, label: "Alianzas estratégicas" },
    { value: stat4, label: "Acompañamiento" },
  ]

  return (
    <section ref={sectionRef} className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_20%,rgba(var(--primary-rgb),0.16),transparent_55%),radial-gradient(ellipse_70%_80%_at_80%_90%,rgba(var(--gold-rgb),0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] lg:items-center lg:gap-14">
          {/* Columna izquierda: tarjeta con logo y overlays */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#050812] shadow-[0_30px_80px_rgba(0,0,0,0.75)]">
              <img
                src="/brand/jin-logo.png"
                alt="JIN Global Trading - perfil de marca"
                className="h-full w-full object-contain object-center bg-[#050812] py-6"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                <Globe className="h-4 w-4 text-gold" />
                Operaciones de comercio internacional y logística
              </div>

              <div className="absolute inset-x-5 bottom-5 flex justify-start">
                <div className="rounded-2xl bg-black/80 px-4 py-3 text-xs text-white/90 shadow-lg backdrop-blur">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                    Red global
                  </p>
                  <p className="text-sm font-semibold">
                    USA · Europa · Asia · Venezuela
                  </p>
                  <p className="mt-0.5 text-[12px] text-white/75">
                    Importaciones e exportaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: contenido tipo “Sobre JIN Global Trading” */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-3 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-gold">
              Perfil de marca
            </div>
            <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Sobre JIN Global Trading
            </h2>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              Integrador de importaciones productivas y exportaciones
            </p>

            <p className="mb-3 text-sm font-bold text-gold">Integramos:</p>
            <ul className="mb-5 space-y-1.5">
              {integramos.map((item) => (
                <li key={item} className="flex items-center justify-center gap-2 text-sm text-white/85 lg:justify-start">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-3 text-sm leading-relaxed text-white/80">
              Integramos importaciones de maquinaria e insumos con programas de exportación
              para PYMES y productores agroindustriales.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Conectamos PYMES con mercados globales. Reducimos costos, optimizamos
              productividad y abrimos puertas internacionales.
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {["Importaciones", "Exportaciones", "Estructuración financiera"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid w-full min-w-0 max-w-md grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-none">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-0 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#050812]/90 px-4 py-4 text-center shadow-sm"
                >
                  <p className="mb-2 text-2xl font-extrabold tabular-nums text-gold md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="min-w-0 break-words text-[10px] font-medium uppercase leading-tight tracking-[0.12em] text-white/75 sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const { t } = useLanguage()
  const steps = [
    { num: "01", title: t.process.step1, desc: t.process.step1Desc },
    { num: "02", title: t.process.step2, desc: t.process.step2Desc },
    { num: "03", title: t.process.step3, desc: t.process.step3Desc },
    { num: "04", title: t.process.step4, desc: t.process.step4Desc },
  ]
  return (
    <section className="trade-stars-bg relative overflow-hidden bg-background py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(var(--primary-rgb),0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
            {t.process.eyebrow}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t.process.title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">{t.process.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-card/80 p-6 transition-all hover:border-gold/30 hover:bg-card"
            >
              <span className="mb-4 block text-3xl font-extrabold text-gold/50">{step.num}</span>
              <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-gold/30 lg:block">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CertificationsSection() {
  const { t } = useLanguage()
  const badges = [
    "Proveedores verificados",
    "Documentación en regla",
    "Cumplimiento aduanero",
    "Logística trazable",
  ]
  return (
    <section className="trade-stars-bg relative overflow-hidden border-y border-white/5 bg-[#080b12] py-12 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            {t.certifications.eyebrow}
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.certifications.title}
          </h2>
          <p className="text-white/70">{t.certifications.subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((b) => (
            <div
              key={b}
              className="flex items-center gap-2 rounded-xl border border-gold/20 bg-white/5 px-6 py-4 backdrop-blur-sm"
            >
              <ShieldCheck className="h-5 w-5 text-gold" />
              <span className="font-semibold text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ValuesSection() {
  const { t } = useLanguage()

  const values = [
    {
      icon: "/brand/icon-sourcing.svg",
      title: t.values.quality,
      desc: t.values.qualityDesc,
      cardClass: "border-primary/20 bg-card",
    },
    {
      icon: "/brand/icon-quality.svg",
      title: t.values.focus,
      desc: t.values.focusDesc,
      cardClass: "border-gold/30 bg-card",
    },
    {
      icon: "/brand/icon-logistics.svg",
      title: t.values.innovation,
      desc: t.values.innovationDesc,
      cardClass: "border-primary/20 bg-card",
    },
    {
      icon: "/brand/icon-market.svg",
      title: t.values.global,
      desc: t.values.globalDesc,
      cardClass: "border-gold/30 bg-card",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-secondary/80 via-background to-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Fortalezas
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.values.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Card
              key={i}
              className={`overflow-hidden border shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl ${v.cardClass}`}
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-2xl bg-secondary/60 p-3 shadow-sm">
                  <img src={v.icon} alt={v.title} className="h-16 w-16" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const pillars = [
    "Importaciones",
    "Exportaciones",
    "Estructuración financiera",
  ]

  const integramos = [
    "Importaciones productivas",
    "Comercialización internacional",
    "Financiamiento",
    "Logística internacional",
  ]

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_30%,rgba(var(--primary-rgb),0.1),transparent_50%),radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(var(--gold-rgb),0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Columna izquierda: imagen y tarjetas */}
          <div className="flex w-full flex-col items-center gap-5 lg:items-stretch">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/jin/port-aerial-1.png"
                alt="Operaciones de comercio internacional y logística"
                className="h-[400px] w-full object-cover md:h-[460px]"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <Leaf className="h-4 w-4 shrink-0 text-gold" />
                  Operaciones de comercio internacional y logística
                </div>
              </div>
              <div className="rounded-xl border border-gold/30 bg-gold/10 p-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Red global</p>
                <p className="mt-1.5 text-base font-bold text-foreground">USA · Europa · Asia · Venezuela</p>
                <p className="mt-0.5 text-sm text-white/70">Importaciones y exportaciones.</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: contenido */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-5 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
              Perfil de marca
            </div>
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>
            <p className="mb-6 text-lg font-semibold text-gold">{t.about.subtitle}</p>

            {/* Integramos */}
            <p className="mb-2 text-sm font-bold text-gold">Integramos:</p>
            <ul className="mb-6 space-y-2">
              {integramos.map((item) => (
                <li key={item} className="flex items-center justify-center gap-2 text-sm text-white/80 lg:justify-start">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-3 leading-relaxed text-white/80">{t.about.p1}</p>
            <p className="mb-6 leading-relaxed text-white/80">{t.about.p2}</p>

            <div className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {pillar}
                </div>
              ))}
            </div>

            <Button asChild className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-navy font-semibold shadow-lg hover:bg-gold/90">
              <Link href="/store" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                {t.about.discover}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const EXPORT_HOTSPOTS = [
  { id: "usa", label: "Estados Unidos", code: "USA", flagCode: "us", x: 22, y: 32, desc: "Exportamos alimentos y productos agroindustriales a Estados Unidos." },
  { id: "europa", label: "Europa", code: "EUR", flagCode: "eu", x: 48, y: 28, desc: "Mercado de exportación activo en la Unión Europea (Alemania, España, Francia y más)." },
  { id: "medio-oriente", label: "Medio Oriente", code: "MOR", flagCode: "sa", x: 58, y: 42, desc: "Exportaciones a Arabia Saudita, Emiratos y la región." },
  { id: "venezuela", label: "Venezuela", code: "VEN", flagCode: "ve", x: 28, y: 58, desc: "Mercado destino prioritario para exportaciones." },
  { id: "china", label: "China", code: "CHN", flagCode: "cn", x: 82, y: 32, desc: "Red de comercialización con importadores en China." },
]

/* Texturas de Tierra: estilo realista desde el espacio (océanos azules, nubes, atmósfera) */
const EARTH_TEXTURE_OPTIONS = [
  "/images/jin/earth-texture.jpg",
  "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg",
]

export function ExportCountriesSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [textureIndex, setTextureIndex] = useState(0)
  const [textureError, setTextureError] = useState(false)
  const EARTH_TEXTURE_URL = EARTH_TEXTURE_OPTIONS[textureIndex]

  const handleTextureError = () => {
    if (textureIndex < EARTH_TEXTURE_OPTIONS.length - 1) {
      setTextureIndex((i) => i + 1)
    } else {
      setTextureError(true)
    }
  }

  const handleHotspotClick = (id: string) => {
    const newSelected = selectedRegion === id ? null : id
    setSelectedRegion(newSelected)
  }

  const activeHotspot = selectedRegion
  const activeInfo = EXPORT_HOTSPOTS.find((h) => h.id === activeHotspot)

  return (
    <section className="trade-stars-bg relative overflow-hidden py-12 sm:py-16 lg:py-24 text-foreground">
      {/* Fondo de estrellas */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/brand/starry-field-bg.png)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(/brand/space-main-bg.png)",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-navy/80 to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,rgba(var(--primary-rgb),0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.08),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
            radial-gradient(1.5px 1.5px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1.5px 1.5px at 200px 50px, white, transparent),
            radial-gradient(1px 1px at 350px 150px, white, transparent),
            radial-gradient(1.5px 1.5px at 500px 40px, white, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            <Globe className="h-4 w-4" />
            Mercados de exportación
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Países a los que{" "}
            <span className="bg-gradient-to-r from-gold via-gold to-primary bg-clip-text text-transparent">
              exportamos
            </span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Pasa el cursor o haz clic en un punto para ver cada país
          </p>
        </div>

        {/* Planeta Tierra interactivo */}
        <div className="relative mx-auto mb-14 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border-2 border-gold/40 bg-card/95 p-6 shadow-[0_0_60px_-15px_rgba(var(--gold-rgb),0.15),0_0_40px_-10px_rgba(var(--primary-rgb),0.1)] backdrop-blur-md md:p-10">
            <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-stretch">
              <div className="relative flex flex-1 items-center justify-center">
                <div className="relative flex min-h-[240px] min-w-[240px] items-center justify-center sm:min-h-[280px] sm:min-w-[280px] md:min-h-[320px] md:min-w-[320px] lg:min-h-[380px] lg:min-w-[380px]">
                  <div className="relative h-[220px] w-[220px] shrink-0 overflow-hidden rounded-full border-2 border-gold/50 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,#1e3a5f_0%,#0f172a_40%,#020617_100%)] shadow-[inset_0_0_80px_rgba(30,58,95,0.4)] sm:h-[260px] sm:w-[260px] md:h-[300px] md:w-[300px] lg:h-[360px] lg:w-[360px]">
                    <EarthGlobe
                      textureUrl={textureError ? EARTH_TEXTURE_OPTIONS[1] : EARTH_TEXTURE_URL}
                      hotspots={EXPORT_HOTSPOTS.map(({ id, lat, lon }) => ({ id, lat, lon }))}
                      activeId={activeHotspot}
                      focusId={selectedRegion}
                      onSelect={(id) => handleHotspotClick(id)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full min-w-0 flex-col lg:w-80">
                {activeInfo ? (
                  <div className="rounded-2xl border-2 border-gold/40 bg-card/95 p-6 shadow-xl backdrop-blur-md transition-all">
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src={`https://flagcdn.com/w80/${activeInfo.flagCode}.png`}
                        alt=""
                        className="h-8 w-11 rounded object-cover"
                      />
                      <h3 className="text-xl font-bold text-foreground">{activeInfo.label}</h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{activeInfo.desc}</p>
                    <p className="text-xs text-muted-foreground/80">Mercado de exportación activo</p>
                    {selectedRegion && (
                      <button
                        type="button"
                        onClick={() => setSelectedRegion(null)}
                        className="mt-4 text-xs font-semibold text-gold underline-offset-2 hover:underline"
                      >
                        Cerrar
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/40 bg-card/60 p-8 text-center">
                    <Globe className="mb-3 h-12 w-12 text-gold/60" />
                    <p className="text-sm font-medium text-muted-foreground">Pasa el cursor o haz clic en un punto</p>
                    <p className="mt-1 text-xs text-muted-foreground/80">para ver los países a los que exportamos</p>
                  </div>
                )}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:justify-start md:gap-x-5 md:gap-y-4">
                  {EXPORT_HOTSPOTS.map((h) => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => handleHotspotClick(h.id)}
                      className={`flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-bold shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-[1.03] ${
                        selectedRegion === h.id
                          ? "border-gold bg-primary/25 text-foreground shadow-gold/20"
                          : "border-gold/50 bg-card/80 text-foreground hover:border-gold hover:bg-primary/10"
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${h.flagCode}.png`}
                        alt=""
                        className="h-5 w-7 rounded-sm object-cover"
                      />
                      <span>{h.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dos fichas: Somos un integrador estratégico */}
        <h3 className="mb-8 text-center text-xl font-extrabold uppercase tracking-wide text-gold md:text-2xl">
          Somos un integrador estratégico
        </h3>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Ficha: 250 proveedores verificados */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-gradient-to-b from-[#0c0f18] to-[#05070c] p-8 shadow-[0_0_0_1px_rgba(212,164,71,0.2),0_20px_50px_-15px_rgba(0,0,0,0.5),0_0_40px_-10px_rgba(212,164,71,0.08)] backdrop-blur-md transition-all duration-300 hover:border-gold/60 hover:shadow-[0_0_0_1px_rgba(212,164,71,0.35),0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_60px_-15px_rgba(212,164,71,0.15)] hover:-translate-y-1 md:p-10">
            <div className="absolute right-0 top-0 h-32 w-40 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/20 ring-2 ring-gold/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/25 group-hover:ring-gold/50">
                <ShieldCheck className="h-7 w-7 text-gold" />
              </div>
              <p className="text-lg font-bold leading-snug text-white md:text-xl">
                <span className="bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">250</span>{" "}
                proveedores industriales internacionales verificados
              </p>
            </div>
          </div>

          {/* Ficha: Redes de distribución */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-gradient-to-b from-[#0c0f18] to-[#05070c] p-8 shadow-[0_0_0_1px_rgba(212,164,71,0.2),0_20px_50px_-15px_rgba(0,0,0,0.5),0_0_40px_-10px_rgba(212,164,71,0.08)] backdrop-blur-md transition-all duration-300 hover:border-gold/60 hover:shadow-[0_0_0_1px_rgba(212,164,71,0.35),0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_60px_-15px_rgba(212,164,71,0.15)] hover:-translate-y-1 md:p-10">
            <div className="absolute right-0 top-0 h-32 w-40 bg-gradient-to-bl from-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/20 ring-2 ring-gold/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/25 group-hover:ring-gold/50">
                <Network className="h-7 w-7 text-gold" />
              </div>
              <p className="text-lg font-bold leading-snug text-white md:text-xl">
                Redes de distribución activas en
              </p>
              <p className="mt-3 text-sm font-medium text-white/70">
                USA · Europa · Asia · Medio Oriente · Venezuela
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StrategicIntegratorSection() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [globeRotation, setGlobeRotation] = useState(0)
  const [earthTextureError, setEarthTextureError] = useState(false)
  const EARTH_TEXTURE_URL =
    "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"

  const suppliers = [
    { label: "China", flag: "🇨🇳" },
    { label: "Europa", flag: "🇪🇺" },
    { label: "Estados Unidos", flag: "🇺🇸" },
  ]

  const hotspots = [
    { id: "usa", label: "Estados Unidos", code: "USA", flagCode: "us", x: 22, y: 32, desc: "Red de distribución y proveedores en Estados Unidos." },
    { id: "europa", label: "Europa", code: "EUR", flagCode: "eu", x: 48, y: 28, desc: "Proveedores industriales y redes de distribución en la UE." },
    { id: "medio-oriente", label: "Medio Oriente", code: "MOR", flagCode: "sa", x: 58, y: 42, desc: "Red de distribución activa en la región." },
    { id: "venezuela", label: "Venezuela", code: "VEN", flagCode: "ve", x: 28, y: 58, desc: "Mercado destino y operaciones logísticas activas." },
    { id: "china", label: "China", code: "CHN", flagCode: "cn", x: 82, y: 32, desc: "Proveedores industriales y redes de comercio con China." },
  ]

  const handleHotspotClick = (id: string) => {
    const newSelected = selectedRegion === id ? null : id
    setSelectedRegion(newSelected)
    if (newSelected) {
      const h = hotspots.find((x) => x.id === id)!
      const hx = h.x * 2
      const hy = h.y * 2
      const angle = Math.atan2(hy - 100, hx - 100)
      const rotationDeg = -angle * (180 / Math.PI)
      setGlobeRotation(rotationDeg)
    } else {
      setGlobeRotation(0)
    }
  }

  const activeHotspot = selectedRegion || hoveredRegion
  const activeInfo = hotspots.find((h) => h.id === activeHotspot)

  return (
    <section className="trade-stars-bg relative overflow-hidden py-12 sm:py-16 lg:py-24 text-foreground">
      {/* Fondo: navy con acentos primary y gold de la marca */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,rgba(var(--primary-rgb),0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(var(--primary-rgb),0.06),transparent_40%)]" />
      {/* Estrellas sutiles */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 20px 30px, white, transparent),
            radial-gradient(1.5px 1.5px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1.5px 1.5px at 130px 80px, white, transparent),
            radial-gradient(1px 1px at 160px 120px, white, transparent),
            radial-gradient(1.5px 1.5px at 200px 50px, white, transparent),
            radial-gradient(1px 1px at 250px 90px, white, transparent),
            radial-gradient(1.5px 1.5px at 300px 30px, white, transparent),
            radial-gradient(1px 1px at 350px 150px, white, transparent),
            radial-gradient(1.5px 1.5px at 400px 70px, white, transparent),
            radial-gradient(1px 1px at 450px 110px, white, transparent),
            radial-gradient(1.5px 1.5px at 500px 40px, white, transparent),
            radial-gradient(1px 1px at 550px 80px, white, transparent),
            radial-gradient(1.5px 1.5px at 600px 130px, white, transparent),
            radial-gradient(1px 1px at 50px 180px, white, transparent),
            radial-gradient(1.5px 1.5px at 150px 200px, white, transparent),
            radial-gradient(1px 1px at 280px 190px, white, transparent),
            radial-gradient(1.5px 1.5px at 380px 210px, white, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            <Globe className="h-4 w-4" />
            Alcance global
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.15em] text-foreground md:text-4xl lg:text-5xl">
            Somos un{" "}
            <span className="bg-gradient-to-r from-gold via-gold to-primary bg-clip-text text-transparent">
              integrador estratégico
            </span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Haz clic en un punto o región: el globo girará para llevarte allí
          </p>
        </div>

        {/* Planeta Tierra interactivo con hotspots */}
        <div className="relative mx-auto mb-12 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border-2 border-gold/40 bg-card/95 p-6 shadow-[0_0_60px_-15px_rgba(var(--gold-rgb),0.15),0_0_40px_-10px_rgba(var(--primary-rgb),0.1)] backdrop-blur-md md:p-10">
            <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-stretch">
              {/* Globo Tierra con continentes y hotspots */}
              <div className="relative flex flex-1 items-center justify-center">
                <div className="relative flex min-h-[320px] min-w-[320px] items-center justify-center md:min-h-[380px] md:min-w-[380px]">
                  <div
                    className="flex items-center justify-center"
                    style={{ transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)", transform: `rotate(${globeRotation}deg)` }}
                  >
                    <div className="relative h-[300px] w-[300px] shrink-0 md:h-[360px] md:w-[360px]">
                      {/* Textura real del planeta Tierra con continentes */}
                      {!earthTextureError ? (
                        <div
                          className="absolute inset-0 overflow-hidden rounded-full border-2 border-gold/40 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.3),inset_10px_10px_20px_rgba(255,255,255,0.1)]"
                          style={{ boxShadow: "0 0 0 1px rgba(var(--gold-rgb),0.35)" }}
                        >
                          <img
                            src={EARTH_TEXTURE_URL}
                            alt="Planeta Tierra"
                            className="h-full w-full object-cover"
                            onError={() => setEarthTextureError(true)}
                          />
                        </div>
                      ) : (
                        <div
                          className="absolute inset-0 rounded-full border-2 border-gold/40"
                          style={{
                            background: "linear-gradient(135deg, #0c3d5c 0%, #1a5f8a 30%, #0d4a6e 60%, #062840 100%)",
                            boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.3), inset 10px 10px 20px rgba(255,255,255,0.1)",
                          }}
                        />
                      )}
                      {/* Overlay de brillo 3D */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-full"
                        style={{
                          background: "radial-gradient(ellipse 80% 60% at 30% 25%, rgba(255,255,255,0.2), transparent 50%), radial-gradient(ellipse 60% 80% at 75% 80%, rgba(0,0,0,0.15), transparent 50%)",
                        }}
                      />
                      {/* Hotspots y líneas - SVG overlay */}
                      <svg
                        viewBox="0 0 200 200"
                        className="absolute inset-0 h-full w-full cursor-default"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <g>
                          {hotspots.map((h) => (
                            <line
                              key={`line-${h.id}`}
                              x1={h.x * 2}
                              y1={h.y * 2}
                              x2="100"
                              y2="100"
                              stroke="rgba(var(--gold-rgb),0.7)"
                              strokeWidth="0.8"
                              strokeDasharray="4 2"
                              opacity={activeHotspot === h.id ? 1 : 0.4}
                            />
                          ))}
                          {hotspots.map((h) => {
                            const isActive = activeHotspot === h.id
                            const hx = h.x * 2
                            const hy = h.y * 2
                            return (
                              <g key={h.id} style={{ cursor: "pointer" }}>
                                <circle
                                  cx={hx}
                                  cy={hy}
                                  r="14"
                                  fill="transparent"
                                  onMouseEnter={() => setHoveredRegion(h.id)}
                                  onMouseLeave={() => setHoveredRegion(null)}
                                  onClick={() => handleHotspotClick(h.id)}
                                />
                                {isActive && <circle cx={hx} cy={hy} r="16" fill="var(--gold)" opacity="0.25" />}
                                <circle cx={hx} cy={hy} r="7" fill="none" stroke="var(--gold)" strokeWidth="1.2" opacity={isActive ? 1 : 0.8} />
                                <circle cx={hx} cy={hy} r={isActive ? 5 : 4} fill="var(--primary)" filter="url(#glow)" />
                              </g>
                            )
                          })}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel de información interactivo */}
              <div className="flex w-full min-w-0 flex-col lg:w-80">
                {activeInfo ? (
                  <div className="rounded-2xl border-2 border-gold/40 bg-card/95 p-6 shadow-xl backdrop-blur-md transition-all">
                    <div className="mb-3 flex items-center gap-3">
                      <img
                        src={`https://flagcdn.com/w80/${activeInfo.flagCode}.png`}
                        alt=""
                        className="h-8 w-11 rounded object-cover"
                      />
                      <h3 className="text-xl font-bold text-foreground">{activeInfo.label}</h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{activeInfo.desc}</p>
                    <p className="text-xs text-muted-foreground/80">Red de distribución activa</p>
                    {selectedRegion && (
                      <button
                        type="button"
                        onClick={() => setSelectedRegion(null)}
                        className="mt-4 text-xs font-semibold text-gold underline-offset-2 hover:underline"
                      >
                        Cerrar
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold/40 bg-card/60 p-8 text-center">
                    <Globe className="mb-3 h-12 w-12 text-gold/60" />
                    <p className="text-sm font-medium text-muted-foreground">Pasa el cursor o haz clic en un punto</p>
                    <p className="mt-1 text-xs text-muted-foreground/80">para ver la información de cada región</p>
                  </div>
                )}
              </div>
            </div>

            {/* Etiquetas clickeables */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => handleHotspotClick(h.id)}
                  onMouseEnter={() => setHoveredRegion(h.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold shadow-lg backdrop-blur-sm transition-all hover:scale-105 ${
                    selectedRegion === h.id
                      ? "border-gold bg-primary/25 text-foreground shadow-gold/20"
                      : "border-gold/50 bg-card/80 text-foreground hover:border-gold hover:bg-primary/10"
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/w40/${h.flagCode}.png`}
                    alt=""
                    className="h-5 w-7 rounded-sm object-cover"
                  />
                  <span>{h.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tarjetas informativas */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-card/80 p-8 shadow-xl backdrop-blur-md transition-all hover:border-gold/50 hover:shadow-2xl">
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
            <div className="relative flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/20">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                  250 proveedores industriales internacionales verificados
                </h3>
                <div className="flex flex-wrap gap-2">
                  {suppliers.map((s) => (
                    <div key={s.label} className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold">
                      <span className="text-xl">{s.flag}</span>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-card/80 p-8 shadow-xl backdrop-blur-md transition-all hover:border-gold/50 hover:shadow-2xl">
            <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold/20">
                <Truck className="h-8 w-8 text-gold" />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                  Redes de distribución activas en
                </h3>
                <p className="text-sm text-muted-foreground">
                  USA · Europa · Asia · Medio Oriente · Venezuela · China · Colombia
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {hotspots.map((m) => (
                    <span key={m.id} className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold">
                      {m.flag} {m.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function QueHacemosSection() {
  const services = [
    {
      icon: Ship,
      title: "Importaciones productivas",
      desc: "Ruta exportadora y fuerza de ventas internacional. Conectamos tu oferta con compradores en USA, Europa, Asia, Medio Oriente y Venezuela.",
      href: "/exportaciones",
    },
    {
      icon: Truck,
      title: "Agentes de importaciones / compras industriales",
      desc: "Adquisición de maquinaria, bienes de capital, materias primas e insumos industriales. Proveedores verificados, logística hasta tu planta.",
      href: "/importaciones",
    },
    {
      icon: Handshake,
      title: "Estructuración",
      desc: "Logística, financiera, marketing, legal y aduanera para compras internacionales y para compradores de las exportaciones.",
      href: "/request",
    },
  ]

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#080b12] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
            Qué hacemos
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Comercialización internacional y compras industriales. De principio a fin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] p-8 shadow-xl transition-all hover:-translate-y-2 hover:border-gold/20 hover:shadow-2xl md:p-10"
            >
              <div className="absolute -left-1 -top-1 rounded-br-lg rounded-tl-lg bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
                JINGLOBAL
              </div>
              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold shadow-sm md:h-20 md:w-20">
                  <s.icon className="h-8 w-8 md:h-9 md:w-9" />
                </div>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-foreground md:text-2xl">{s.title}</h3>
              <p className="mb-5 flex-1 text-center text-sm leading-relaxed text-white/70 md:text-base">{s.desc}</p>
              <div className="flex justify-center">
                <a
                  href="https://wa.link/enpj7c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-md transition-all hover:bg-gold/90 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Habla con un asesor
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NuestroObjetivoSection() {
  const WHATSAPP_URL = "https://wa.link/enpj7c"

  return (
    <section className="relative overflow-hidden py-28 text-foreground md:py-36">
      {/* Fondo nebulosa espacial */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/brand/space-nebula-bg.png)",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-[#05070c]/88" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb),0.15),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(var(--gold-rgb),0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-5 lg:px-8">
        <h2 className="mb-6 text-2xl font-extrabold uppercase tracking-[0.2em] text-gold md:text-3xl lg:text-4xl">
          Nuestro objetivo
        </h2>
        <p className="mb-10 text-xl font-bold leading-relaxed text-foreground md:text-2xl lg:text-3xl">
          Reducir costos de producción, aumentar la productividad y abrirte puertas en los mercados internacionales.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gold px-10 py-6 text-lg font-bold text-navy shadow-xl transition-all hover:scale-105 hover:bg-gold/90 hover:shadow-2xl"
        >
          <MessageCircle className="h-5 w-5" />
          Habla con un asesor
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

export function CategoriesSection() {
  const { t } = useLanguage()

  const categories = [
    { icon: Wine, label: t.categories.snacks },
    { icon: Sprout, label: t.categories.beverages },
    { icon: Wheat, label: t.categories.canned },
    { icon: Factory, label: t.categories.produce },
    { icon: Shirt, label: t.categories.grains },
    { icon: HardHat, label: t.categories.spices },
    { icon: Box, label: t.categories.dairy },
    { icon: Wrench, label: t.categories.sauces },
  ]

  return (
    <section className="relative overflow-hidden bg-navy/95 py-12 sm:py-16 lg:py-20 text-foreground">
      {/* Fondo de estrellas suave */}
      <div
        className="absolute inset-0 bg-center bg-repeat"
        style={{
          backgroundImage: "url(/brand/space-stars-bg.png)",
          backgroundSize: "auto",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--gold-rgb),0.24),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(var(--foreground-rgb),0.08),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="relative mb-12 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Sectores
          </div>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.categories.title}
          </h2>
          <p className="text-muted-foreground">{t.categories.subtitle}</p>
        </div>
        <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Link key={i} href="/store">
              <Card className="group cursor-pointer border border-gold/20 bg-white/5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:bg-white/10 hover:shadow-xl hover:shadow-gold/10">
                <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/30 to-primary/20 shadow-inner ring-1 ring-gold/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-gold/20">
                    <cat.icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{cat.label}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            Nuestro equipo
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.team.title}
          </h2>
          <div className="mx-auto flex h-px w-24 items-center justify-center gap-2">
            <div className="h-px flex-1 bg-white/10" />
            <Globe className="h-4 w-4 text-gold" />
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] shadow-xl">
          <div className="flex flex-col items-center p-8 text-center md:p-12">
            <div className="mb-6 flex h-32 w-32 overflow-hidden rounded-full border-4 border-gold/30 bg-muted shadow-lg ring-2 ring-primary/10">
              <img
                src="/images/team/william-gonzalez.png"
                alt={t.team.memberName}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/images/team/avatar-placeholder.svg"
                  e.currentTarget.onerror = null
                }}
              />
            </div>
            <h3 className="mb-1 text-xl font-bold uppercase tracking-wider text-gold">{t.team.memberName}</h3>
            <p className="mb-5 text-sm text-white/70">{t.team.memberRole}</p>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/80">
              {t.team.memberDesc}
            </p>
            <div className="mb-8 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
                  aria-label={s.label}
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-navy font-semibold shadow-lg hover:bg-gold/90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {t.team.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function WhyChooseSection() {
  const { t } = useLanguage()

  const features = [
    { icon: Building2, title: t.whyChoose.experience, desc: t.whyChoose.experienceDesc },
    { icon: ShieldCheck, title: t.whyChoose.qualityAssurance, desc: t.whyChoose.qualityAssuranceDesc },
    { icon: Truck, title: t.whyChoose.reliableService, desc: t.whyChoose.reliableServiceDesc },
    { icon: CreditCard, title: t.whyChoose.competitivePricing, desc: t.whyChoose.competitivePricingDesc },
  ]

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-navy py-12 sm:py-16 lg:py-24 text-foreground">
      {/* Capas de profundidad: gradientes + patrón sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(var(--primary-rgb),0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_100%,rgba(var(--gold-rgb),0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_80%,rgba(var(--primary-rgb),0.08),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold shadow-lg shadow-gold/5">
            Por qué JIN Global
          </div>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.whyChoose.title}
          </h2>
          <p className="text-muted-foreground">{t.whyChoose.subtitle}</p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Acento de esquina */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full border border-gold/30" />

              <div className="relative flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg shadow-primary/20 ring-1 ring-foreground/10">
                  <f.icon className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </div>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CountriesSection() {
  const { t } = useLanguage()

  const markets = [
    { name: "Estados Unidos", code: "USA", flagCode: "us" },
    { name: "Europa", code: "EUR", flagCode: "eu" },
    { name: "Medio Oriente", code: "MOR", flagCode: "sa" },
    { name: "Venezuela", code: "VEN", flagCode: "ve" },
    { name: "China", code: "CHN", flagCode: "cn" },
  ]

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-navy py-12 sm:py-16 lg:py-20 text-foreground">
      {/* Mapa mundial sutil - estilo corporativo ALLWE */}
      <div className="absolute inset-0 opacity-[0.08] bg-cover bg-center" style={{ backgroundImage: "url(/brand/world-map-bg.svg)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(var(--primary-rgb),0.12),transparent_50%),radial-gradient(ellipse_80%_120%_at_100%_100%,rgba(var(--gold-rgb),0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Mercados destino
          </div>
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.countries.title}
          </h2>
          <p className="text-muted-foreground">{t.countries.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {markets.map((market, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-white/5 p-5 text-center shadow-lg backdrop-blur-md transition-all hover:border-gold/40 hover:bg-white/10 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gold/30 bg-white/10 shadow-inner ring-1 ring-white/10 transition-transform group-hover:scale-105">
                <img
                  src={`https://flagcdn.com/w80/${market.flagCode}.png`}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{market.code}</span>
              <span className="text-center text-sm font-medium text-foreground">{market.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTABanner() {
  const { t } = useLanguage()

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#030508] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb),0.15),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(var(--gold-rgb),0.1),transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-foreground/20" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border-[30px] border-foreground/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-5 lg:px-8">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 font-semibold text-navy shadow-xl hover:bg-gold/90"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              {t.cta.button}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-white/60">
            {t.cta.call}{" "}
            <span className="font-semibold text-white/90">{siteConfig.contact.phone}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export function VentajasCompetitivasSection() {
  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border-2 border-gold/40 bg-gold/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-gold">
            Nuestras ventajas competitivas
          </div>
          <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Estructuración aduanera y financiera
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Estructuración financiera para importadores y compradores en mercados internacionales. Mecanismos financieros para operaciones de comercio exterior.
          </p>
        </div>

        {/* Bloque 1: Exportaciones - layout horizontal */}
        <div className="mb-12 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] lg:flex-row">
          <div className="relative flex-1 overflow-hidden lg:w-2/5">
            <img
              src="/images/jin/financiamiento-compradores-internacionales.jpg"
              alt="Financiamiento para compradores internacionales - acuerdos y estructuras de pago"
              className="h-64 w-full object-cover object-center lg:h-full lg:min-h-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-gold/20 px-3 py-1.5 backdrop-blur-sm lg:bottom-6 lg:left-6">
              <TrendingUp className="h-4 w-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Financiamiento</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
            <h3 className="mb-2 text-xl font-bold text-foreground lg:text-2xl">
              Financiamiento para compradores internacionales
            </h3>
            <p className="mb-5 text-white/75">
              Financiamos a tus compradores en el exterior para que cierren operaciones más rápido. Tú vendes, nosotros estructuramos el pago.
            </p>
            <ul className="mb-6 space-y-2">
              {["Acelera el cierre de ventas internacionales", "Reduce el riesgo de cobro", "Esquemas adaptados a cada mercado"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold/90"
            >
              Evaluar mi potencial exportador
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bloque 2: Importaciones - layout horizontal invertido */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] lg:flex-row-reverse">
          <div className="relative flex-1 overflow-hidden lg:w-2/5">
            <img
              src="/images/jin/maquinaria-puerta-logistica.jpg"
              alt="Maquinaria y materias primas hasta tu puerta - logística y financiamiento"
              className="h-64 w-full object-cover object-center lg:h-full lg:min-h-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/40" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-gold/20 px-3 py-1.5 backdrop-blur-sm lg:bottom-6 lg:left-6">
              <Package className="h-4 w-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Importaciones</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
            <h3 className="mb-2 text-xl font-bold text-foreground lg:text-2xl">
              Maquinaria y materias primas hasta tu puerta
            </h3>
            <p className="mb-5 text-white/75">
              Financiamos tus importaciones de maquinaria, bienes de capital e insumos. Logística completa hasta la puerta de tu negocio.
            </p>
            <ul className="mb-6 space-y-2">
              {["Proveedores verificados internacionalmente", "Financiamiento a medida", "Entrega puerta a puerta"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold/90"
            >
              Cotizar mis importaciones
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MecanismosEspecialesSection() {
  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border-2 border-gold/40 bg-gold/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.28em] text-gold">
            Mecanismos especiales
          </div>
          <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Optimiza tu comercio exterior
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Herramientas fiscales y aduaneras para reducir costos y acelerar tus operaciones.
          </p>
        </div>

        {/* Bloque 1: Plan Vallejo - layout horizontal (imagen izquierda, texto derecha) */}
        <div className="mb-12 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] lg:flex-row">
          <div className="relative flex-1 overflow-hidden lg:w-2/5">
            <img
              src="/images/jin/plan-vallejo-importacion.jpg"
              alt="Plan Vallejo - importación de insumos sin tributos para transformación y exportación"
              className="h-64 w-full object-cover object-center lg:h-full lg:min-h-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-gold/20 px-3 py-1.5 backdrop-blur-sm lg:bottom-6 lg:left-6">
              <TrendingUp className="h-4 w-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Sin tributos</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
            <h3 className="mb-2 text-xl font-bold text-foreground lg:text-2xl">
              Plan Vallejo
            </h3>
            <p className="mb-5 text-white/75">
              Importa insumos sin pagar tributos si los transformas y exportas. Ideal para productores con potencial exportador.
            </p>
            <ul className="mb-6 space-y-2">
              {["Insumos libres de arancel", "Transformación local", "Exportación como contraprestación"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold/90"
            >
              ¿Cuál mecanismo me conviene?
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bloque 2: Zonas francas - layout horizontal invertido (imagen derecha, texto izquierda) */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] lg:flex-row-reverse">
          <div className="relative flex-1 overflow-hidden lg:w-2/5">
            <img
              src="/images/jin/zonas-francas-logistica.jpg"
              alt="Zonas francas y depósitos fiscales - operaciones con impuestos suspendidos"
              className="h-64 w-full object-cover object-center lg:h-full lg:min-h-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/40" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-gold/20 px-3 py-1.5 backdrop-blur-sm lg:bottom-6 lg:left-6">
              <Package className="h-4 w-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Impuestos suspendidos</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
            <h3 className="mb-2 text-xl font-bold text-foreground lg:text-2xl">
              Zonas francas y depósitos fiscales
            </h3>
            <p className="mb-5 text-white/75">
              Opera con impuestos suspendidos en zonas autorizadas. Ideal para almacenamiento, transformación y reexportación.
            </p>
            <ul className="mb-6 space-y-2">
              {["Operaciones con impuestos diferidos", "Almacenamiento y distribución", "Reexportación simplificada"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold/90"
            >
              ¿Cuál mecanismo me conviene?
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AliadosSection() {
  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            Nuestros aliados
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Red global de socios
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Operacionales e institucionales en origen. Comerciales en mercados de destino.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div
              className="group relative rounded-2xl border border-white/10 bg-[#0c0f18] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-gold/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,164,71,0.3),0_0_50px_-15px_rgba(212,164,71,0.2)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/20 shadow-lg shadow-gold/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/30 group-hover:shadow-gold/20">
                  <Landmark className="h-7 w-7 shrink-0 text-gold" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Aliados operacionales e institucionales en origen</h3>
                <p className="mb-4 text-white/75">
                  Proveedores verificados, agentes aduaneros, instituciones de apoyo al comercio exterior y redes logísticas en los países de origen de las mercancías.
                </p>
                <ul className="flex flex-col items-center space-y-2">
                  {["Proveedores industriales verificados", "Agentes aduaneros", "Instituciones de fomento exportador"].map((item) => (
                    <li key={item} className="flex items-center justify-center gap-2 text-sm text-white/80">
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="group relative rounded-2xl border border-white/10 bg-[#0c0f18] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-gold/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,164,71,0.3),0_0_50px_-15px_rgba(212,164,71,0.2)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/20 shadow-lg shadow-gold/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/30 group-hover:shadow-gold/20">
                  <Network className="h-7 w-7 shrink-0 text-gold" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">Aliados comerciales en mercados de destino</h3>
                <p className="mb-4 text-white/75">
                  Distribuidores, importadores y compradores en USA, Europa, Asia, Medio Oriente y Venezuela. Red de fuerza de ventas internacional.
                </p>
                <ul className="flex flex-col items-center space-y-2">
                  {["Distribuidores e importadores", "Compradores verificados", "Red de comercialización"].map((item) => (
                    <li key={item} className="flex items-center justify-center gap-2 text-sm text-white/80">
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const IMPORT_SECTION_VIDEOS: { url: string; title: string }[] = [
  { url: "https://www.youtube.com/embed/AJLELdkP6vc?rel=0&modestbranding=1", title: "Importaciones de maquinaria" },
  { url: "https://www.youtube.com/embed/xCvssgjZ_g0?rel=0&modestbranding=1", title: "Importaciones de maquinaria" },
  { url: "https://www.youtube.com/embed/o-j_swcw5VI?rel=0&modestbranding=1", title: "Importaciones de maquinaria" },
]

export function ImportSection() {
  return (
    <section className="trade-stars-bg bg-[#05070c] py-12 sm:py-16 lg:py-20 pb-8 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Columna izquierda: contenido */}
          <div className="flex flex-col items-center text-center lg:items-start lg:justify-center lg:text-left">
            <div className="mb-3 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
              Importaciones productivas
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Importaciones productivas
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Maquinaria, bienes de capital, materias primas e insumos. Proveedores verificados. Logística y entrega en tu planta.
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold transition-all hover:border-gold/60 hover:bg-gold/20"
              >
                <Truck className="h-4 w-4" />
                Maquinaria y carga de proyecto
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:bg-gold/90 hover:shadow-gold/30"
              >
                <MessageCircle className="h-4 w-4" />
                Cotizar mis importaciones
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columna derecha: tarjeta con video */}
          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] p-4 shadow-2xl lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/Z9k6SG5biFM?autoplay=1&muted=1&start=1&modestbranding=1&rel=0"
                title="Cómo estructuramos tus importaciones"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video w-full"
              />
              {/* Overlay para ocultar branding de YouTube en esquina inferior derecha */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-20 w-32 bg-gradient-to-tl from-black via-black/80 to-transparent"
                aria-hidden
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Cómo estructuramos tus importaciones.
            </p>
          </div>
        </div>

        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Tecnologías productivas
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {IMPORT_SECTION_VIDEOS.map((video, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] shadow-xl">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="p-3 text-center text-sm text-muted-foreground">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ImportWhatWeOfferSection() {
  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(var(--gold-rgb),0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-px max-w-md items-center justify-center gap-3">
            <div className="h-0 flex-1 border-t-2 border-dashed border-gold/50" />
            <Package className="h-5 w-5 shrink-0 text-gold" />
            <div className="h-0 flex-1 border-t-2 border-dashed border-gold/50" />
          </div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-gold">
            Importaciones productivas
          </div>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            ¿Qué podemos importar para tu empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Integramos en una sola solución la compra internacional, la logística y el financiamiento, para que tu empresa
            incorpore tecnología, insumos y maquinaria sin frenar su caja ni su operación.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-6 md:grid md:grid-cols-3 md:gap-6 lg:flex lg:flex-row lg:items-stretch lg:gap-0">
          <Fragment>
            <div className="flex min-h-[220px] flex-col items-center gap-4 rounded-3xl border border-white/10 bg-[#0c0f18] p-7 text-center shadow-[0_22px_45px_-18px_rgba(0,0,0,0.8)] md:min-h-[260px] md:p-8 lg:min-w-0 lg:flex-1">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                <HardHat className="h-4 w-4" />
                Maquinaria & bienes de capital
              </div>
              <p className="text-sm md:text-base text-white/75">
                Líneas de producción, equipos agroindustriales, plantas de empaque, equipos de frío, montacargas y
                maquinaria especializada para crecer tu capacidad instalada.
              </p>
            </div>
            <div className="hidden shrink-0 items-center lg:flex lg:w-6 xl:w-8" aria-hidden>
              <div className="h-0 w-full border-t-2 border-dashed border-gold/50" />
            </div>
          </Fragment>
          <Fragment>
            <div className="flex min-h-[220px] flex-col items-center gap-4 rounded-3xl border border-white/10 bg-[#0c0f18] p-7 text-center shadow-[0_22px_45px_-18px_rgba(0,0,0,0.8)] md:min-h-[260px] md:p-8 lg:min-w-0 lg:flex-1">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                <Package className="h-4 w-4" />
                Materias primas e insumos
              </div>
              <p className="text-sm md:text-base text-white/75">
                Insumos agroindustriales, empaques, partes y repuestos críticos, componentes y materias primas que
                aseguran el abastecimiento continuo de tu operación.
              </p>
            </div>
            <div className="hidden shrink-0 items-center lg:flex lg:w-6 xl:w-8" aria-hidden>
              <div className="h-0 w-full border-t-2 border-dashed border-gold/50" />
            </div>
          </Fragment>
          <Fragment>
            <div className="flex min-h-[220px] flex-col items-center gap-4 rounded-3xl border border-white/10 bg-[#0c0f18] p-7 text-center shadow-[0_22px_45px_-18px_rgba(0,0,0,0.8)] md:min-h-[260px] md:p-8 lg:min-w-0 lg:flex-1">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                <Ship className="h-4 w-4" />
                Proyectos llave en mano
              </div>
              <p className="text-sm md:text-base text-white/75">
                Proyectos de inversión que combinan maquinaria, montaje, capacitación y puesta en marcha, con un solo
                integrador y un solo plan de pagos.
              </p>
            </div>
          </Fragment>
        </div>
      </div>
    </section>
  )
}

export function ImportProcessSection() {
  const steps = [
    {
      title: "Diagnóstico de necesidades",
      desc: "Entendemos tu proceso productivo, los volúmenes y el impacto financiero de la importación.",
    },
    {
      title: "Búsqueda y validación de proveedores",
      desc: "Identificamos fabricantes confiables, negociamos condiciones y validamos especificaciones técnicas.",
    },
    {
      title: "Estructura financiera y contractual",
      desc: "Definimos esquemas de pago, seguros, INCOTERMS y documentos para minimizar riesgos.",
    },
    {
      title: "Logística internacional y aduanas",
      desc: "Coordinamos transporte, nacionalización y entrega en tu planta, con visibilidad punto a punto.",
    },
    {
      title: "Acompañamiento post–entrega",
      desc: "Seguimiento de garantías, reposición de repuestos y nuevas importaciones programadas.",
    },
  ]

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(var(--gold-rgb),0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-px max-w-md items-center justify-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <Truck className="h-5 w-5 shrink-0 text-gold" />
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.26em] text-gold">
            Cómo estructuramos tus importaciones
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Un proceso integral de principio a fin
          </h2>
        </div>

        <div className="flex flex-col items-stretch gap-6 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <div className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0c0f18] p-5 text-left shadow-lg lg:min-w-0 lg:flex-1">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                  {index + 1}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="text-xs leading-relaxed text-white/75">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className="hidden shrink-0 items-center lg:flex lg:w-4 xl:w-8"
                  aria-hidden
                >
                  <div className="h-0 w-full border-t-2 border-dashed border-gold/50" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExportAgentServicesSection() {
  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#080b12] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(var(--gold-rgb),0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-gold">
            Servicios de agente de exportaciones
          </div>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Acompañamos tus exportaciones de alimentos y bebidas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Actuamos como tu equipo especializado de comercio exterior: diseñamos la ruta de internacionalización,
            operamos las exportaciones ordinarias y estructuramos los mecanismos financieros necesarios para cerrar
            operaciones seguras.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-6 md:grid md:grid-cols-3 md:gap-6 lg:flex lg:flex-row lg:items-stretch lg:gap-0">
          <Fragment>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0c0f18] p-6 shadow-xl transition-all hover:border-gold/20 lg:min-w-0 lg:flex-1">
              <div className="mx-auto mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Globe className="h-6 w-6 shrink-0 text-primary" />
              </div>
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Internacionalización de marcas
              </h3>
              <p className="text-center text-sm leading-relaxed text-white/75">
                Modelos de internacionalización tipo trader marketer: definimos mercados objetivo, posicionamiento y
                estrategia comercial para tus líneas de alimentos y bebidas.
              </p>
            </div>
            <div className="hidden shrink-0 items-center lg:flex lg:w-6 xl:w-8" aria-hidden>
              <div className="h-0 w-full border-t-2 border-dashed border-gold/50" />
            </div>
          </Fragment>
          <Fragment>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0c0f18] p-6 shadow-xl transition-all hover:border-gold/20 lg:min-w-0 lg:flex-1">
              <div className="mx-auto mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
                <Factory className="h-6 w-6 shrink-0 text-emerald-300" />
              </div>
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Exportaciones ordinarias
              </h3>
              <p className="text-center text-sm leading-relaxed text-white/75">
                Operación integral de exportaciones recurrentes: coordinación con plantas, documentación, logística y
                seguimiento de pedidos a tus compradores internacionales.
              </p>
            </div>
            <div className="hidden shrink-0 items-center lg:flex lg:w-6 xl:w-8" aria-hidden>
              <div className="h-0 w-full border-t-2 border-dashed border-gold/50" />
            </div>
          </Fragment>
          <Fragment>
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0c0f18] p-6 shadow-xl transition-all hover:border-gold/20 lg:min-w-0 lg:flex-1">
              <div className="mx-auto mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15">
                <CreditCard className="h-6 w-6 shrink-0 text-gold" />
              </div>
              <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                Mecanismos financieros internacionales
              </h3>
              <p className="text-center text-sm leading-relaxed text-white/75">
                Estructuramos cartas de crédito, cobros documentarios y esquemas de financiamiento para compradores de
                forma que la operación sea viable y segura para ambas partes.
              </p>
            </div>
          </Fragment>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-center text-xs text-white/60">
          <span className="font-semibold uppercase tracking-[0.22em] text-gold">
            Enfocado en los segmentos agroindustrial y bebidas
          </span>
          <span>Productores y marcas con potencial exportador que buscan un socio especializado en su categoría.</span>
        </div>
      </div>
    </section>
  )
}

export function ExportChinaTradingSection() {
  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(248,250,252,0.02),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-gold">
            Conexión con empresas trading internacionales
          </div>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Plataforma de exportación hacia el mercado chino
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A través de empresas trading especializadas en Hong Kong y China continental, conectamos tu portafolio de
            alimentos y bebidas con cadenas de distribución y consumidores en uno de los mercados más exigentes del
            mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0c0f18] p-6 shadow-xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              <Wine className="h-4 w-4" />
              Marcas representadas
            </div>
            <p className="text-sm text-white/75">
              Representamos portafolios de tecnologías de alimentos y bebidas para el mercado chino, actuando como
              trader marketer que desarrolla la categoría y cuida el posicionamiento de tu marca.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0c0f18] p-6 shadow-xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              <Sprout className="h-4 w-4" />
              Marcas propias y maquilas
            </div>
            <p className="text-sm text-white/75">
              Desarrollo de marcas propias para el mercado chino a través de maquilas y plantas asociadas, alineadas a
              los estándares regulatorios y de consumo locales.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0c0f18] p-6 shadow-xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
              <Network className="h-4 w-4" />
              Distribución internacional
            </div>
            <p className="text-sm text-white/75">
              Conexión con empresas trading chinas (HKG y mainland) que operan la distribución internacional y permiten
              escalar tus ventas en Asia sin que tengas que instalar infraestructura propia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Imágenes de sectores - Unsplash. Si alguna falla, SectorCard usa placehold.co como fallback. */
const SECTOR_IMAGES: Record<string, string> = {
  food: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=280&fit=crop&q=80",
  agroMachinery: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=280&fit=crop&q=80",
  textiles: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=280&fit=crop&q=80",
  furniture: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=400&h=280&fit=crop&q=80",
  leather: "/images/sectores/manufacturas-cuero.jpg",
  plastics: "/images/sectores/productos-plasticos.jpg",
  metalmechanics: "/images/sectores/metalmecanica-componentes.jpg",
  agriProducers: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=280&fit=crop&q=80",
  packaging: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=280&fit=crop&q=80",
  agroindustry: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=280&fit=crop&q=80",
}

function SectorCard({ sector }: { sector: { key: string; label: string } }) {
  const [imgSrc, setImgSrc] = useState(SECTOR_IMAGES[sector.key])
  const fallback = `https://placehold.co/400x280/0c0f18/d4a447?text=${encodeURIComponent(sector.label)}&font=roboto`
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-[#0c0f18] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-gold/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,164,71,0.3),0_0_40px_-10px_rgba(212,164,71,0.15)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0c0f18]">
        <img
          src={imgSrc}
          alt={sector.label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setImgSrc(fallback)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f18] via-[#0c0f18]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-center">
          <span className="block text-sm font-semibold text-white drop-shadow-lg">{sector.label}</span>
        </div>
      </div>
    </div>
  )
}

const SECTORS_FULL = [
  "food",
  "agroMachinery",
  "textiles",
  "furniture",
  "leather",
  "plastics",
  "metalmechanics",
  "agriProducers",
  "packaging",
  "agroindustry",
] as const

const SECTORS_EXPORTACIONES = ["food", "agroindustry", "agriProducers"] as const

export function QuienAtendemosSection({
  scheduleHref,
  variant,
}: {
  scheduleHref?: string
  /** Solo en página Exportaciones: título "Comercialización internacional..." y 3 sectores */
  variant?: "exportaciones"
}) {
  const { t } = useLanguage()
  const scheduleUrl = scheduleHref ?? WHATSAPP_URL
  const isInternalLink = scheduleHref?.startsWith("#") ?? false
  const isExportaciones = variant === "exportaciones"
  const sectorKeys = isExportaciones ? SECTORS_EXPORTACIONES : SECTORS_FULL
  const sectors = sectorKeys.map((key) => ({ key, label: t.sectors[key] }))
  const sectionTitle = isExportaciones ? t.sectors.titleExportaciones : t.sectors.title

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#080b12] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gold/20 blur-md" />
          <Button
            asChild
            size="lg"
            className="relative flex animate-rfq-attention items-center gap-2 rounded-xl bg-gold px-12 py-6 text-lg font-bold text-navy shadow-2xl shadow-gold/30 ring-2 ring-gold/30 transition-all hover:scale-105 hover:bg-gold/90"
          >
              {isInternalLink ? (
                <a href={scheduleUrl} className="flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5" />
                  Compra insumos a precios de proveedores internacionales
                </a>
              ) : (
                <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5" />
                  Compra insumos a precios de proveedores internacionales
                </a>
              )}
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <div className="mx-auto mb-4 flex h-px max-w-md items-center justify-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <Globe className="h-5 w-5 shrink-0 text-gold" />
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            {t.sectors.eyebrow}
          </p>
          <h2 className="text-center text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {sectionTitle}
          </h2>
        </div>

        <div
          className={`grid gap-6 ${isExportaciones ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}
        >
          {sectors.map((sector) => (
            <SectorCard key={sector.key} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  role,
  text,
  imgIndex,
}: {
  name: string
  role: string
  text: string
  imgIndex: number
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#0c0f18] p-8 text-center shadow-xl transition-all hover:border-gold/20">
      <div className="mb-4 flex h-16 w-16 overflow-hidden rounded-full border-2 border-gold/30 bg-white/5">
        <img
          src={`/images/team/testimonial-${imgIndex}.jpg`}
          alt={name}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/team/avatar-placeholder.svg"
            e.currentTarget.onerror = null
          }}
        />
      </div>
      <h3 className="mb-1 font-bold text-foreground">{name}</h3>
      <p className="mb-4 text-sm text-white/70">{role}</p>
      <div className="mb-4 flex gap-0.5 text-gold">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-white/80">&ldquo;{text}&rdquo;</p>
    </div>
  )
}

const EXPORT_TESTIMONIALS = [
  { name: "María Fernanda López", role: "Gerente Comercial", text: "Exportamos por primera vez a USA gracias a su estructuración. La logística y documentación fueron impecables. Hoy somos proveedores estables en el mercado norteamericano." },
  { name: "Ana Martínez", role: "Directora Comercial", text: "Nuestra primera exportación a Europa fue un éxito gracias a JIN Global. Conectaron nuestra oferta con compradores verificados y estructuraron el financiamiento." },
  { name: "Ricardo Torres", role: "Director General, Agroexportadora del Sur", text: "Llegamos a mercados de Medio Oriente con su apoyo. El equipo entendió nuestro producto y nos guió en toda la cadena hasta el puerto destino." },
  { name: "Laura Vega", role: "Gerente de Comercio Exterior", text: "De cero exportaciones a enviar contenedores a Asia en menos de un año. Profesionales, puntuales y con red de compradores reales." },
  { name: "Andrés Gómez", role: "CEO, Alimentos Andinos", text: "La estructuración del financiamiento nos permitió cerrar con compradores en USA sin afectar nuestro flujo. Recomiendo a JIN sin dudarlo." },
  { name: "Patricia Ruiz", role: "Coordinadora de Exportaciones", text: "Documentación, logística y acompañamiento post-venta. Todo en un solo socio. Ya llevamos tres años exportando con ellos." },
]

export function CasosExitoExportSection() {
  const total = EXPORT_TESTIMONIALS.length
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 5000)
    return () => clearInterval(interval)
  }, [total])

  const goTo = (index: number) => setCurrent((index + total) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const next = () => setCurrent((prev) => (prev + 1) % total)

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#080b12] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            Casos de éxito
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Marcas a las que ayudamos a exportar y a importar
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Testimonios de empresas que fortalecieron su capacidad productiva con importaciones estructuradas.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(total * 100) / 3}%`,
                transform: `translateX(-${current * (100 / total)}%)`,
              }}
            >
              {EXPORT_TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="flex shrink-0 px-2" style={{ width: `${100 / total}%` }}>
                  <div className="h-full w-full min-w-0">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      text={testimonial.text}
                      imgIndex={(i % 3) + 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-gold/40 hover:bg-gold/10"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {EXPORT_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? "w-8 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-gold/40 hover:bg-gold/10"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/exportaciones" className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold/90">
            Ver exportaciones
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const IMPORT_TESTIMONIALS = [
  { name: "Carlos Mendoza", role: "Director de Operaciones", text: "JIN Global nos acompañó en la importación de maquinaria desde China. Proceso transparente, tiempos cumplidos y financiamiento adaptado a nuestro flujo de caja. Recomendados." },
  { name: "Roberto Sánchez", role: "CEO, Agroindustria del Valle", text: "La importación de insumos y la exportación de nuestros productos en un solo socio. Reducimos costos y ampliamos mercados. Un verdadero integrador estratégico." },
  { name: "Claudia Herrera", role: "Gerente de Compras", text: "Importamos equipos desde Europa con financiamiento estructurado. Cumplieron plazos y la documentación aduanera fue impecable. Ya estamos planificando la segunda orden." },
  { name: "Fernando Díaz", role: "Director Industrial", text: "Maquinaria de alta precisión desde Asia. JIN coordinó la logística puerta a puerta y nos asesoró en el Plan Vallejo. Experiencia muy profesional." },
  { name: "Sandra Morales", role: "Propietaria, Confites del Valle", text: "Necesitábamos una línea de envasado. Nos cotizaron, estructuraron el crédito y trajeron todo hasta la planta. Todo en un solo contacto." },
  { name: "Miguel Rojas", role: "Gerente General", text: "Primera importación de bienes de capital con ellos. Claridad en costos, seguimiento constante y entrega en el tiempo prometido. Volveremos a usarlos." },
]

export function CasosExitoImportSection() {
  const total = IMPORT_TESTIMONIALS.length
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, 5000)
    return () => clearInterval(interval)
  }, [total])

  const goTo = (index: number) => setCurrent((index + total) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const next = () => setCurrent((prev) => (prev + 1) % total)

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#05070c] py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            Casos de éxito
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Marcas a las que ayudamos a importar maquinarias y materias primas
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Testimonios de empresas que fortalecieron su capacidad productiva con importaciones estructuradas.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(total * 100) / 3}%`,
                transform: `translateX(-${current * (100 / total)}%)`,
              }}
            >
              {IMPORT_TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="flex shrink-0 px-2" style={{ width: `${100 / total}%` }}>
                  <div className="h-full w-full min-w-0">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      text={testimonial.text}
                      imgIndex={(i % 3) + 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-gold/40 hover:bg-gold/10"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {IMPORT_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? "w-8 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-gold/40 hover:bg-gold/10"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/importaciones" className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold/90">
            Ver importaciones
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/** Videos de la galería inferior de Exportaciones (YouTube embeds). */
const EXPORT_SECTION_VIDEOS = [
  { videoId: "bxz9mkAAcxs", caption: "Puertos y contenedores" },
  { videoId: "xCvssgjZ_g0", caption: "Conexiones globales" },
  { videoId: "o5bhz-8UEZY", caption: "Logística internacional" },
]

export function ExportSection() {
  return (
    <section className="trade-stars-bg bg-[#05070c] py-12 sm:py-16 lg:py-20 pb-8 sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Columna izquierda: contenido */}
          <div className="flex flex-col items-center text-center lg:items-start lg:justify-center lg:text-left">
            <div className="mb-3 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
              Exportaciones alimentos-bebidas-agrícolas-agroindustriales
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Exportaciones alimentos-bebidas-agrícolas-agroindustriales
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Ruta exportadora para tus productos. USA, Europa, Asia, Medio Oriente y Venezuela.
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                <Globe className="h-4 w-4" />
                Mercados globales
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:bg-gold/90 hover:shadow-gold/30"
              >
                <TrendingUp className="h-4 w-4" />
                Evaluar mi potencial exportador
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columna derecha: tarjeta con video (misma estructura que Importaciones) */}
          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] p-4 shadow-2xl lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/W1U3UgdLfWo?autoplay=1&muted=1&modestbranding=1&rel=0"
                title="Cómo conectamos tu oferta con compradores internacionales"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video w-full"
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-20 w-32 bg-gradient-to-tl from-black via-black/80 to-transparent"
                aria-hidden
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Cómo conectamos tu oferta con compradores internacionales.
            </p>
          </div>
        </div>

        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Mercados y logística global
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {EXPORT_SECTION_VIDEOS.map((video, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] shadow-xl">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
                  title={video.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="p-3 text-center text-sm text-muted-foreground">
                {video.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

