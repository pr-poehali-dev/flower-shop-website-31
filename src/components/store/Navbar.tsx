import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
  activeSection: string;
  onNav: (s: string) => void;
}

export default function Navbar({ cartCount, onCartOpen, activeSection, onNav }: NavbarProps) {
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
