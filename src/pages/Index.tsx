import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// ---- DATA ----
const PRODUCTS = [
  { id: 1, name: "Розовый рассвет", price: 3200, tag: "Хит", emoji: "🌸", desc: "Нежные пионы и розы", category: "Букеты" },
  { id: 2, name: "Алая страсть", price: 4500, tag: "Новинка", emoji: "🌹", desc: "Красные розы премиум", category: "Букеты" },
  { id: 3, name: "Солнечный день", price: 2800, tag: "", emoji: "🌻", desc: "Яркие подсолнухи", category: "Букеты" },
  { id: 4, name: "Лавандовый сон", price: 3900, tag: "Топ", emoji: "💜", desc: "Лаванда и эустома", category: "Монобукеты" },
  { id: 5, name: "Белая элегантность", price: 5200, tag: "Люкс", emoji: "🤍", desc: "Белые лилии и орхидеи", category: "Премиум" },
  { id: 6, name: "Весенний бриз", price: 2400, tag: "", emoji: "🌷", desc: "Тюльпаны и нарциссы", category: "Монобукеты" },
  { id: 7, name: "Тропический рай", price: 4100, tag: "Новинка", emoji: "🌺", desc: "Экзотические цветы", category: "Премиум" },
  { id: 8, name: "Полевые мечты", price: 1900, tag: "", emoji: "🌼", desc: "Полевые ромашки", category: "Монобукеты" },
];

const CATEGORIES = ["Все", "Букеты", "Монобукеты", "Премиум"];

const DELIVERY_ZONES = [
  { zone: "Центр города", time: "1–2 часа", price: "Бесплатно", color: "#6a8f4e" },
  { zone: "В пределах МКАД", time: "2–3 часа", price: "350 ₽", color: "#c94070" },
  { zone: "За МКАД (до 20 км)", time: "3–4 часа", price: "650 ₽", color: "#e8b84b" },
  { zone: "Срочная доставка", time: "60 минут", price: "от 900 ₽", color: "#a855f7" },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  qty: number;
}

// ---- NAVBAR ----
function Navbar({ cartCount, onCartOpen, activeSection, onNav }: {
  cartCount: number;
  onCartOpen: () => void;
  activeSection: string;
  onNav: (s: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { id: "catalog", label: "Каталог" },
    { id: "delivery", label: "Доставка" },
    { id: "about", label: "О магазине" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass shadow-lg shadow-rose-100/50" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => onNav("hero")} className="flex items-center gap-2">
          <img src="https://cdn.poehali.dev/projects/b2986cc1-1d07-475c-98c5-02810cc538bc/bucket/8401e138-a120-4ec3-bf44-44cef6666120.jpg" alt="ЦветЁж" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-display font-bold tracking-tight" style={{ color: "var(--brand-rose)" }}>ЦветЁж</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => onNav(l.id)}
              className={`font-body text-sm font-medium transition-all relative group ${activeSection === l.id ? "text-rose-600" : "text-stone-600 hover:text-rose-600"}`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-rose-500 transition-all duration-300 ${activeSection === l.id ? "w-full" : "w-0 group-hover:w-full"}`} />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartOpen}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: "var(--brand-rose)" }}
          >
            <Icon name="ShoppingBag" size={16} />
            <span className="hidden sm:inline">Корзина</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold animate-scale-in"
                style={{ background: "var(--brand-gold)", color: "#1a1208" }}>
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/50 px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <button key={l.id} onClick={() => { onNav(l.id); setMenuOpen(false); }}
              className="text-left font-body text-base py-2 text-stone-700 hover:text-rose-600 transition-colors">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ---- HERO ----
function Hero({ onNav }: { onNav: (s: string) => void }) {
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
function Catalog({ onAddToCart }: { onAddToCart: (p: typeof PRODUCTS[0]) => void }) {
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
function Delivery() {
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

// ---- ABOUT ----
function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden relative" style={{ background: "var(--brand-dark)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 text-9xl opacity-10 rotate-12">🌸</div>
        <div className="absolute bottom-10 -left-10 text-8xl opacity-10 -rotate-12">🌺</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: "var(--brand-rose)" }} />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-body text-sm font-medium tracking-widest uppercase text-rose-400 mb-4 block">Наша история</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              С любовью<br />к <span className="italic" style={{ color: "var(--brand-gold)" }}>цветам</span><br />с 2015 года
            </h2>
            <p className="font-body text-stone-400 text-lg mb-6 leading-relaxed">
              Мы начинали как маленький бутик в центре города, и за 9 лет стали любимым цветочным магазином тысяч москвичей.
            </p>
            <p className="font-body text-stone-400 mb-8 leading-relaxed">
              Каждый букет — это ручная работа наших флористов с опытом от 5 лет. Мы подбираем только самые свежие цветы и следим за каждой деталью.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "9", label: "лет опыта" },
                { num: "15", label: "флористов" },
                { num: "50к+", label: "букетов создано" },
              ].map(s => (
                <div key={s.label} className="text-center p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div className="font-display text-3xl font-bold" style={{ color: "var(--brand-gold)" }}>{s.num}</div>
                  <div className="font-body text-xs text-stone-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/b2986cc1-1d07-475c-98c5-02810cc538bc/files/9c11050e-4dbc-48d8-afbe-a0774efefaaf.jpg"
                alt="Наш магазин"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,18,8,0.6), transparent)" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: "rgba(201,64,112,0.15)" }}>🏆</div>
                <div>
                  <div className="font-body font-bold text-stone-800 text-sm">Лучший флорист 2023</div>
                  <div className="font-body text-xs text-stone-500">по версии GeoReviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- CONTACTS ----
function Contacts() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacts" className="py-24 px-6" style={{ background: "var(--brand-cream)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-medium tracking-widest uppercase text-rose-500 mb-3 block">Будем рады помочь</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--brand-dark)" }}>
            Свяжитесь <span className="text-gradient italic">с нами</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              { icon: "Phone", title: "+7 (495) 123-45-67", sub: "Ежедневно 8:00 — 22:00", color: "var(--brand-rose)" },
              { icon: "MessageCircle", title: "WhatsApp / Telegram", sub: "@flora_flowers", color: "var(--brand-green)" },
              { icon: "MapPin", title: "Цветной бульвар, 15", sub: "м. Цветной бульвар, 5 мин пешком", color: "var(--brand-gold)" },
              { icon: "Instagram", title: "@flora.moscow", sub: "Подпишитесь на вдохновение", color: "#e1306c" },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-5 p-5 bg-white rounded-2xl hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}15` }}>
                  <Icon name={c.icon as "Phone"} size={20} style={{ color: c.color }} />
                </div>
                <div>
                  <div className="font-body font-semibold text-stone-800">{c.title}</div>
                  <div className="font-body text-sm text-stone-400">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--brand-dark)" }}>
              Оставьте заявку
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-200 font-body text-sm outline-none focus:border-rose-400 transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border border-stone-200 font-body text-sm outline-none focus:border-rose-400 transition-colors"
              />
              <textarea
                placeholder="Ваш вопрос или пожелание..."
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 font-body text-sm outline-none focus:border-rose-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-body font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-rose-200"
                style={{ background: sent ? "#3a9e5f" : "linear-gradient(135deg, var(--brand-rose), #2d6dd4)" }}
              >
                {sent ? "✓ Заявка отправлена!" : "Отправить заявку"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ---- CART DRAWER ----
function CartDrawer({ items, onClose, onRemove, onUpdateQty }: {
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
}) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => { setOrdered(false); onClose(); }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md h-full bg-white flex flex-col shadow-2xl"
        style={{ animation: "slideRight 0.3s ease-out" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="font-display text-2xl font-bold" style={{ color: "var(--brand-dark)" }}>
            Корзина 🛒
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-100 transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <span className="text-6xl mb-4">🌸</span>
            <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--brand-dark)" }}>Корзина пуста</h3>
            <p className="font-body text-stone-400">Добавьте букеты из каталога</p>
            <button onClick={onClose} className="mt-6 px-6 py-3 rounded-full font-body font-semibold text-white"
              style={{ background: "var(--brand-rose)" }}>
              Перейти в каталог
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4 bg-stone-50 rounded-2xl p-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-semibold text-stone-800 truncate">{item.name}</div>
                    <div className="font-body text-sm font-medium" style={{ color: "var(--brand-rose)" }}>{item.price.toLocaleString("ru")} ₽</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onUpdateQty(item.id, item.qty - 1)}
                      className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-rose-300 transition-colors font-body text-lg text-stone-600">
                      −
                    </button>
                    <span className="font-body font-semibold w-5 text-center">{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:border-rose-300 transition-colors font-body text-lg text-stone-600">
                      +
                    </button>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="p-1.5 rounded-full hover:bg-rose-50 transition-colors text-stone-400 hover:text-rose-500">
                    <Icon name="Trash2" size={15} />
                  </button>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-stone-100">
              <div className="flex justify-between mb-4">
                <span className="font-body text-stone-600">Итого:</span>
                <span className="font-display text-2xl font-bold" style={{ color: "var(--brand-rose)" }}>
                  {total.toLocaleString("ru")} ₽
                </span>
              </div>
              {total < 3000 && (
                <div className="mb-4 p-3 rounded-xl text-sm font-body text-center"
                  style={{ background: "rgba(232,184,75,0.15)", color: "#b8860b" }}>
                  До бесплатной доставки: {(3000 - total).toLocaleString("ru")} ₽
                </div>
              )}
              <button onClick={handleOrder}
                className="w-full py-4 rounded-xl font-body font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-rose-200"
                style={{ background: ordered ? "#3a9e5f" : "linear-gradient(135deg, var(--brand-rose), #2d6dd4)" }}>
                {ordered ? "✓ Заказ оформлен!" : "Оформить заказ"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ---- FOOTER ----
function Footer({ onNav }: { onNav: (s: string) => void }) {
  return (
    <footer className="py-12 px-6" style={{ background: "var(--brand-dark)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/projects/b2986cc1-1d07-475c-98c5-02810cc538bc/bucket/8401e138-a120-4ec3-bf44-44cef6666120.jpg" alt="ЦветЁж" className="h-10 w-10 object-contain" />
            <span className="font-display text-2xl font-bold text-white">ЦветЁж</span>
          </div>
          <div className="flex gap-6">
            {[
              { id: "catalog", label: "Каталог" },
              { id: "delivery", label: "Доставка" },
              { id: "about", label: "О нас" },
              { id: "contacts", label: "Контакты" },
            ].map(l => (
              <button key={l.id} onClick={() => onNav(l.id)} className="font-body text-sm text-stone-500 hover:text-blue-400 transition-colors">
                {l.label}
              </button>
            ))}
          </div>
          <div className="font-body text-sm text-stone-600">© 2025 ЦветЁж. Все права защищены</div>
        </div>
      </div>
    </footer>
  );
}

// ---- MAIN PAGE ----
export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const addToCart = (p: typeof PRODUCTS[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === p.id);
      if (existing) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id: p.id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(i => i.id !== id));

  const updateQty = (id: number, qty: number) => {
    if (qty < 1) { removeFromCart(id); return; }
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const totalCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen">
      <Navbar cartCount={totalCount} onCartOpen={() => setCartOpen(true)} activeSection={activeSection} onNav={scrollTo} />
      <Hero onNav={scrollTo} />
      <Catalog onAddToCart={addToCart} />
      <Delivery />
      <About />
      <Contacts />
      <Footer onNav={scrollTo} />
      {cartOpen && (
        <CartDrawer items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onUpdateQty={updateQty} />
      )}
    </div>
  );
}