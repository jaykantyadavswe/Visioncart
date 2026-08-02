"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function ShopToolbar() {
  return (
    <section className="sticky top-20 z-20 border-b border-slate-200 bg-white">
      <div className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        {/* Right Controls */}
        <div className="flex flex-wrap items-center gap-3">

          {/* Category */}
          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Gaming</option>
            <option>Beauty</option>
            <option>Books</option>
          </select>

          {/* Sort */}
          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500">
            <option>Newest</option>
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Highest Rated</option>
          </select>

          {/* Filter Button */}
          <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 transition hover:border-orange-500 hover:text-orange-600">
            <SlidersHorizontal size={18} />
            Filters
          </button>

        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between border-t border-slate-100 py-4 text-sm text-slate-500">

        <p>
          Showing <span className="font-semibold text-slate-800">1–12</span> of{" "}
          <span className="font-semibold text-slate-800">120</span> products
        </p>

        <p>
          <span className="font-semibold text-orange-600">12</span> results per
          page
        </p>

      </div>
    </section>
  );
}