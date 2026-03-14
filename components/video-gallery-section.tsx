"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const VIDEOS = [
  { id: "AJLELdkP6vc", title: "Importaciones de maquinaria" },
  { id: "xCvssgjZ_g0", title: "Importaciones de maquinaria" },
  { id: "o-j_swcw5VI", title: "Importaciones de maquinaria" },
]

export function VideoGallerySection() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleOpen = (id: string) => {
    setActiveId(id)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setActiveId(null)
  }

  return (
    <section className="trade-stars-bg relative overflow-hidden bg-[#080b12] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(var(--gold-rgb),0.06),transparent_50%),radial-gradient(ellipse_60%_80%_at_80%_80%,rgba(var(--primary-rgb),0.04),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
            Contenido
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Conoce más sobre JIN Global Trading
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Haz clic en cualquier video para reproducirlo.
          </p>
          <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Videos de maquinaria
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {VIDEOS.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => handleOpen(video.id)}
              className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] shadow-xl transition-all hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-[#080b12]"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/90 bg-primary/90 shadow-xl transition-all group-hover:scale-110 group-hover:border-gold group-hover:bg-primary">
                  <Play className="h-8 w-8 fill-white text-white" strokeWidth={0} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                  Reproducir
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
        <DialogContent
          className="max-w-4xl border-white/10 bg-[#0c0f18] p-0"
          showCloseButton={true}
        >
          <DialogTitle className="sr-only">Reproducir video</DialogTitle>
          {activeId && (
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
                title="Video de JIN Global Trading"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
