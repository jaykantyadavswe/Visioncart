import AuthLayout from "@/components/auth/AuthLayout";
import VerifyOtpForm from "@/components/auth/VerifyOtpForm";

export default function VerifyOtpPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Email Verification
        </span>

        <h1 className="mt-6 text-4xl font-bold">
          Verify OTP
        </h1>

        <p className="mt-3 text-slate-500">
          We&apos;ve sent a 6-digit verification code to your email.
        </p>

        <VerifyOtpForm />

      </div>
    </AuthLayout>
  );
}