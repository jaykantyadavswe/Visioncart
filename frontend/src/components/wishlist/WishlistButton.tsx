"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "./WishlistProvider";

export default function WishlistButton({ productId, title, className = "" }: { productId: number; title: string; className?: string }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(productId);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(productId)}
      aria-label={`${wishlisted ? "Remove" : "Add"} ${title} ${wishlisted ? "from" : "to"} wishlist`}
      aria-pressed={wishlisted}
      className={className}
    >
      <Heart size={18} className={wishlisted ? "fill-orange-500 text-orange-500" : ""} />
    </button>
  );
}
