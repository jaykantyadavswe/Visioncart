"use client";

import { Heart } from "lucide-react";
import { toast } from "sonner";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { shopCatalog } from "@/app/lib/shopCatalog";

export default function ProductDetailActions({ id, title }: { id: number; title: string }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(id);
  const product = shopCatalog.find((item) => item.id === id);

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {product && <AddToCartButton product={product} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-orange-600" />}
      <button onClick={() => { toggleWishlist(id); toast.success(`${title} ${wishlisted ? "removed from" : "saved to"} your wishlist`); }} className={`flex items-center justify-center gap-2 rounded-2xl border px-5 py-4 font-semibold transition ${wishlisted ? "border-orange-400 bg-orange-50 text-orange-600" : "border-slate-300 text-slate-700 hover:border-orange-400 hover:text-orange-600"}`}>
        <Heart size={19} className={wishlisted ? "fill-orange-500" : ""} /> {wishlisted ? "Saved" : "Wishlist"}
      </button>
    </div>
  );
}