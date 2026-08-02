"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row">

      {/* Results */}
      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold text-slate-800">1–12</span> of{" "}
        <span className="font-semibold text-slate-800">120</span> products
      </p>

      {/* Pagination */}
      <div className="flex items-center gap-2">

        {/* Previous */}
        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 transition hover:border-orange-500 hover:text-orange-600">
          <ChevronLeft size={18} />
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`h-10 w-10 rounded-xl font-medium transition ${
              page === 1
                ? "bg-orange-600 text-white"
                : "border border-slate-300 hover:border-orange-500 hover:text-orange-600"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 transition hover:border-orange-500 hover:text-orange-600">
          Next
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}