export const PRODUCTS = [
  { id: 1, name: "Розовый рассвет", price: 3200, tag: "Хит", emoji: "🌸", desc: "Нежные пионы и розы", category: "Букеты" },
  { id: 2, name: "Алая страсть", price: 4500, tag: "Новинка", emoji: "🌹", desc: "Красные розы премиум", category: "Букеты" },
  { id: 3, name: "Солнечный день", price: 2800, tag: "", emoji: "🌻", desc: "Яркие подсолнухи", category: "Букеты" },
  { id: 4, name: "Лавандовый сон", price: 3900, tag: "Топ", emoji: "💜", desc: "Лаванда и эустома", category: "Монобукеты" },
  { id: 5, name: "Белая элегантность", price: 5200, tag: "Люкс", emoji: "🤍", desc: "Белые лилии и орхидеи", category: "Премиум" },
  { id: 6, name: "Весенний бриз", price: 2400, tag: "", emoji: "🌷", desc: "Тюльпаны и нарциссы", category: "Монобукеты" },
  { id: 7, name: "Тропический рай", price: 4100, tag: "Новинка", emoji: "🌺", desc: "Экзотические цветы", category: "Премиум" },
  { id: 8, name: "Полевые мечты", price: 1900, tag: "", emoji: "🌼", desc: "Полевые ромашки", category: "Монобукеты" },
];

export const CATEGORIES = ["Все", "Букеты", "Монобукеты", "Премиум"];

export const DELIVERY_ZONES = [
  { zone: "Центр города", time: "1–2 часа", price: "Бесплатно", color: "#6a8f4e" },
  { zone: "В пределах МКАД", time: "2–3 часа", price: "350 ₽", color: "#c94070" },
  { zone: "За МКАД (до 20 км)", time: "3–4 часа", price: "650 ₽", color: "#e8b84b" },
  { zone: "Срочная доставка", time: "60 минут", price: "от 900 ₽", color: "#a855f7" },
];

export interface CartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  qty: number;
}
