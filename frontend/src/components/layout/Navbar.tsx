"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, User, Heart } from "lucide-react";
import { useState } from "react";
import { NAVIGATION_LINKS } from "@/app/constants/NavData";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { useWishlist } from "@/components/wishlist/WishlistProvider";
import { useCart } from "@/components/cart/CartProvider";

export default function Navbar() {
    const { wishlist } = useWishlist();
    const { itemCount } = useCart();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
            <Container>
                <nav className="flex h-[76px] items-center justify-between text-zinc-700">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo />
                    </Link>

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
                        <Link href="/shop" aria-label="Search products" className="rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600">
                            <Search size={20} />
                        </Link>

                        <Link
                            href="/wishlist"
                            aria-label="Wishlist"
                            className="relative rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                            <Heart size={20} />

                            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-bold text-white">
                                {wishlist.length}
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
                                {itemCount}
                            </span>
                        </Link>
                    </div>

                    <button type="button" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-slate-200 p-2.5 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 md:hidden">
                        <Menu size={22} />
                    </button>
                </nav>
                {mobileOpen && <div className="border-t border-slate-100 py-4 md:hidden"><ul className="grid gap-1">{NAVIGATION_LINKS.map((item) => <li key={item.label}><Link href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600">{item.label}</Link></li>)}</ul><div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3"><Link href="/wishlist" onClick={() => setMobileOpen(false)} className="rounded-xl bg-slate-50 px-3 py-3 text-center text-sm font-medium text-slate-700">Wishlist ({wishlist.length})</Link><Link href="/cart" onClick={() => setMobileOpen(false)} className="rounded-xl bg-slate-50 px-3 py-3 text-center text-sm font-medium text-slate-700">Cart ({itemCount})</Link></div></div>}
            </Container>
        </header>
    );
}