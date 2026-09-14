import Container from "../ui/Container";
import ProductPreviewCard from "./ProductPreviewCard";
import { ArrowUpRight, Flame, MoveRight, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f8fa] py-16 md:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.13),transparent_28%),radial-gradient(circle_at_18%_85%,rgba(15,23,42,0.06),transparent_30%)]" />
            <Container>
                <div className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-600 shadow-sm">
                            <Flame size={16} className="fill-orange-500" />
                            Trending Now
                        </span>

                        <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-[clamp(3.5rem,5.4vw,5.25rem)]">
                            Find what fits
                            <br />
                            <span className="text-orange-600">your world.</span>
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
                            Explore premium collections, exclusive offers, and products carefully selected to elevate your everyday shopping experience.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/discover"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-xl"
                            >
                                Shop Now
                                <MoveRight size={18} />
                            </Link>

                            <Link
                                href="/categories"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                            >
                                Explore Collections
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>

                        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                            <span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-orange-500" /> Secure checkout</span>
                            <span className="inline-flex items-center gap-2"><TruckIcon /> Fast delivery</span>
                        </div>
                    </div>

                    <div className="relative mx-auto flex min-h-[450px] w-full max-w-[650px] items-center justify-center lg:min-h-[560px]">
                        <div className="absolute inset-x-10 bottom-5 top-10 rounded-[40px] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)]" />
                        <div className="absolute right-6 top-2 h-28 w-28 rounded-full bg-orange-500/15 blur-2xl" />
                        <div className="absolute bottom-6 left-3 h-36 w-36 rounded-full bg-slate-900/10 blur-3xl" />

                        <div className="absolute left-2 top-12 z-10 hidden lg:block">
                            <ProductPreviewCard
                                title="Watch"
                                price="₹9,999"
                                image="/HeroSecImage/imagb.png"
                            />
                        </div>

                        <div className="absolute bottom-10 left-8 z-10 hidden lg:block">
                            <ProductPreviewCard
                                title="Formal Pants"
                                price="₹7,999"
                                image="/HeroSecImage/imagea.png"
                            />
                        </div>

                        <div className="absolute right-0 top-20 z-10 hidden lg:block">
                            <ProductPreviewCard
                                title="Shoes"
                                price="₹4,999"
                                image="/HeroSecImage/image.png"
                            />
                        </div>
                        <div className="absolute bottom-16 right-0 z-10 hidden lg:block">
                            <ProductPreviewCard
                                title="iPhone 15 Pro"
                                price="₹49,999"
                                image="/HeroSecImage/imagec.png"
                            />
                        </div>

                        <div className="absolute bottom-1 right-8 z-20 flex items-center gap-2 rounded-full border border-white bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl sm:right-16">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" /> 50K+ Products
                        </div>

                        <img src="/HeroSecImage/Hero2.png" alt="Featured VisionCart products" width="500" height="500" className="relative z-[1] w-[78%] max-w-[500px] rounded-[32px] object-cover drop-shadow-[0_24px_24px_rgba(15,23,42,0.16)]" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

function TruckIcon() {
    return <span className="inline-flex h-[17px] w-[17px] items-center justify-center rounded bg-orange-100 text-[10px] font-bold text-orange-600">+</span>;
}