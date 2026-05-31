"use client"

import { ShieldCheck, Warehouse } from "lucide-react"

const WHATSAPP_NUMBER = "201000000000"

type Lot = {
  id: string
  name: string
  factory: string
  image: string
  available: number | null
  status: "available" | "sold"
}

const lots: Lot[] = [
  {
    id: "A1",
    name: "رخام تريستا كريما — نخب أول مصانع",
    factory: "الدولية للرخام",
    image: "/marble-crema.png",
    available: 180,
    status: "available",
  },
  {
    id: "B2",
    name: "جرانيت غاندولا رمادي — جلي ميكانيكي",
    factory: "ورشة الفراعنة",
    image: "/granite-grey.png",
    available: null,
    status: "sold",
  },
  {
    id: "C3",
    name: "رخام نيرو مركينا — عروق بيضاء فاخرة",
    factory: "مصنع النيل للتعدين",
    image: "/marble-noir.png",
    available: 95,
    status: "available",
  },
]

function openWhatsApp(message: string) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
}

function LotCard({ lot }: { lot: Lot }) {
  const isAvailable = lot.status === "available"

  const handleClick = () => {
    if (isAvailable) {
      openWhatsApp(
        `مرحباً شق الثعبان الرقمية، أود التحقق المزدوج الفوري من توفر وإتاحة لوط: ${lot.name} (لوط ${lot.id}) في ${lot.factory}. برجاء توجيه المندوب الميداني للفحص وإفادتي.`,
      )
    } else {
      openWhatsApp(`طلب توفير لوط مماثل لـ ${lot.name}`)
    }
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-dark-slate/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={lot.image || "/placeholder.svg"}
          alt={lot.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${
            isAvailable ? "bg-card/90 text-gold" : "bg-card/90 text-destructive"
          }`}
        >
          <span
            className={`size-2 rounded-full ${isAvailable ? "animate-pulse bg-gold" : "bg-destructive"}`}
          />
          {isAvailable ? "مفحوص ومعتمد فنياً" : "تم الشحن والبيع"}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="font-serif text-lg font-bold leading-snug text-foreground">{lot.name}</h3>

        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Warehouse className="size-4" />
            {lot.factory}
          </span>
          {isAvailable ? (
            <span className="text-foreground">
              <span className="text-muted-foreground">المتاح: </span>
              <strong className="font-semibold">{lot.available} م²</strong>
            </span>
          ) : (
            <span className="font-bold text-destructive">غير متوفر حالياً</span>
          )}
        </div>

        <button
          onClick={handleClick}
          className={`mt-auto flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
            isAvailable
              ? "border-dark-slate bg-dark-slate text-white hover:bg-dark-slate/90"
              : "border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
          }`}
        >
          <ShieldCheck className="size-4" />
          {isAvailable ? "تأكيد توفر اللوط الفوري" : "اطلب توفير لوط مماثل"}
        </button>
      </div>
    </article>
  )
}

export function Showroom() {
  return (
    <section id="showroom" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="text-sm font-medium text-gold">المعرض الرقمي</span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-balance text-foreground md:text-4xl">
          اللوطات الحية المعتمدة
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
          خامات مفحوصة ميدانياً ومحدّثة لحظياً، جاهزة للتأكيد الفوري والشحن من المصنع مباشرة.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lots.map((lot) => (
          <LotCard key={lot.id} lot={lot} />
        ))}
      </div>
    </section>
  )
}
