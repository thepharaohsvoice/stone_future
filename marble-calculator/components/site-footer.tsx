import { ShieldCheck, Ruler, Truck } from "lucide-react"

const services = [
  { icon: ShieldCheck, title: "فحص ميداني مزدوج", desc: "مندوب فني يعاين الخامة ويوثق المطابقة قبل التأكيد." },
  { icon: Ruler, title: "حاسبة هدر دقيقة", desc: "تقدير المخزون المطلوب حسب طبيعة القص والتركيب." },
  { icon: Truck, title: "شحن من المصنع", desc: "تسليم مباشر من أقوى مصانع شق الثعبان للموقع." },
]

export function SiteFooter() {
  return (
    <footer id="services" className="bg-dark-slate text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-6 border-b border-white/10 pb-12 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-2">
              <service.icon className="size-7 text-gold" />
              <h3 className="font-serif text-lg font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 pt-10 text-center">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-gold font-serif text-xl font-bold text-dark-slate">
              ش
            </span>
            <span className="font-serif text-lg font-bold">شق الثعبان الرقمية</span>
          </div>
          <p className="text-sm text-white/60">
            منصة شق الثعبان الرقمية © 2026 | رؤية معمارية وتطوير رقمي معاصر بإشراف تيتو شحاتة
          </p>
        </div>
      </div>
    </footer>
  )
}
