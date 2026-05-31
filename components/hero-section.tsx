import { ArrowLeft, ShieldCheck, Gem, Truck } from "lucide-react"

const stats = [
  { icon: Gem, value: "+1200", label: "لوط رخام معتمد" },
  { icon: ShieldCheck, value: "فحص مزدوج", label: "مطابقة ميدانية" },
  { icon: Truck, value: "+30", label: "مصنع شريك" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-marble.png"
          alt="صالة عرض رخام فاخرة"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-dark-slate/95 via-dark-slate/80 to-dark-slate/55" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <span className="size-2 animate-pulse rounded-full bg-gold" />
            منصة تشغيلية ذكية للرخام والجرانيت
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-balance text-white md:text-5xl">
            سوق الرخام والجرانيت <span className="text-gold">بأسلوب معماري معاصر</span>
          </h1>

          <p className="mt-5 text-pretty text-base leading-relaxed text-white/80 md:text-lg">
            منصة تربطك مباشرة بأقوى مصانع شق الثعبان، مع فحص ميداني مزدوج يضمن مطابقة الخامات لأعلى معايير
            الجودة والتصميم والتشطيب الفاخر.
          </p>

          <a
            href="#showroom"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-dark-slate shadow-lg shadow-gold/20 transition-transform hover:scale-[1.02]"
          >
            استكشف لوطات اليوم الحية
            <ArrowLeft className="size-5" />
          </a>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <stat.icon className="size-5 text-gold" />
                <dt className="font-serif text-xl font-bold text-white md:text-2xl">{stat.value}</dt>
                <dd className="text-xs text-white/70 md:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
