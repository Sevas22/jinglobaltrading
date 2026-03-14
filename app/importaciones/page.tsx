import { HeroBanner } from "@/components/hero-banner"
import {
  ImportSection,
  ImportWhatWeOfferSection,
  ImportProcessSection,
  QuienAtendemosSection,
  CasosExitoImportSection,
} from "@/components/home-sections"

export const metadata = {
  title: "Importación de maquinaria, materias primas e insumos industriales | JIN Global Trading",
  description:
    "Gestionamos compras internacionales, aduanas y financiamiento para importar maquinaria, bienes de capital, materias primas e insumos industriales desde proveedores verificados.",
}

export default function ImportacionesPage() {
  return (
    <>
      <HeroBanner
        title="Importaciones productivas para fortalecer tu capacidad industrial"
        subtitle="Diseñamos y gestionamos la compra internacional de maquinaria, bienes de capital, materias primas e insumos industriales con proveedores verificados, optimizando costos, tiempos y riesgos."
        image="/images/jin/import-ship-containers.jpg"
        overlayVariant="store"
      />
      <div className="section-divider" />
      <ImportSection />
      <div className="section-divider" />
      <ImportWhatWeOfferSection />
      <div className="section-divider" />
      <ImportProcessSection />
      <div className="section-divider" />
      <QuienAtendemosSection />
      <div className="section-divider" />
      <CasosExitoImportSection />
    </>
  )
}

