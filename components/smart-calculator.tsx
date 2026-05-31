"use client"

import { useState, useMemo } from "react"
import { WandSparkles, Calculator } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const wasteOptions = [
  { value: 0.1, label: "10% — مقاسات تربيعية موحدة" },
  { value: 0.15, label: "15% — لوحات مفتوحة العروق Bookmatch" },
  { value: 0.2, label: "20% — زوايا وتفاصيل ديكورية معقدة" },
]

export function SmartCalculator() {
  const [area, setArea] = useState("")
  const [waste, setWaste] = useState(0.15)
  const [price, setPrice] = useState("")

  const { quantity, total } = useMemo(() => {
    const areaNum = Number.parseFloat(area)
    const priceNum = Number.parseFloat(price)
    if (!areaNum || areaNum <= 0) return { quantity: 0, total: 0 }
    const qty = areaNum + areaNum * waste
    const tot = priceNum > 0 ? qty * priceNum : 0
    return { quantity: qty, total: tot }
  }, [area, waste, price])

  return (
    <section id="calculator" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-dark-slate/5">
        <div className="border-b border-border bg-secondary/60 px-6 py-5 md:px-8">
          <h2 className="flex items-center gap-2.5 font-serif text-xl font-bold text-foreground md:text-2xl">
            <WandSparkles className="size-6 text-gold" />
            الحاسبة الذكية ونسب الهدر الفني
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            احسب المخزون الفعلي المطلوب شراؤه شاملاً نسبة الهدر حسب طبيعة التركيب.
          </p>
        </div>

        <div className="grid gap-5 px-6 py-7 md:grid-cols-3 md:px-8">
          <div className="flex flex-col gap-2">
            <Label htmlFor="area">المساحة الصافية المطلوبة (م²)</Label>
            <Input
              id="area"
              type="number"
              min="0"
              inputMode="decimal"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="أدخل صافي مساحة القياس"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="waste">طبيعة قص الهدر</Label>
            <select
              id="waste"
              value={waste}
              onChange={(e) => setWaste(Number.parseFloat(e.target.value))}
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {wasteOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="price">سعر المتر التقديري (ج.م)</Label>
            <Input
              id="price"
              type="number"
              min="0"
              inputMode="decimal"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="اختياري"
            />
          </div>
        </div>

        <div className="mx-6 mb-7 rounded-xl border border-gold/30 bg-gold/8 px-6 py-5 md:mx-8">
          {quantity > 0 ? (
            <div className="flex flex-col gap-3">
              <p className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-foreground">
                <span>المخزون الفعلي المطلوب شراؤه (شاملاً الهدر):</span>
                <span>
                  <strong className="font-serif text-2xl font-bold text-gold">{quantity.toFixed(2)}</strong>
                  <span className="mr-1 text-muted-foreground">متر مربع</span>
                </span>
              </p>
              {total > 0 && (
                <p className="flex flex-wrap items-baseline justify-between gap-2 border-t border-gold/20 pt-3 text-sm text-foreground">
                  <span>إجمالي التكلفة التقديرية للبضاعة:</span>
                  <span>
                    <strong className="font-serif text-xl font-bold text-dark-slate">
                      {total.toLocaleString("ar-EG", { maximumFractionDigits: 0 })}
                    </strong>
                    <span className="mr-1 text-muted-foreground">ج.م</span>
                  </span>
                </p>
              )}
            </div>
          ) : (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calculator className="size-4" />
              أدخل المساحة الصافية لعرض المخزون المطلوب فوراً.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
