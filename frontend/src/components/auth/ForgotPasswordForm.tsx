"use client";

import { Mail } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordForm() {
  return (
    <form className="mt-10 space-y-6">

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Email Address
        </label>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="h-14 w-full rounded-xl border border-slate-300 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          />

        </div>

      </div>

      <button
        className="h-14 w-full rounded-xl bg-orange-600 font-semibold text-white transition hover:bg-orange-700"
      >
        Send Verification Code
      </button>

      <Link
        href="/login"
        className="block text-center text-sm font-medium text-orange-600 hover:underline"
      >
        ← Back to Login
      </Link>

    </form>
  );
}