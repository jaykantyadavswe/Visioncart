import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import AuthFooter from "@/components/auth/AuthFooter";

export default function LoginPage() {
  return (
    <AuthLayout bannerVariant="login">
      <div className="w-full max-w-md">

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Welcome Back
        </span>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Sign In
        </h1>

        <p className="mt-3 text-slate-500">
          Enter your credentials to access your VisionCart account.
        </p>

        <LoginForm />

        <SocialLogin />

        <AuthFooter />

      </div>
    </AuthLayout>
  );
}