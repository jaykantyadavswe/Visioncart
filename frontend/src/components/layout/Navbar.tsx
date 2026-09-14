"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, User, Heart } from "lucide-react";
import { NAVIGATION_LINKS } from "@/app/constants/NavData";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
            <Container>
                <nav className="flex h-[76px] items-center justify-between text-zinc-700">
                    <Logo />

                    <ul className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 text-sm font-medium md:flex">
                        {NAVIGATION_LINKS.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="group relative inline-flex rounded-full px-4 py-2 transition hover:bg-white hover:text-orange-600 hover:shadow-sm"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm md:flex">
                        <button aria-label="Search" className="rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600">
                            <Search size={20} />
                        </button>

                        <Link
                            href="/wishlist"
                            aria-label="Wishlist"
                            className="relative rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                            <Heart size={20} />

                            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-bold text-white">
                                2
                            </span>
                        </Link>

                        <Link
                            href="/login"
                            aria-label="Account"
                            className="rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                            <User size={20} />
                        </Link>

                        <Link
                            href="/cart"
                            aria-label="Shopping cart"
                            className="relative rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                            <ShoppingCart size={20} />

                            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-bold text-white">
                                3
                            </span>
                        </Link>
                    </div>

                    <button aria-label="Open navigation menu" className="rounded-full border border-slate-200 p-2.5 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 md:hidden">
                        <Menu size={22} />
                    </button>
                </nav>
            </Container>
        </header>
    );
}