"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, User, Heart } from "lucide-react";
import { NAVIGATION_LINKS } from "@/app/constants/NavData";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white backdrop-blur-md">
            <Container>
                <nav className="flex h-16 text-zinc-700 items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Navigation */}
                    <ul className="hidden text-sm font-medium items-center gap-8 md:flex">
                        {NAVIGATION_LINKS.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="group relative inline-block transition hover:text-orange-500">
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Right Side */}
                    <div className="hidden items-center gap-2 md:flex">
                        {/* Search */}
                        <button className="rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600">
                            <Search size={20} />
                        </button>

                        {/* Wishlist */}
                        <Link
                            href="/wishlist"
                            className="relative rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                            <Heart size={20} />

                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs font-semibold text-white">
                                2
                            </span>
                        </Link>

                        {/* Profile */}
                        <Link
                            href="/login"
                            className="rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                            <User size={20} />
                        </Link>

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600"
                        >
                            <ShoppingCart size={20} />

                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs font-semibold text-white">
                                3
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <button className="rounded-full p-2.5 transition hover:bg-orange-50 hover:text-orange-600 md:hidden">
                        <Menu size={22} />
                    </button>
                </nav>
            </Container>
        </header>
    );
}