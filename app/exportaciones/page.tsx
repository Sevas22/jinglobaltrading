import { HeroBanner } from "@/components/hero-banner"
import {
  ExportSection,
  ExportAgentServicesSection,
  ExportChinaTradingSection,
  QuienAtendemosSection,
  AliadosSection,
  TeamSection,
  CasosExitoExportSection,
} from "@/components/home-sections"

export const metadata = {
  title: "Exportaciones para PYMES | Ruta exportadora y fuerza de ventas global",
  description:
    "Conectamos PYMES con importadores y distribuidores globales, diseñando su ruta exportadora y actuando como fuerza de ventas internacional para crecer en nuevos mercados.",
}

export default function ExportacionesPage() {
  return (
    <>
      <HeroBanner
        title="Llevamos tus productos a mercados internacionales de alto valor"
        subtitle="Te acompañamos en la estructuración y operación de tu estrategia de exportación de alimentos y productos agroindustriales hacia Estados Unidos, Europa, Asia, Medio Oriente y Venezuela."
        image="/images/jin/export-containers-port.jpg"
        overlayVariant="store"
      />
      <div className="section-divider" />
      <ExportSection />
      <div className="section-divider" />
      <ExportAgentServicesSection />
      <div className="section-divider" />
      <ExportChinaTradingSection />
      <div className="section-divider" />
      <QuienAtendemosSection variant="exportaciones" agendaDiagnosticoExportador />
      <div className="section-divider" />
      <TeamSection />
      <div className="section-divider" />
      <AliadosSection />
      <div className="section-divider" />
      <CasosExitoExportSection />
    </>
  )
}

