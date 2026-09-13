import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import { CircleCheckBig, ArrowRight } from "lucide-react";

export default function PasswordSuccessPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CircleCheckBig
            size={52}
            className="text-green-600"
          />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-slate-900">
          Password Updated
        </h1>

        <p className="mt-4 text-slate-500 leading-7">
          Your password has been changed successfully.
          You can now sign in using your new password.
        </p>

        <Link
          href="/login"
          className="
            mt-10
            inline-flex
            h-14
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-orange-600
            font-semibold
            text-white
            transition
            hover:bg-orange-700
          "
        >
          Back to Login
          <ArrowRight size={18} />
        </Link>

      </div>
    </AuthLayout>
  );
}