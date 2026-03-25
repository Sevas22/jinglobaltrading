"use client"

import { HeroCarousel } from "@/components/hero-carousel"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { Button } from "@/components/ui/button"
import {
  QuienesSomosSection,
  QueHacemosSection,
  ExportCountriesSection,
  QuienAtendemosSection,
  TeamSection,
  AliadosSection,
  VentajasCompetitivasSection,
  MecanismosEspecialesSection,
  CasosExitoExportSection,
} from "@/components/home-sections"
export default function HomePage() {
  return (
    <>
      {/* 1. BANNER: Nosotros - Import & Export Trading Company */}
      <HeroCarousel />

      {/* CTA WhatsApp justo después del banner */}
      <div className="relative flex justify-center bg-[#05070c] py-8 sm:py-10">
        <Button
          asChild
          size="lg"
          className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl border-2 border-gold/60 bg-gold px-8 py-3 font-bold uppercase tracking-[0.2em] text-navy shadow-xl shadow-gold/20 transition-all hover:scale-[1.03] hover:border-gold hover:bg-gold/95 hover:shadow-2xl hover:shadow-gold/30 sm:px-10 sm:text-base"
        >
          <a
            href="https://wa.link/enpj7c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" />
            SOLICITA TU DIAGNÓSTICO
          </a>
        </Button>
      </div>
      <div className="section-divider" />

      {/* 2. Quienes somos - Tu socio estratégico */}
      <QuienesSomosSection />
      <div className="section-divider" />

      {/* 3. Países de exportación - globo interactivo */}
      <ExportCountriesSection />
      <div className="section-divider" />

      {/* 5. Qué hacemos */}
      <QueHacemosSection />
      <div className="section-divider" />

      {/* 6. A quién atendemos */}
      <QuienAtendemosSection />
      <div className="section-divider" />

      {/* 6b. Comercialización internacional para los sectores (variante exportaciones) */}
      <QuienAtendemosSection variant="exportaciones" />
      <div className="section-divider" />

      {/* 7. Nuestro equipo */}
      <TeamSection />
      <div className="section-divider" />

      {/* 8. Red global de socios */}
      <AliadosSection />
      <div className="section-divider" />

      {/* 9. Nuestras ventajas competitivas */}
      <VentajasCompetitivasSection />
      <MecanismosEspecialesSection />
      <div className="section-divider" />

      {/* 13. Casos de éxito */}
      <CasosExitoExportSection />
    </>
  )
}
