import { MoveRight } from "lucide-react";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const bestSellers = [
    {
        id: 1,
        title: "iPhone 16 Pro",
        category: "Smartphones",
        price: 129999,
        rating: 4.9,
        image: "/products/iphone.jpg",
        reviews: 124,
    },
    {
        id: 2,
        title: "Sony WH-1000XM5",
        category: "Audio",
        price: 24999,
        rating: 4.8,
        image: "/products/headphones.jpg",
        reviews: 124,

    },
    {
        id: 3,
        title: "Nike Air Jordan",
        category: "Footwear",
        price: 10999,
        rating: 4.9,
        image: "/products/shoes.jpg",
        reviews: 124,

    },
    {
        id: 4,
        title: "MacBook Air M4",
        category: "Laptop",
        price: 114999,
        rating: 5.0,
        image: "/products/macbook.jpg",
        reviews: 124,

    },
];

export default function BestSellers() {
    return (
        <section className="bg-slate-50 py-20">
            <Container>

                <div className="mb-12 flex items-end justify-between">

                    <div>

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                            Customer Favorites
                        </span>

                        <h2 className="mt-5 text-4xl font-bold">
                            Best Sellers
                        </h2>

                        <p className="mt-4 max-w-xl text-slate-500">
                            Explore products loved by thousands of customers.
                            These top-rated picks are trending for a reason.
                        </p>

                    </div>

                    <button className="hidden items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 transition hover:border-green-600 hover:text-green-700 md:flex">
                        View All
                        <MoveRight size={18} />
                    </button>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {bestSellers.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
}