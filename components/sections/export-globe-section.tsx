"use client"

import { useRef, useState, useEffect, useImperativeHandle, forwardRef } from "react"
import Globe from "react-globe.gl"

const DEFAULT_WIDTH = 550
const DEFAULT_HEIGHT = 480

export type Destination = {
  id: string
  label: string
  flagCode: string
  lat: number
  lon: number
  desc: string
}

const ORIGIN = { lat: 4.5709, lng: -74.2973, name: "Colombia" }

export type ExportGlobeSectionRef = {
  centerOnColombia: () => void
}

type ExportGlobeSectionProps = {
  destinations: Destination[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export const ExportGlobeSection = forwardRef<ExportGlobeSectionRef, ExportGlobeSectionProps>(function ExportGlobeSection(
  { destinations, selectedId, onSelect },
  ref
) {
  const globeRef = useRef<{ pointOfView: (pos: { lat: number; lng: number; altitude: number }, duration?: number) => void } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [size, setSize] = useState({ width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT })

  const selected = selectedId ? destinations.find((d) => d.id === selectedId) : null

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const updateSize = () => {
      const { width, height } = el.getBoundingClientRect()
      if (width > 0 && height > 0) {
        setSize({ width: Math.round(width), height: Math.round(height) })
      }
    }
    updateSize()
    const ro = new ResizeObserver(updateSize)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /** Puntos: Colombia (verde) + todos los países destino (amarillo) */
  const pointsData = [
    { ...ORIGIN, color: "#22c55e", altitude: 0.15, radius: 0.45 },
    ...destinations.map((d) => ({
      lat: d.lat,
      lng: d.lon,
      name: d.label,
      color: d.id === selectedId ? "#facc15" : "#eab308",
      altitude: 0.15,
      radius: d.id === selectedId ? 0.38 : 0.32,
    })),
  ]

  /** Importaciones: líneas desde cada país origen hacia Colombia (flechas hacia Colombia) */
  const arcsData = destinations.map((d) => ({
    startLat: d.lat,
    startLng: d.lon,
    endLat: ORIGIN.lat,
    endLng: ORIGIN.lng,
    color: d.id === selectedId ? ["#f59e0b", "#22c55e"] : ["#eab308", "#22c55e"],
  }))

  /** Etiquetas con nombres de países en el globo */
  const labelsData = [
    { lat: ORIGIN.lat, lng: ORIGIN.lng, label: "Colombia" },
    ...destinations.map((d) => ({ lat: d.lat, lng: d.lon, label: d.label })),
  ]

  useEffect(() => {
    if (!isReady) return
    const t = setTimeout(() => {
      globeRef.current?.pointOfView?.({ lat: ORIGIN.lat, lng: ORIGIN.lng, altitude: 2.5 }, 0)
    }, 300)
    return () => clearTimeout(t)
  }, [isReady])

  useEffect(() => {
    if (selected && isReady) {
      globeRef.current?.pointOfView?.({ lat: selected.lat, lng: selected.lon, altitude: 2.2 }, 1500)
    }
  }, [selected?.id, isReady])

  useImperativeHandle(ref, () => ({
    centerOnColombia: () => {
      globeRef.current?.pointOfView?.({ lat: ORIGIN.lat, lng: ORIGIN.lng, altitude: 2.5 }, 1500)
    },
  }))

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full min-h-[360px] sm:min-h-[420px] overflow-hidden rounded-[1.25rem]"
    >
      <Globe
        ref={globeRef}
        width={size.width}
        height={size.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        showAtmosphere={true}
        atmosphereColor="oklch(0.7 0.15 180 / 0.3)"
        atmosphereAltitude={0.15}
        pointsData={pointsData}
        pointColor="color"
        pointAltitude="altitude"
        pointRadius="radius"
        pointsMerge={false}
        arcsData={arcsData}
        arcColor="color"
        arcStroke={0.35}
        arcAltitude={0.4}
        arcAltitudeAutoScale={0.5}
        arcDashLength={0.08}
        arcDashGap={0.08}
        arcDashAnimateTime={2000}
        labelsData={labelsData}
        labelLat="lat"
        labelLng="lng"
        labelText="label"
        labelColor={() => "#facc15"}
        labelAltitude={0.2}
        labelSize={1.5}
        labelResolution={3}
        labelIncludeDot={true}
        labelDotRadius={0.45}
        animateIn={true}
        onGlobeReady={() => {
          setIsReady(true)
          globeRef.current?.pointOfView?.({ lat: ORIGIN.lat, lng: ORIGIN.lng, altitude: 2.5 }, 0)
        }}
        onPointClick={(point: { lat?: number; lng?: number; name?: string }) => {
          const dest = destinations.find(
            (d) => Math.abs(d.lat - (point.lat ?? 0)) < 8 && Math.abs(d.lon - (point.lng ?? 0)) < 8
          )
          if (dest) onSelect(dest.id)
        }}
      />
    </div>
  )
})
