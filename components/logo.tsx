"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/contexts/theme-context"

/** Icono circular del logo (disco dorado + JIN) para favicon, PWA, menús compactos */
export function LogoIcon({ className = "h-10 w-10", asLink = false }: { className?: string; asLink?: boolean }) {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-label="JIN Global Trading"
      className={className}
    >
      <defs>
        <linearGradient id="logo-icon-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a447" />
          <stop offset="50%" stopColor="#b8860b" />
          <stop offset="100%" stopColor="#927A3C" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#logo-icon-gold)" />
      <text x="32" y="42" fontFamily="system-ui, -apple-system, Arial, sans-serif" fontSize="24" fontWeight="800" fill="#b21f2a" textAnchor="middle" letterSpacing="1">JIN</text>
    </svg>
  )
  return asLink ? <Link href="/">{icon}</Link> : icon
}

interface LogoProps {
  showWordmark?: boolean
  inverted?: boolean
  /** Texto claro sobre fondo oscuro (ej. navbar sobre hero) */
  lightText?: boolean
  /** Imagen del logo para light mode. Si no existe, usa SVG. */
  logoSrc?: string
  /** Imagen del logo para dark mode. Si no se usa, se aplica filtro a logoSrc. */
  logoDarkSrc?: string
}

export function Logo({ showWordmark = true, inverted = false, lightText = false, logoSrc = "/brand/jin-logo.png", logoDarkSrc }: LogoProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [imgError, setImgError] = useState(false)
  const useImage = logoSrc && !imgError

  // En dark: usar versión específica o la misma con ajustes
  const logoSrcResolved = useImage && isDark && logoDarkSrc ? logoDarkSrc : logoSrc

  // Colores según contexto: hero (overlay) vs navbar normal
  const useHeroColors = inverted
  const jinColor = useHeroColors ? "var(--hero-text)" : "var(--foreground)"
  const globalColor = useHeroColors ? "var(--gold)" : "var(--logo-global)"

  // Logo con fondo transparente: no aplicar invert, mantiene colores dorado/rojo en cualquier fondo
  const applyInvert = false // Nuevo logo PNG transparente con colores propios

  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative shrink-0 ${
          useImage
            ? "h-10 w-auto max-w-[200px] overflow-hidden rounded-xl md:h-12 md:max-w-[240px]"
            : "h-12 min-w-[160px] md:h-14 md:min-w-[200px]"
        }`}
      >
        {useImage ? (
          <Image
            src={logoSrcResolved}
            alt="JIN Global Trading"
            width={240}
            height={64}
            className={`h-full w-auto object-contain object-left transition-all duration-300 rounded-xl ${
              applyInvert && isDark && !logoDarkSrc ? "brightness-0 invert" : ""
            }`}
            priority
            unoptimized
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 200 52"
            aria-hidden="true"
            className="h-10 w-auto shrink-0"
            role="img"
          >
        {/* J - rojo */}
        <text x="0" y="36" fill="var(--primary)" fontFamily="system-ui, Arial, sans-serif" fontSize="30" fontWeight="800" letterSpacing="0.5">
          J
        </text>
        {/* I - dorado */}
        <text x="32" y="36" fill="var(--gold)" fontFamily="system-ui, Arial, sans-serif" fontSize="30" fontWeight="800" letterSpacing="0.5">
          I
        </text>
        {/* N - rojo */}
        <text x="52" y="36" fill="var(--primary)" fontFamily="system-ui, Arial, sans-serif" fontSize="30" fontWeight="800" letterSpacing="0.5">
          N
        </text>
        {/* GLOBAL TRADING - se adapta al tema */}
        <text x="0" y="50" fill={globalColor} fontFamily="system-ui, Arial, sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.2em">
          GLOBAL TRADING
        </text>
          </svg>
        )}
      </div>
      {showWordmark ? (
        <span
          className={`hidden text-[10px] font-semibold uppercase tracking-[0.2em] md:inline ${
            lightText ? "text-white/95" : useHeroColors ? "text-hero-text/90" : "text-muted-foreground"
          }`}
        >
          Red global de logística
        </span>
      ) : null}
    </div>
  )
}
