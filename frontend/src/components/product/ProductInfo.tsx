"use client";

import {
  Heart,
  Share2,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";

const colors = [
  "#000000",
  "#2563EB",
  "#F97316",
  "#F5F5F5",
];

const storage = [
  "128GB",
  "256GB",
  "512GB",
];

export default function ProductInfo() {
  return (
    <div>

      {/* Category */}

      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
        Electronics
      </span>

      {/* Title */}

      <h1 className="mt-5 text-4xl font-bold text-slate-900">
        Apple iPhone 15 Pro Max
      </h1>

      {/* Brand */}

      <p className="mt-2 text-slate-500">
        by
        <span className="ml-2 font-semibold text-slate-900">
          Apple
        </span>
      </p>

      {/* Rating */}

      <div className="mt-5 flex flex-wrap items-center gap-4">

        <div className="flex items-center gap-2">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">
            4.9
          </span>

          <span className="text-slate-500">
            (245 Reviews)
          </span>

        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          In Stock
        </span>

      </div>

      {/* Price */}

      <div className="mt-8 flex items-center gap-4">

        <span className="text-4xl font-bold text-slate-900">
          ₹99,999
        </span>

        <span className="text-xl text-slate-400 line-through">
          ₹109,999
        </span>

        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
          10% OFF
        </span>

      </div>

      {/* Description */}

      <p className="mt-6 leading-8 text-slate-600">
        Experience premium performance with the latest processor,
        stunning display, professional-grade cameras, and
        all-day battery life.
      </p>

      {/* Colors */}

      <div className="mt-8">

        <h3 className="font-semibold">
          Color
        </h3>

        <div className="mt-4 flex gap-3">

          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className="h-10 w-10 rounded-full border-2 border-slate-200 transition hover:scale-110"
            />
          ))}

        </div>

      </div>

      {/* Storage */}

      <div className="mt-8">

        <h3 className="font-semibold">
          Storage
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">

          {storage.map((item) => (
            <button
              key={item}
              className="rounded-xl border border-slate-300 px-5 py-3 transition hover:border-orange-500 hover:bg-orange-50"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Quantity */}

      <div className="mt-8">

        <h3 className="mb-4 font-semibold">
          Quantity
        </h3>

        <QuantitySelector />

      </div>

      {/* Buttons */}

      <div className="mt-8">

        <ProductActions />

      </div>

      {/* Wishlist & Share */}

      <div className="mt-6 flex gap-4">

        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:border-orange-500">
          <Heart size={18} />
          Wishlist
        </button>

        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:border-orange-500">
          <Share2 size={18} />
          Share
        </button>

      </div>

      {/* Features */}

      <div className="mt-10 space-y-4 rounded-2xl border bg-slate-50 p-6">

        <div className="flex items-center gap-3">
          <Truck className="text-orange-600" size={20} />
          <span>Free delivery on eligible orders</span>
        </div>

        <div className="flex items-center gap-3">
          <RotateCcw className="text-orange-600" size={20} />
          <span>30-Day easy returns</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-orange-600" size={20} />
          <span>100% Secure checkout</span>
        </div>

      </div>

    </div>
  );
}