import Link from "next/link";

export default function AuthFooter() {
  return (
    <div className="mt-5 text-center text-sm text-slate-600">

      Don't have an account?{" "}

      <Link
        href="/register"
        className="font-semibold text-orange-600 hover:underline"
      >
        Create Account
      </Link>

    </div>
  );
}