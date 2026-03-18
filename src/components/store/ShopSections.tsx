import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PRODUCTS, CATEGORIES, DELIVERY_ZONES } from "./data";

// ---- HERO ----
export function Hero({ onNav }: { onNav: (s: string) => void }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--brand-cream)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-25 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #1a4fa0, #2d6dd4)" }} />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{ background: "radial-gradient(circle, #e8607a, #f4a7b9)" }} />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #1a4fa0, #6fa3ef)", animationDelay: "3s" }} />
        <div className="absolute top-24 right-12 text-7xl animate-float opacity-60" style={{ animationDelay: "1s" }}>🌸</div>
        <div className="absolute bottom-32 left-8 text-5xl animate-float-slow opacity-50">🌺</div>
        <div className="absolute top-1/3 right-1/4 text-4xl animate-float opacity-40" style={{ animationDelay: "2s" }}>🌼</div>
        <div className="absolute bottom-1/4 right-8 text-3xl animate-float opacity-30" style={{ animationDelay: "4s" }}>🌷</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium mb-6 animate-fade-in-up"
            style={{ background: "rgba(26,79,160,0.1)", color: "var(--brand-rose)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse-ring" style={{ background: "var(--brand-rose)" }} />
            Доставка за 60 минут
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 animate-fade-in-up delay-100">
            Цветы,<br />
            <span className="text-gradient italic">рождающие</span><br />
            <span style={{ color: "var(--brand-green)" }}>эмоции</span>
          </h1>
          <p className="font-body text-lg text-stone-500 mb-8 leading-relaxed max-w-md animate-fade-in-up delay-200">
            Свежие букеты ручной сборки для любого случая. Бесплатная доставка по центру города.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <button onClick={() => onNav("catalog")}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-rose-200"
              style={{ background: "linear-gradient(135deg, var(--brand-rose), #2d6dd4)" }}>
              <Icon name="Flower2" size={18} />
              Выбрать букет
            </button>
            <button onClick={() => onNav("delivery")}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold border-2 transition-all hover:scale-105 active:scale-95"
              style={{ borderColor: "var(--brand-rose)", color: "var(--brand-rose)" }}>
              <Icon name="Truck" size={18} />
              Условия доставки
            </button>
          </div>

          <div className="flex gap-8 mt-12 animate-fade-in-up delay-400">
            {[
              { num: "500+", label: "букетов" },
              { num: "4.9★", label: "рейтинг" },
              { num: "2000+", label: "клиентов" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold" style={{ color: "var(--brand-rose)" }}>{s.num}</div>
                <div className="font-body text-sm text-stone-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex justify-center items-center animate-scale-in delay-200">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-[3rem] rotate-6 opacity-20"
              style={{ background: "linear-gradient(135deg, var(--brand-rose), var(--brand-gold))" }} />
            <div className="absolute inset-0 rounded-[3rem] -rotate-3 opacity-10"
              style={{ background: "var(--brand-green)" }} />
            <img
              src="https://cdn.poehali.dev/projects/b2986cc1-1d07-475c-98c5-02810cc538bc/files/083b46d9-a74f-48e3-95e4-0b0807a5bcd9.jpg"
              alt="Букет цветов"
              className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-8 z-20 glass rounded-2xl px-4 py-3 shadow-lg animate-float">
              <div className="font-body text-xs text-stone-500">Сборка букета</div>
              <div className="font-body font-bold text-stone-800 flex items-center gap-1">
                <span>🕐</span> 30 минут
              </div>
            </div>
            <div className="absolute -top-4 -right-6 z-20 glass rounded-2xl px-4 py-3 shadow-lg animate-float-slow">
              <div className="font-body text-xs text-stone-500">Только свежие</div>
              <div className="font-body font-bold text-stone-800 flex items-center gap-1">
                <span>✨</span> Гарантия
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t border-blue-100"
        style={{ background: "rgba(26,79,160,0.05)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="font-display text-sm font-medium mx-6 italic" style={{ color: "var(--brand-rose)" }}>
              Свежие цветы ✦ Ручная сборка ✦ Доставка за 60 мин ✦ Бесплатно от 3000 ₽ ✦ ЦветЁж 🦔 ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- CATALOG ----
export function Catalog({ onAddToCart }: { onAddToCart: (p: typeof PRODUCTS[0]) => void }) {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [added, setAdded] = useState<number | null>(null);

  const filtered = activeCategory === "Все" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAdd = (p: typeof PRODUCTS[0]) => {
    onAddToCart(p);
    setAdded(p.id);
    setTimeout(() => setAdded(null), 800);
  };

  return (
    <section id="catalog" className="py-24 px-6" style={{ background: "var(--brand-cream)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-sm font-medium tracking-widest uppercase text-rose-500 mb-3 block">Наш ассортимент</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4" style={{ color: "var(--brand-dark)" }}>
            Каталог <span className="text-gradient italic">букетов</span>
          </h2>
          <p className="font-body text-stone-500 text-lg max-w-xl mx-auto">
            Каждый букет — это история. Выберите ту, которую хотите рассказать.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${activeCategory === cat
                ? "text-white shadow-lg scale-105"
                : "bg-white border border-stone-200 text-stone-600 hover:border-rose-300 hover:text-rose-600"
                }`}
              style={activeCategory === cat ? { background: "var(--brand-rose)" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, hsl(${p.id * 37}, 70%, 94%), hsl(${p.id * 37 + 40}, 60%, 90%))` }}>
                <span className="text-8xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 select-none">
                  {p.emoji}
                </span>
                {p.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-bold"
                    style={{
                      background: p.tag === "Люкс" ? "var(--brand-gold)" : p.tag === "Новинка" ? "var(--brand-green)" : "var(--brand-rose)",
                      color: p.tag === "Люкс" ? "var(--brand-dark)" : "white"
                    }}>
                    {p.tag}
                  </div>
                )}
                <div className="absolute top-3 right-3 text-xs font-body font-medium text-stone-400 bg-white/80 px-2 py-1 rounded-full">
                  {p.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: "var(--brand-dark)" }}>{p.name}</h3>
                <p className="font-body text-sm text-stone-400 mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold" style={{ color: "var(--brand-rose)" }}>
                    {p.price.toLocaleString("ru")} ₽
                  </span>
                  <button
                    onClick={() => handleAdd(p)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 text-white"
                    style={{ background: added === p.id ? "#3a9e5f" : "var(--brand-rose)" }}
                  >
                    {added === p.id ? (
                      <><Icon name="Check" size={14} /> Добавлено</>
                    ) : (
                      <><Icon name="Plus" size={14} /> В корзину</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- DELIVERY ----
export function Delivery() {
  return (
    <section id="delivery" className="py-24 px-6 relative overflow-hidden" style={{ background: "#fff" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: "var(--brand-rose)" }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-medium tracking-widest uppercase text-rose-500 mb-3 block">Быстро и аккуратно</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4" style={{ color: "var(--brand-dark)" }}>
            Условия <span className="text-gradient italic">доставки</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {DELIVERY_ZONES.map((z, i) => (
            <div key={i} className="relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              style={{ borderColor: `${z.color}20` }}>
              <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl" style={{ background: z.color }} />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1" style={{ color: "var(--brand-dark)" }}>{z.zone}</h3>
                  <div className="flex items-center gap-2 text-stone-500 font-body text-sm">
                    <Icon name="Clock" size={14} />
                    {z.time}
                  </div>
                </div>
                <div className="text-2xl font-display font-bold" style={{ color: z.color }}>
                  {z.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "PackageCheck", title: "Свежесть гарантируем", desc: "Все цветы поступают ежедневно от проверенных поставщиков", color: "var(--brand-green)" },
            { icon: "MessageCircle", title: "Фото перед отправкой", desc: "Пришлём фото готового букета в WhatsApp или Telegram", color: "var(--brand-rose)" },
            { icon: "RotateCcw", title: "Возврат и замена", desc: "Если букет не понравился — заменим или вернём деньги", color: "var(--brand-gold)" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 text-center border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${item.color}20` }}>
                <Icon name={item.icon as "PackageCheck"} size={22} style={{ color: item.color }} />
              </div>
              <h4 className="font-display text-lg font-bold mb-2" style={{ color: "var(--brand-dark)" }}>{item.title}</h4>
              <p className="font-body text-sm text-stone-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
