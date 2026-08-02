"use client";

import { X } from "lucide-react";

const filters = [
  "Electronics",
  "Apple",
  "₹10,000 - ₹50,000",
  "4★ & Above",
];

export default function ActiveFilters() {
  return (
    <section className="mt-6 flex flex-wrap items-center justify-between gap-4">

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-3">

        {filters.map((filter) => (
          <button
            key={filter}
            className="group flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition hover:border-orange-500 hover:bg-orange-100"
          >
            {filter}

            <X
              size={15}
              className="transition group-hover:rotate-90"
            />
          </button>
        ))}

      </div>

      {/* Clear */}
      <button className="text-sm font-semibold text-slate-500 transition hover:text-red-500">
        Clear All
      </button>

    </section>
  );
}