import Link from "next/link";
import { CheckCircle2, PackageCheck, ShoppingBag } from "lucide-react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Offer from "@/components/Offer/Offer";

export default async function OrderSuccessPage({ searchParams }: { searchParams: Promise<{ order?: string }> }) {
  const params = await searchParams;
  const orderId = params.order ?? "VC-PENDING";

  return <div className="min-h-screen bg-[#f7f8fa] text-slate-900"><Offer /><Navbar /><main><Container className="py-16 lg:py-24"><div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white px-6 py-14 text-center shadow-sm sm:px-12"><CheckCircle2 size={58} className="mx-auto text-emerald-500" /><p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-orange-600">Order confirmed</p><h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Thank you for shopping with us.</h1><p className="mt-4 leading-7 text-slate-500">Your order has been placed successfully. We will send delivery updates to your email.</p><div className="mx-auto mt-8 grid max-w-md gap-3 rounded-2xl bg-slate-50 p-5 text-left text-sm"><div className="flex items-center gap-3"><PackageCheck size={19} className="text-orange-600" /><span className="text-slate-500">Order number <strong className="ml-1 text-slate-900">{orderId}</strong></span></div><div className="flex items-center gap-3"><ShoppingBag size={19} className="text-orange-600" /><span className="text-slate-500">Status <strong className="ml-1 text-emerald-600">Confirmed</strong></span></div></div><Link href="/shop" className="mt-8 inline-flex items-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">Continue shopping</Link></div></Container></main><Footer /></div>;
}
