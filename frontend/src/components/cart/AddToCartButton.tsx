"use client";

import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import type { ShopProduct } from "@/app/lib/shopCatalog";
import { useCart } from "./CartProvider";

export default function AddToCartButton({ product, className = "", iconOnly = false }: { product: ShopProduct; className?: string; iconOnly?: boolean }) {
  const { addToCart } = useCart();

  return (
    <button type="button" aria-label={`Add ${product.title} to cart`} onClick={() => { addToCart(product); toast.success(`${product.title} added to your cart`); }} className={className}>
      <ShoppingBag size={17} /> {!iconOnly && "Add to cart"}
    </button>
  );
}
