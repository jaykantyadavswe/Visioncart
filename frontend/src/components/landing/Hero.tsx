import Container from "../ui/Container";
import ProductPreviewCard from "./ProductPreviewCard";
import { Flame, MoveRight, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
                            <Flame size={16} className="fill-orange-500" />
                            Trending Now
                        </span>

                        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                            Discover Products
                            <br />
                            <span className="text-orange-600">You'll Love.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Explore premium collections, exclusive offers, and trending products
                            carefully selected to elevate your everyday shopping experience.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <button
                                className="
                                            inline-flex items-center justify-center gap-2
                                            rounded-xl bg-orange-600 px-7 py-3.5
                                            font-semibold text-white
                                            transition-all duration-300
                                            hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl" >
                                Shop Now
                                <MoveRight size={18} />
                            </button>

                            <button
                                className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
                            >
                                Explore Collections
                            </button>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute left-12 top-5 hidden lg:block">
                            <ProductPreviewCard
                                title="Watch"
                                price="₹9,999"
                                image="/HeroSecImage/imagb.png"
                            />
                        </div>

                        <div className="absolute left-8 bottom-5 hidden lg:block">
                            <ProductPreviewCard
                                title="Formal Pants"
                                price="₹7,999"
                                image="/HeroSecImage/imagea.png"
                            />
                        </div>

                        <div className="absolute -right-10 top-10 hidden lg:block">
                            <ProductPreviewCard
                                title="Shoes"
                                price="₹4,999"
                                image="/HeroSecImage/image.png"
                            />
                        </div>
                        <div className="absolute -right-10 bottom-12 hidden lg:block">
                            <ProductPreviewCard
                                title="iPhone 15 Pro"
                                price="₹49,999"
                                image="/HeroSecImage/imagec.png"
                            />
                        </div>

                        <div className="absolute flex gap-1 items-center justify -bottom-2 right-20 text-orange-500 rounded-xl bg-white px-5 py-3 shadow-xl">
                            <Star size={18} className="fill-yellow-400 text-yellow-400"/> 50K+ Products
                        </div>

                        <img src="/HeroSecImage/Hero2.png" alt="Hero Image" width="500" height="500" className="rounded-xl" />
                    </div>
                </div>
            </Container>
        </section>
    );
}