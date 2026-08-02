"use client";

import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ChevronDown,
} from "lucide-react";

export default function ShopActions() {
  return (
    <section className=" top-16 z-30 border-b border-slate-200">
      <div className="flex flex-col gap-5 py-6">

        {/* Search */}
        <div className="relative">

          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search products, brands, categories..."
            className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 pl-14 pr-5 text-sm outline-none transition-all focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
          />

        </div>

        {/* Bottom Toolbar */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div className="flex flex-wrap items-center gap-3">

            <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium transition hover:border-orange-500 hover:text-orange-600">
              <SlidersHorizontal size={18} />
              Filters
            </button>

            <div className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-600">
              2,456 Products
            </div>

          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-3">

            {/* Grid/List */}
            <div className="flex overflow-hidden rounded-xl border border-slate-300">

              <button className="bg-orange-600 p-3 text-white">
                <LayoutGrid size={18} />
              </button>

              <button className="p-3 transition hover:bg-slate-100">
                <List size={18} />
              </button>

            </div>

            {/* Sort */}
            <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium transition hover:border-orange-500">
              Newest
              <ChevronDown size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}