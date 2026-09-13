"use client";

import { ShoppingCart, Zap } from "lucide-react";

export default function ProductActions() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      {/* Add to Cart */}

      <button
        className="
        flex
        flex-1
        items-center
        justify-center
        gap-2
        rounded-2xl
        border-2
        border-orange-600
        bg-white
        px-6
        py-4
        font-semibold
        text-orange-600
        transition-all
        duration-300
        hover:bg-orange-50
        "
      >
        <ShoppingCart size={20} />
        Add to Cart
      </button>

      {/* Buy Now */}

      <button
        className="
        flex
        flex-1
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-orange-600
        px-6
        py-4
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-orange-700
        hover:shadow-xl
        "
      >
        <Zap size={20} />
        Buy Now
      </button>

    </div>
  );
}