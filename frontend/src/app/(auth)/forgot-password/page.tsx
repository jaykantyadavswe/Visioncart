import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Forgot Password
        </span>

        <h1 className="mt-6 text-4xl font-bold">
          Reset Password
        </h1>

        <p className="mt-3 text-slate-500">
          Enter your registered email address and we'll send you a verification code.
        </p>

        <ForgotPasswordForm />

      </div>
    </AuthLayout>
  );
}