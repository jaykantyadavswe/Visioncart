import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import AccountSidebar from "@/components/account/AccountSidebar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface AccountLayoutProps {
    children: ReactNode;
}

export default function AccountLayout({
    children,
}: AccountLayoutProps) {
    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 py-10">
            <Container>

                <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

                    <AccountSidebar />

                    <section>
                        {children}
                    </section>

                </div>

            </Container>

        </main>
        <Footer />
        </>
    );
}