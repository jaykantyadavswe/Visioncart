import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthLayout bannerVariant="register">
      <div className="w-full max-w-md">

        <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
          Join VisionCart
        </span>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Create Account
        </h1>

        <p className="mt-3 leading-7 text-slate-500">
          Create your account and start shopping in minutes.
        </p>

        <RegisterForm />

        <SocialLogin />

        <p className="mt-8 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-orange-600 hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
}