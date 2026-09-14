"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Store,
  ShoppingBag,
} from "lucide-react";

import { toast } from "sonner";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    if(loading) return; // Prevent multiple submissions

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields!");
      setLoading(false);
      return;
    }

    if (!acceptTerms) {
      toast.error("You must accept the terms and conditions to register.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5050/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name, email, password
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed to register user");
        return;
      }

      localStorage.setItem("token", data.token);

      toast.success("Account created successfully");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      toast.error(`Registration failed ${error instanceof Error ? error.message : "Unknown error"}`);
    }finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

      {/* Full Name */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Full Name
        </label>

        <div className="relative">

          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="John Doe"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

      </div>

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
            placeholder="Jay@gmail.com"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

      </div>

      {/* Account Type */}

      <div>

        <label className="mb-3 block text-sm font-semibold text-slate-800">
          Account Type
        </label>

        <div className="grid grid-cols-2 gap-3">

          <button
            type="button"
            className="rounded-xl border-2 border-orange-500 bg-orange-50 p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600"
          >
            <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-600 shadow-sm">
              <ShoppingBag size={19} />
            </span>

            <p className="text-sm font-bold text-slate-900">
              Customer
            </p>
          </button>

          <button
            type="button"
            className="rounded-xl border-2 border-slate-200 bg-white p-3 text-center transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50/40"
          >
            <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Store size={19} />
            </span>

            <p className="text-sm font-bold text-slate-700">
              Seller
            </p>
          </button>

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
            placeholder="Password"
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

      {/* Confirm Password */}

      <div>

        <label className="mb-2 block text-sm font-semibold text-slate-800">
          Confirm Password
        </label>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            aria-label={showConfirm ? "Hide confirmed password" : "Show confirmed password"}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition hover:bg-orange-50 hover:text-orange-600"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

      </div>

      {/* Terms */}

      <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-600">

        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-orange-600"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />

        <span>
          I agree to the{" "}
          <Link href="/terms" className="font-medium text-orange-600">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium text-orange-600">
            Privacy Policy
          </Link>
        </span>

      </label>

      {/* Button */}

      <button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Registering..." : "Register"} 
      </button>

    </form>
  );
}