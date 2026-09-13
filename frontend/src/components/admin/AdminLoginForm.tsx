"use client";

import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";
import { useState } from "react";

export default function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

      <div className="mb-8 text-center">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">

          <Shield className="text-white" size={28} />

        </div>

        <h1 className="text-3xl font-bold text-white">

          Admin Portal

        </h1>

        <p className="mt-2 text-slate-400">

          Sign in to manage VisionCart

        </p>

      </div>

      {/* Email */}

      <div className="mb-5">

        <label className="mb-2 block text-sm text-slate-300">

          Email

        </label>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="email"
            placeholder="admin@visioncart.com"
            className="h-12 w-full rounded-xl border border-slate-700 bg-slate-800 pl-11 pr-4 text-white outline-none transition focus:border-orange-500"
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <label className="mb-2 block text-sm text-slate-300">

          Password

        </label>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="h-12 w-full rounded-xl border border-slate-700 bg-slate-800 pl-11 pr-12 text-white outline-none transition focus:border-orange-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

      </div>

      <button className="mt-8 h-12 w-full rounded-xl bg-orange-600 font-semibold text-white transition hover:bg-orange-700">

        Login as Admin

      </button>

      <Link
        href="/login"
        className="mt-6 block text-center text-sm text-slate-400 hover:text-white"
      >
        ← Back to Customer Login
      </Link>

    </div>
  );
}