"use client"

import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { TextureLoader } from "three"

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
        <sphereGeometry args={[active ? 0.045 : 0.035, 24, 24]} />
        <meshBasicMaterial color={active ? "#facc15" : "#fef9c3"} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.07, 32, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={active ? 0.25 : 0.12} />
      </mesh>
    </group>
  )
}

function EarthGlobeInner({ textureUrl, hotspots, activeId, onSelect }: EarthGlobeProps) {
  const hasHotspots = hotspots && hotspots.length > 0

  return (
    <>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={1.25} />
      <directionalLight position={[5, 3, 5]} intensity={2.2} />
      <directionalLight position={[-4, -2, -4]} intensity={1} />

      <group>
        <Earth textureUrl={textureUrl} />
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

