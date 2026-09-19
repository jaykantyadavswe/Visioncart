import {
  ShieldCheck,
  Truck,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";

type AuthBannerProps = {
  variant?: "login" | "register";
};

const bannerData = {
  login: {
    image: "/login-banner6.png",
    title: "VisionCart",
    subtitle: "Premium Shopping Experience",
  },
  register: {
    image: "/register-banner5.png",
    title: "Join VisionCart",
    subtitle: "Start your smart shopping journey",
  },
};

export default function AuthBanner({ variant = "login" }: AuthBannerProps) {
  const data = bannerData[variant];
  return (
    <div className="relative hidden min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-orange-700 p-8 text-white lg:flex lg:flex-col lg:justify-between xl:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.18),transparent_42%,rgba(255,255,255,0.08))]" />

      <div className="relative">
        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
          VisionCart
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight xl:text-5xl">
          {data.title}
        </h1>

        <p className="mt-4 max-w-xs leading-7 text-slate-300">
          {data.subtitle}
        </p>
      </div>

      <div className="relative flex justify-center py-4">
        <Image
          src={data.image}
          alt="Shopping"
          width={520}
          height={320}
          className="max-h-[270px] object-contain drop-shadow-[0_24px_25px_rgba(0,0,0,0.25)]"
        />
      </div>

      <div className="relative space-y-4 border-t border-white/15 pt-6 text-sm text-slate-200">
        <div className="flex items-center gap-3">
          <ShieldCheck size={19} className="text-orange-300" />
          <span>100% secure payments</span>
        </div>

        <div className="flex items-center gap-3">
          <Truck size={19} className="text-orange-300" />
          <span>Fast worldwide delivery</span>
        </div>

        <div className="flex items-center gap-3">
          <ShoppingBag size={19} className="text-orange-300" />
          <span>Premium shopping experience</span>
        </div>
      </div>
    </div>
  );
}