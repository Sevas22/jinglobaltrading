"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"

interface ThemeToggleProps {
  /** En hero transparente, usar estilo claro para contraste */
  variant?: "default" | "hero"
}

export function ThemeToggle({ variant = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  const iconClass = variant === "hero"
    ? "text-white hover:text-white/90"
    : "text-foreground"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full ${iconClass}`}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
