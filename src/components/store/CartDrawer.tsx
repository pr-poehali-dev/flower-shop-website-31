import { useState } from "react";
import Icon from "@/components/ui/icon";
import { CartItem } from "./data";

interface CartDrawerProps {
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
}

export default function CartDrawer({ items, onClose, onRemove, onUpdateQty }: CartDrawerProps) {
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
