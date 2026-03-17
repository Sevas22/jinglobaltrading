"use client"

import { Suspense, useMemo } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { TextureLoader, Vector3, QuadraticBezierCurve3, LineBasicMaterial, BufferGeometry, Line } from "three"

type Hotspot = {
  id: string
  lat: number
  lon: number
}

type EarthGlobeProps = {
  textureUrl: string
  hotspots: Hotspot[]
  activeId: string | null
  focusId: string | null
  onSelect: (id: string) => void
  /** Origen de exportaciones (ej. Colombia) - se muestra con marcador distintivo */
  origin?: { lat: number; lon: number }
}

function latLonToCartesian(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)

  const x = -radius * Math.sin(phi) * Math.cos(theta)
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)

  return [x, y, z] as [number, number, number]
}

function Earth({ textureUrl }: { textureUrl: string }) {
  const texture = useLoader(TextureLoader, textureUrl)

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        emissiveMap={texture}
        emissive="#5a6a7a"
        emissiveIntensity={0.75}
        color="#f4f6f9"
      />
    </mesh>
  )
}

function HotspotMesh({
  hotspot,
  active,
  onSelect,
}: {
  hotspot: Hotspot
  active: boolean
  onSelect: (id: string) => void
}) {
  const [x, y, z] = latLonToCartesian(hotspot.lat, hotspot.lon, 1.02)

  return (
    <group
      position={[x, y, z]}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(hotspot.id)
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default"
      }}
    >
      <mesh>
        <sphereGeometry args={[active ? 0.055 : 0.045, 24, 24]} />
        <meshBasicMaterial color={active ? "#facc15" : "#fef9c3"} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={active ? 0.4 : 0.2} />
      </mesh>
    </group>
  )
}

function OriginMarker({ lat, lon }: { lat: number; lon: number }) {
  const [x, y, z] = latLonToCartesian(lat, lon, 1.02)

  return (
    <group position={[x, y, z]}>
      <mesh>
        <sphereGeometry args={[0.04, 24, 24]} />
        <meshBasicMaterial color="#22c55e" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshBasicMaterial color="#22c55e" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function EarthGlobeInner({ textureUrl, hotspots, activeId, onSelect, origin }: EarthGlobeProps) {
  const hasHotspots = hotspots && hotspots.length > 0

  return (
    <>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={1.25} />
      <directionalLight position={[5, 3, 5]} intensity={2.2} />
      <directionalLight position={[-4, -2, -4]} intensity={1} />

      <group>
        <Earth textureUrl={textureUrl} />
        {origin && <OriginMarker lat={origin.lat} lon={origin.lon} />}
        {hasHotspots &&
          hotspots.map((h) => (
            <HotspotMesh key={h.id} hotspot={h} active={h.id === activeId} onSelect={onSelect} />
          ))}
      </group>

      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </>
  )
}

export function EarthGlobe(props: EarthGlobeProps) {
  return (
    <Canvas className="h-full w-full !bg-transparent" camera={{ position: [0, 0, 2.8], fov: 45 }}>
      <Suspense fallback={null}>
        <EarthGlobeInner {...props} />
      </Suspense>
    </Canvas>
  )
}

