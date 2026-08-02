"use client";

import {
  LayoutGrid,
  List,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

export default function ProductToolbar() {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mt-2">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex flex-wrap items-center gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 transition hover:border-orange-500 hover:text-orange-600 lg:hidden">
            <SlidersHorizontal size={18} />
            Filters
          </button>

          <p className="text-sm text-slate-500">
            Showing
            <span className="mx-1 font-semibold text-slate-900">
              1–12
            </span>
            of
            <span className="mx-1 font-semibold text-slate-900">
              2,456
            </span>
            Products
          </p>

        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-3">

          {/* Sort */}

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm transition hover:border-orange-500">

            Sort By

            <span className="font-semibold">
              Newest
            </span>

            <ChevronDown size={17} />

          </button>

          {/* Grid/List */}

          <div className="flex overflow-hidden rounded-xl border border-slate-200">

            <button className="bg-orange-600 p-3 text-white">
              <LayoutGrid size={18} />
            </button>

            <button className="p-3 hover:bg-slate-100">
              <List size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}