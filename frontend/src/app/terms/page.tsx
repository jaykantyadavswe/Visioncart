import Link from "next/link";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return <div className="min-h-screen bg-[#f7f8fa] text-slate-900"><Navbar /><main><Container className="py-16 lg:py-24"><div className="max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-12"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">VisionCart policy</p><h1 className="mt-3 text-4xl font-semibold tracking-tight">Terms of Service</h1><p className="mt-6 leading-7 text-slate-600">By using VisionCart, you agree to shop responsibly and provide accurate information for orders, delivery, and account access.</p><h2 className="mt-8 text-xl font-semibold">Orders and returns</h2><p className="mt-3 leading-7 text-slate-600">Orders are subject to availability and confirmation. Eligible products can be returned within seven days according to the return conditions shown at checkout.</p><Link href="/" className="mt-8 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">Back to VisionCart</Link></div></Container></main><Footer /></div>;
}
