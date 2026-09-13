import {
  ShieldCheck,
  Truck,
  ShoppingBag,
} from "lucide-react";

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
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 p-14 text-white lg:flex lg:flex-col lg:justify-between">

      {/* Logo */}

      <div>
        <h1 className="text-4xl font-extrabold">
          {data.title}
        </h1>

        <p className="mt-4 text-orange-100">
          {data.subtitle}
        </p>
      </div>

      {/* Illustration */}

      <div className="flex justify-center">

        <img
          src={data.image}
          alt="Shopping"
          className="max-h-120 object-contain"
        />

      </div>

      {/* Features */}

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <ShieldCheck />
          <span>100% Secure Payments</span>
        </div>

        <div className="flex items-center gap-4">
          <Truck />
          <span>Fast Worldwide Delivery</span>
        </div>

        <div className="flex items-center gap-4">
          <ShoppingBag />
          <span>Premium Shopping Experience</span>
        </div>

      </div>

    </div>
  );
}