"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Eye, Filter, ShoppingBag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBanner } from "@/components/hero-banner"
import { useLanguage } from "@/contexts/language-context"
import { getProducts, getCategories } from "@/lib/products-store"
import type { Product } from "@/lib/types"

export default function StorePage() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    setProducts(getProducts("store"))
    setCategories(getCategories("store"))
  }, [])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory
      const matchesSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [products, selectedCategory, search])

  return (
    <>
      <HeroBanner
        title={t.storePage.title}
        subtitle={t.storePage.subtitle}
        image="/images/jin/cargo-plane-export.jpg"
        overlayVariant="store"
      />

<section className="bg-[#05070c] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="mb-12 rounded-2xl border border-white/10 bg-[#0c0f18] p-6 shadow-xl md:p-8">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
                  Catálogo de maquinaria
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  Ofertas listas para cotizar
                </h2>
              </div>
              <div className="rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
                {filtered.length} featured items
              </div>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <Input
                placeholder={t.storePage.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 rounded-full border-white/10 bg-white/5 pl-10 text-foreground placeholder:text-white/40"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-5">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className={
                  selectedCategory === "all"
                    ? "rounded-full bg-gold text-navy font-semibold"
                    : "rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/10"
                }
              >
                {t.storePage.allCategories}
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={
                    selectedCategory === cat
                      ? "rounded-full bg-gold text-navy font-semibold"
                      : "rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/10"
                  }
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f18] shadow-xl transition-all hover:-translate-y-2 hover:border-gold/20 hover:shadow-2xl"
              >
                <Link href={`/store/${product.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Badge className="absolute left-3 top-3 bg-gold text-navy shadow-sm">
                      {product.category}
                    </Badge>
                    <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all group-hover:opacity-100">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
                <CardContent className="flex flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                    <span className="shrink-0 text-xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <Button asChild size="sm" className="flex-1 rounded-xl bg-primary text-primary-foreground shadow-md hover:bg-primary/90">
                      <Link href={`/store/${product.id}`} className="flex items-center gap-2">
                        <Eye className="h-3.5 w-3.5" />
                        {t.storePage.viewDetails}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 rounded-xl bg-gold text-navy shadow-md hover:bg-gold/90"
                    >
                      <Link href="/request" className="flex items-center gap-2">
                        <ShoppingBag className="h-3.5 w-3.5" />
                        {t.storePage.contactToOrder}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center sm:py-16 lg:py-20">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
