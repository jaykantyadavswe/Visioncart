"use client";

import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    if (loading) return;
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5050/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to log in user");
      }

      if (rememberMe) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }

      toast.success("Logged in successfully");

      setTimeout(() => {
        router.push("/discover");
      }, 1000);
    } catch (error) {
      toast.error(`Login failed ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-7 space-y-4" onSubmit={handleSubmit}>

      {/* Email */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-800">
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
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Password
        </label>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition hover:bg-orange-50 hover:text-orange-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

      </div>

      {/* Remember + Forgot */}

      <div className="flex items-center justify-between gap-4 px-1">

        <label className="flex items-center gap-2 text-sm text-slate-600">

          <input
            type="checkbox"
            className="h-4 w-4 accent-orange-600"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <span className="whitespace-nowrap">Remember me</span>

        </label>

        <Link
          href="/forgot-password"
          className="whitespace-nowrap text-sm font-semibold text-orange-600 transition hover:text-orange-700 hover:underline"
        >
          Forgot Password?
        </Link>

      </div>

      {/* Login Button */}

      <button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

    </form>
  );
}