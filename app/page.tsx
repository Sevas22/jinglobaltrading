"use client"

import { HeroCarousel } from "@/components/hero-carousel"
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

      {/* 7. Nuestros aliados */}
      <AliadosSection />
      <div className="section-divider" />

      {/* 8. Nuestro equipo */}
      <TeamSection />
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
