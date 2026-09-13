import AuthLayout from "@/components/auth/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Reset Password
        </span>

        <h1 className="mt-6 text-4xl font-bold">
          Create New Password
        </h1>

        <p className="mt-3 text-slate-500">
          Choose a strong password to secure your account.
        </p>

        <ResetPasswordForm />

      </div>
    </AuthLayout>
  );
}