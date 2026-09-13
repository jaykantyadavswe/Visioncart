"use client";

import Link from "next/link";

export default function VerifyOtpForm() {
  return (
    <form className="mt-10">

      {/* OTP */}

      <div className="flex justify-between gap-3">

        {[1,2,3,4,5,6].map((item)=>(
          <input
            key={item}
            type="text"
            maxLength={1}
            className="
              h-14
              w-14
              rounded-xl
              border
              border-slate-300
              text-center
              text-xl
              font-bold
              outline-none
              transition
              focus:border-orange-500
              focus:ring-4
              focus:ring-orange-100
            "
          />
        ))}

      </div>

      {/* Verify */}

      <button
        className="
          mt-8
          h-14
          w-full
          rounded-xl
          bg-orange-600
          font-semibold
          text-white
          transition
          hover:bg-orange-700
        "
      >
        Verify OTP
      </button>

      {/* Resend */}

      <div className="mt-6 text-center">

        <p className="text-sm text-slate-500">
          Didn't receive the code?
        </p>

        <button
          type="button"
          className="mt-2 font-semibold text-orange-600 hover:underline"
        >
          Resend OTP
        </button>

      </div>

      <Link
        href="/login"
        className="mt-8 block text-center text-sm text-orange-600 hover:underline"
      >
        ← Back to Login
      </Link>

    </form>
  );
}