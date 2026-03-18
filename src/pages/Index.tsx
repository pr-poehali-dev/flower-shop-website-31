import { useState, useEffect } from "react";
import { PRODUCTS, CartItem } from "@/components/store/data";
import Navbar from "@/components/store/Navbar";
import { Hero, Catalog, Delivery } from "@/components/store/ShopSections";
import { About, Contacts, Footer } from "@/components/store/AboutContacts";
import CartDrawer from "@/components/store/CartDrawer";

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
