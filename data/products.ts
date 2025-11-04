import type { Product } from "../types";
import Bodywash from "../assets/Body Wash.webp";
import Dailyfacewash from "../assets/Daily Face Wash.webp";
import HydratingS from "../assets/Hydrating_Serum.webp";
import Matelipstick from "../assets/Matte Lipstick.webp";
import Sunscreen from "../assets/Sunscreen SPF 50.webp";
import NightCream from "../assets/Night_Cream.webp";

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Body Wash",
    price: 25.5,
    discount: 35,
    imageUrl: Bodywash,
    description:
      "A refreshing and moisturizing body wash infused with natural extracts. Leaves your skin feeling soft, clean, and hydrated all day long. Perfect for all skin types.",
  },
  {
    id: 2,
    name: "Daily Face Wash",
    price: 18.0,
    discount: 35,
    imageUrl: Dailyfacewash,
    description:
      "A gentle yet effective daily face wash that removes impurities without stripping the skin of its natural oils. Formulated with antioxidants to protect and brighten your complexion.",
  },
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 3,
    name: "Hydrating Serum",
    price: 32.0,
    imageUrl: HydratingS,
    description:
      "A powerful hydrating serum with hyaluronic acid that plumps the skin and reduces the appearance of fine lines. Lightweight and fast-absorbing.",
  },
  {
    id: 4,
    name: "Matte Lipstick",
    price: 22.5,
    discount: 15,
    imageUrl: Matelipstick,
    description:
      "A long-lasting matte lipstick with a creamy texture. Provides full coverage and a comfortable, non-drying finish. Available in 12 shades.",
  },
  {
    id: 5,
    name: "Sunscreen SPF 50",
    price: 28.0,
    imageUrl: Sunscreen,
    description:
      "A broad-spectrum SPF 50 sunscreen that protects against UVA and UVB rays. Lightweight, non-greasy, and perfect for daily use under makeup.",
  },
  {
    id: 6,
    name: "Night Cream",
    price: 45.0,
    imageUrl: NightCream,
    description:
      "A rich and restorative night cream that works while you sleep to repair and rejuvenate your skin. Wake up to a smoother, more radiant complexion.",
  },
];
