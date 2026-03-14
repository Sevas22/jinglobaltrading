import type { Product } from "./types"

export const sampleCatalogProducts: Product[] = [
  {
    id: "cat-1",
    name: "Maquinaria agroindustrial",
    price: 0,
    category: "Maquinaria",
    description:
      "Líneas de procesamiento, equipos de empaque y maquinaria para agroindustria. Cotización según especificaciones y destino.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    type: "catalog",
    specifications: {
      Origen: "China / Europa / USA",
      Tipo: "Maquinaria nueva y usada",
      Soporte: "Documentación y logística",
      Financiamiento: "Estructuración disponible",
    },
    createdAt: "2024-01-15",
  },
  {
    id: "cat-2",
    name: "Materias primas industriales",
    price: 0,
    category: "Insumos",
    description:
      "Materias primas e insumos industriales para alimentos, textiles, plásticos y metalmecánica. Proveedores verificados.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    type: "catalog",
    specifications: {
      Origen: "Asia / Europa / América",
      Formato: "Contenedor completo o parcial",
      Documentación: "Certificados y trazabilidad",
    },
    createdAt: "2024-01-20",
  },
  {
    id: "cat-3",
    name: "Productos agroindustriales para exportación",
    price: 0,
    category: "Exportación",
    description:
      "Alimentos procesados, productos agroindustriales y commodities listos para mercados internacionales.",
    image: "/images/products/natural-coconut-water-330ml.png",
    type: "catalog",
    specifications: {
      Destinos: "USA · Europa · Asia · Venezuela",
      Soporte: "Ruta exportadora y cumplimiento",
    },
    createdAt: "2024-02-01",
  },
  {
    id: "cat-4",
    name: "Bienes de capital",
    price: 0,
    category: "Maquinaria",
    description:
      "Equipos especializados, líneas de producción y bienes de capital para industria. Gestión integral de importación.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    type: "catalog",
    specifications: {
      Categoría: "Proyecto y carga especial",
      Logística: "Coordinación puerta a puerta",
    },
    createdAt: "2024-02-10",
  },
  {
    id: "cat-5",
    name: "Insumos para alimentos y bebidas",
    price: 0,
    category: "Insumos",
    description:
      "Insumos para la industria de alimentos y bebidas. Proveedores internacionales con documentación y trazabilidad.",
    image: "/images/products/garlic-chili-sauce-500ml.png",
    type: "catalog",
    specifications: {
      Certificaciones: "HACCP / ISO según producto",
      Formato: "Contenedor seco o reefer",
    },
    createdAt: "2024-02-15",
  },
  {
    id: "cat-6",
    name: "Programa de estructuración integral",
    price: 0,
    category: "Servicios",
    description:
      "Paquete integral: diagnóstico, búsqueda de proveedores o compradores, estructuración financiera, logística y aduanas.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    type: "catalog",
    specifications: {
      Alcance: "Importación y/o exportación",
      Mercados: "USA · Europa · Asia · Venezuela",
      Soporte: "Acompañamiento de principio a fin",
    },
    createdAt: "2024-03-01",
  },
]

export const sampleStoreProducts: Product[] = [
  {
    id: "store-1",
    name: "Maquinaria de empaque",
    price: 0,
    category: "Maquinaria",
    description:
      "Equipos de empaque y envasado para alimentos y productos industriales. Cotización según capacidad y especificaciones.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    type: "store",
    createdAt: "2024-01-10",
  },
  {
    id: "store-2",
    name: "Línea de procesamiento agroindustrial",
    price: 0,
    category: "Maquinaria",
    description:
      "Líneas completas para procesamiento de alimentos, frutas y vegetales. Importación con soporte técnico y logístico.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    type: "store",
    createdAt: "2024-01-18",
  },
  {
    id: "store-3",
    name: "Diagnóstico de potencial exportador",
    price: 0,
    category: "Servicios",
    description:
      "Evaluación de tu producto y empresa para identificar oportunidades de exportación y mercados destino.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    type: "store",
    createdAt: "2024-02-05",
  },
  {
    id: "store-4",
    name: "Cotización de importación",
    price: 0,
    category: "Servicios",
    description:
      "Cotización integral para importar maquinaria, insumos o materias primas. Incluye logística y documentación.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    type: "store",
    createdAt: "2024-02-12",
  },
  {
    id: "store-5",
    name: "Insumos textiles",
    price: 0,
    category: "Insumos",
    description:
      "Telas, hilos y materias primas para la industria textil y de confecciones. Proveedores en Asia y Europa.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    type: "store",
    createdAt: "2024-02-20",
  },
  {
    id: "store-6",
    name: "Estructuración financiera",
    price: 0,
    category: "Servicios",
    description:
      "Diseño de mecanismos de pago, financiamiento y esquemas comerciales para operaciones de comercio exterior.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    type: "store",
    createdAt: "2024-03-05",
  },
]
