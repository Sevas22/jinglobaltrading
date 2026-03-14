"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.link/enpj7c"

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con un asesor por WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/50 bg-gold text-navy shadow-xl transition-all hover:scale-105 hover:bg-gold/90 hover:shadow-2xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}

