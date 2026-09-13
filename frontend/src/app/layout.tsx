import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VisionCart - Your Smart Shopping Companion",
  description: "VisionCart is your ultimate shopping companion, offering a seamless and personalized online shopping experience. Discover the best deals, track your orders, and enjoy a smarter way to shop with VisionCart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <Toaster
          position="top-center"
          richColors
          toastOptions={{
            classNames: {
              toast:
                "border border-orange-200 shadow-lg",
              title:
                "font-semibold text-slate-900",
              description:
                "text-slate-600",
              success:
                "border-orange-200 bg-orange-50",
              error:
                "border-red-200 bg-red-50",
            },
          }}
        /> */}

        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: "12px",
              border: "1px solid #fed7aa",
              background: "#fff7ed",
              color: "#1e293b",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
