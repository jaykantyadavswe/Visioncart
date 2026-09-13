"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form className="mt-10 space-y-6">

      {/* New Password */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          New Password
        </label>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            className="h-14 w-full rounded-xl border border-slate-300 pl-12 pr-12 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>

        </div>

      </div>

      {/* Confirm Password */}

      <div>

        <label className="mb-2 block text-sm font-semibold">
          Confirm Password
        </label>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            className="h-14 w-full rounded-xl border border-slate-300 pl-12 pr-12 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showConfirm ? <EyeOff /> : <Eye />}
          </button>

        </div>

      </div>

      {/* Password Strength */}

      <div>

        <div className="flex justify-between text-sm">

          <span>Password Strength</span>

          <span className="font-semibold text-green-600">
            Strong
          </span>

        </div>

        <div className="mt-2 h-2 rounded-full bg-slate-200">

          <div className="h-full w-3/4 rounded-full bg-green-500"></div>

        </div>

      </div>

      {/* Submit */}

      <button
        className="h-14 w-full rounded-xl bg-orange-600 font-semibold text-white transition hover:bg-orange-700"
      >
        Update Password
      </button>

    </form>
  );
}