import Link from "next/link"

const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "اللوطات الحية", href: "#showroom" },
  { label: "الحاسبة الذكية", href: "#calculator" },
  { label: "خدمات الفحص", href: "#services" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-dark-slate font-serif text-2xl font-bold text-gold shadow-sm">
            ش
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold text-foreground md:text-xl">شق الثعبان الرقمية</span>
            <span className="text-xs text-muted-foreground">تداول الرخام بمنظور فخم وموثوق</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
