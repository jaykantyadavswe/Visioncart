"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ShopProduct } from "@/app/lib/shopCatalog";

export type CartItem = { product: ShopProduct; quantity: number };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (product: ShopProduct, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "visioncart-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed: unknown = JSON.parse(stored);
          if (Array.isArray(parsed)) setItems(parsed);
        } catch {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
      hydrated.current = true;
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    addToCart: (product, quantity = 1) => setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) return current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      return [...current, { product, quantity }];
    }),
    removeFromCart: (productId) => setItems((current) => current.filter((item) => item.product.id !== productId)),
    updateQuantity: (productId, quantity) => setItems((current) => quantity <= 0
      ? current.filter((item) => item.product.id !== productId)
      : current.map((item) => item.product.id === productId ? { ...item, quantity } : item)),
    clearCart: () => setItems([]),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
