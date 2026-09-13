"use client";

import { Search, ArrowUpDown } from "lucide-react";

const filters = [
  "All",
  "Delivered",
  "Shipped",
  "Processing",
  "Cancelled",
  "Returned",
];

export default function OrderFilters() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative w-full lg:max-w-md">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search by product or Order ID..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
          />

        </div>

        {/* Sort */}

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:border-orange-500">

          <ArrowUpDown size={18} />

          Newest First

        </button>

      </div>

      {/* Status Chips */}

      <div className="mt-6 flex flex-wrap gap-3">

        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              index === 0
                ? "bg-orange-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600"
            }`}
          >
            {filter}
          </button>
        ))}

      </div>

    </section>
  );
}