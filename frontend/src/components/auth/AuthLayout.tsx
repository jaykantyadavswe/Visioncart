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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_30%),#f7f8fa] py-4 md:py-6">
      <Container className="flex min-h-[calc(100vh-2rem)] items-center justify-center">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[0.9fr_1.1fr]">

        <AuthBanner variant={bannerVariant} />

        <div className="flex items-center justify-center px-6 py-7 sm:px-10 md:px-12 lg:px-14">
          {children}
        </div>

        </div>
      </Container>
    </main>
  );
}