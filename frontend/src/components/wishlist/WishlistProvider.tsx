"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

type WishlistContextValue = {
  wishlist: number[];
  isWishlisted: (productId: number) => boolean;
  toggleWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "visioncart-wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedWishlist = window.localStorage.getItem(STORAGE_KEY);
      if (storedWishlist) {
        try {
          const parsedWishlist: unknown = JSON.parse(storedWishlist);
          if (Array.isArray(parsedWishlist) && parsedWishlist.every((id) => typeof id === "number")) setWishlist(parsedWishlist);
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
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const value = useMemo<WishlistContextValue>(() => ({
    wishlist,
    isWishlisted: (productId) => wishlist.includes(productId),
    toggleWishlist: (productId) => {
      setWishlist((current) => current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]);
    },
    removeFromWishlist: (productId) => {
      setWishlist((current) => current.filter((id) => id !== productId));
    },
  }), [wishlist]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
}
