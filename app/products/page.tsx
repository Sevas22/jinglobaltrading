"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, FileDown, Eye, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBanner } from "@/components/hero-banner"
import { useLanguage } from "@/contexts/language-context"
import { getProducts, getCategories } from "@/lib/products-store"
import type { Product } from "@/lib/types"

export default function ProductsPage() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    setProducts(getProducts("catalog"))
    setCategories(getCategories("catalog"))
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
        title={t.productsPage.title}
        subtitle={t.productsPage.subtitle}
        image="/images/jin/jin-trade-insight-hero.jpg"
      />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="mb-10 rounded-[28px] border border-border/70 bg-card/85 p-5 shadow-sm backdrop-blur md:p-6">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Export catalog filters
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Find the right category for your market.
                </h2>
              </div>
              <div className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-primary">
                {filtered.length} products available
              </div>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t.storePage.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 rounded-full border-border/80 bg-background pl-10"
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
                    ? "rounded-full bg-primary text-primary-foreground"
                    : "rounded-full border-border/70 bg-background"
                }
              >
                {t.productsPage.allCategories}
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={
                    selectedCategory === cat
                      ? "rounded-full bg-primary text-primary-foreground"
                      : "rounded-full border-border/70 bg-background"
                  }
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground shadow-sm">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <Button asChild size="sm" className="flex-1 rounded-xl bg-primary text-primary-foreground shadow-md hover:bg-primary/90">
                      <Link href={`/products/${product.id}`} className="flex items-center gap-2">
                        <Eye className="h-3.5 w-3.5" />
                        {t.productsPage.viewDetails}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-xl border-gold text-gold shadow-md hover:bg-gold hover:text-white"
                    >
                      <a href="/techsheet.pdf" download="CHINA-Trading-TechSheet.pdf" className="flex items-center gap-2">
                        <FileDown className="h-3.5 w-3.5" />
                        {t.productsPage.downloadSheet}
                      </a>
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
