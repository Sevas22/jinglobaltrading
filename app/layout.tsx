import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Toaster } from "@/components/ui/sonner"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JIN Global Trading | Importaciones y Exportaciones para PYMES",
  description:
    "Integramos importación de maquinaria e insumos y exportación de productos, conectando PYMES con mercados internacionales con acompañamiento logístico y financiero.",
  generator: "JIN Global Trading",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "JIN Global Trading",
    "comercializadora internacional",
    "importación de maquinaria",
    "importaciones productivas",
    "exportaciones para PYMES",
    "ruta exportadora",
    "comercio exterior",
    "logística internacional",
  ],
  metadataBase: new URL("https://jinglobaltrading.com"),
}

export const viewport: Viewport = {
  themeColor: "#05070c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVC98DRV');`,
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
          <Toaster position="top-right" />
          <WhatsAppFloat />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVC98DRV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  )
}
