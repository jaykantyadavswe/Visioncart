"use client";

import {
  ChevronDown,
  RotateCcw,
  Star,
} from "lucide-react";

const categories = [
  "Electronics",
  "Fashion",
  "Gaming",
  "Books",
  "Beauty",
];

const brands = [
  "Apple",
  "Samsung",
  "Nike",
  "Sony",
  "Adidas",
];

const colors = [
  "#000000",
  "#FFFFFF",
  "#2563EB",
  "#EF4444",
  "#10B981",
  "#F59E0B",
];

const sizes = ["S", "M", "L", "XL"];

export default function FilterSidebar() {
  return (
    <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Filters
        </h2>

        <button className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700">
          <RotateCcw size={16} />
          Reset
        </button>

      </div>

      {/* Categories */}

      <div className="border-b border-slate-200 pb-6">

        <button className="mb-5 flex w-full items-center justify-between font-semibold">
          Categories
          <ChevronDown size={18} />
        </button>

        <div className="space-y-3">

          {categories.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                className="accent-orange-600"
              />

              <span>{item}</span>

            </label>
          ))}

        </div>

      </div>

      {/* Price */}

      <div className="border-b border-slate-200 py-6">

        <button className="mb-5 flex w-full items-center justify-between font-semibold">
          Price
          <ChevronDown size={18} />
        </button>

        <input
          type="range"
          className="w-full accent-orange-600"
        />

        <div className="mt-4 flex justify-between text-sm text-slate-500">
          <span>₹500</span>
          <span>₹50,000</span>
        </div>

      </div>

      {/* Brands */}

      <div className="border-b border-slate-200 py-6">

        <button className="mb-5 flex w-full items-center justify-between font-semibold">
          Brands
          <ChevronDown size={18} />
        </button>

        <input
          placeholder="Search brand..."
          className="mb-4 w-full rounded-xl border px-4 py-2 outline-none focus:border-orange-500"
        />

        <div className="space-y-3">

          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                className="accent-orange-600"
              />

              {brand}

            </label>
          ))}

        </div>

      </div>

      {/* Rating */}

      <div className="border-b border-slate-200 py-6">

        <button className="mb-5 flex w-full items-center justify-between font-semibold">
          Rating
          <ChevronDown size={18} />
        </button>

        <div className="space-y-3">

          {[5, 4, 3].map((rating) => (
            <button
              key={rating}
              className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-orange-50"
            >
              {Array.from({ length: rating }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="text-sm text-slate-500">
                & Up
              </span>

            </button>
          ))}

        </div>

      </div>

      {/* Colors */}

      <div className="border-b border-slate-200 py-6">

        <h3 className="mb-5 font-semibold">
          Colors
        </h3>

        <div className="flex flex-wrap gap-3">

          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className="h-8 w-8 rounded-full border-2 border-slate-200 transition hover:scale-110"
            />
          ))}

        </div>

      </div>

      {/* Sizes */}

      <div className="py-6">

        <h3 className="mb-5 font-semibold">
          Size
        </h3>

        <div className="grid grid-cols-4 gap-3">

          {sizes.map((size) => (
            <button
              key={size}
              className="rounded-xl border py-2 transition hover:border-orange-500 hover:bg-orange-50"
            >
              {size}
            </button>
          ))}

        </div>

      </div>

    </aside>
  );
}