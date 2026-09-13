"use client";

import Link from "next/link";
import { CalendarDays, UserPen, Package } from "lucide-react";

export default function AccountHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <span className="text-sm font-medium text-orange-600">
            Welcome Back 👋
          </span>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Hi, Jaykant
          </h1>

          <p className="mt-3 max-w-xl text-slate-500">
            Manage your orders, wishlist, saved addresses,
            and account settings from one place.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

            <CalendarDays size={18} />

            <span>{today}</span>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-4">

          <Link
            href="/account/orders"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            <Package size={18} />

            My Orders
          </Link>

          <Link
            href="/account/settings"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
          >
            <UserPen size={18} />

            Edit Profile
          </Link>

        </div>

      </div>

    </div>
  );
}