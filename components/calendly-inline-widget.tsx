"use client"

import Script from "next/script"
import { useLanguage } from "@/contexts/language-context"

const CALENDLY_URL = "https://calendly.com/jinglobal2025/futuroexportador"

export function CalendlyInlineWidget() {
  const { t } = useLanguage()
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      <section id="agendar" className="trade-stars-bg relative overflow-hidden bg-muted/30 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t.calendly.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t.calendly.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t.calendly.subtitle}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl">
            <div
              className="calendly-inline-widget min-h-[700px] w-full"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
