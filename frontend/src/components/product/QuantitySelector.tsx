"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex w-fit items-center overflow-hidden rounded-2xl border border-slate-300 bg-white">

      <button
        onClick={decrease}
        className="p-4 transition hover:bg-orange-50 hover:text-orange-600"
      >
        <Minus size={18} />
      </button>

      <span className="min-w-16 border-x border-slate-200 px-6 py-4 text-center text-lg font-semibold">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="p-4 transition hover:bg-orange-50 hover:text-orange-600"
      >
        <Plus size={18} />
      </button>

    </div>
  );
}