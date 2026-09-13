import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthLayout bannerVariant="register">
      <div className="w-full max-w-md">

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Join VisionCart
        </span>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Create Account
        </h1>

        <p className="mt-3 text-slate-500">
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