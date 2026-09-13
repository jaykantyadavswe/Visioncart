import { ReactNode } from "react";
import Container from "../ui/Container";
import AuthBanner from "./AuthBanner";

interface Props {
  children: ReactNode;
  bannerVariant?: "login" | "register";
}

export default function AuthLayout({
  children, bannerVariant,
}: Props) {
  return (
    <Container className="flex min-h-screen items-center justify-center py-8">

      <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

        {/* Left */}

        <AuthBanner variant={bannerVariant} />

        {/* Right */}

        <div className="flex items-center justify-center p-8 md:p-14">
          {children}
        </div>

      </div>

    </Container>
  );
}