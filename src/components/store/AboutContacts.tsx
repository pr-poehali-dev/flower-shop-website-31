import { useState } from "react";
import Icon from "@/components/ui/icon";

// ---- ABOUT ----
export function About() {
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
export function Contacts() {
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

// ---- FOOTER ----
export function Footer({ onNav }: { onNav: (s: string) => void }) {
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
