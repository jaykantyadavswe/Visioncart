import ProductCard from "../shop/ProductCard";
import Container from "../ui/Container";
import { Flame, Timer } from "lucide-react";

const flashProducts = [
  {
    id: 21,
    title: "Apple AirPods Pro",
    category: "Audio",
    brand: "Apple",
    image: "/products/airpods.jpg",
    price: 18999,
    originalPrice: 24999,
    rating: 4.9,
    reviews: 514,
    badge: "-24%",
  },
  {
    id: 22,
    title: "Nike Air Max",
    category: "Shoes",
    brand: "Nike",
    image: "/products/shoes.jpg",
    price: 6499,
    originalPrice: 8999,
    rating: 4.8,
    reviews: 220,
    badge: "-28%",
  },
  {
    id: 23,
    title: "Apple Watch",
    category: "Wearables",
    brand: "Apple",
    image: "/products/watch.jpg",
    price: 31999,
    originalPrice: 42999,
    rating: 4.9,
    reviews: 302,
    badge: "-20%",
  },
  {
    id: 24,
    title: "Sony Headphones",
    category: "Audio",
    brand: "Sony",
    image: "/products/headphones.jpg",
    price: 21999,
    originalPrice: 27999,
    rating: 4.8,
    reviews: 180,
    badge: "-18%",
  },
];

export default function FlashDeals() {
    return (
        <section className="bg-gradient-to-r from-orange-600 to-red-500 py-20">
            <Container>

                <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white">

                            <Flame className="fill-white" size={18} />

                            Flash Deals

                        </div>

                        <h2 className="mt-5 text-5xl font-bold text-white">
                            Limited Time Offers
                        </h2>

                        <p className="mt-4 max-w-2xl text-orange-100">
                            Grab these amazing deals before they're gone.
                        </p>

                    </div>

                    <div className="rounded-2xl bg-white px-6 py-4 shadow-xl">

                        <div className="flex items-center gap-3">

                            <Timer className="text-orange-600" />

                            <div>

                                <p className="text-sm text-slate-500">
                                    Ends In
                                </p>

                                <h3 className="text-2xl font-bold">
                                    08 : 42 : 19
                                </h3>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {flashProducts.map((product) => (
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