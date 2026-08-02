import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const products = [
    {
        id: 1,
        title: "Apple iPhone 15 Pro",
        category: "Smartphones",
        image: "/products/iphone.jpg",
        price: 99999,
        originalPrice: 109999,
        rating: 4.9,
        reviews: 245,
        badge: "10% OFF",
    },
    {
        id: 2,
        title: "Nike Air Max",
        category: "Footwear",
        image: "/products/shoes.jpg",
        price: 7999,
        originalPrice: 9999,
        rating: 4.8,
        reviews: 180,
        badge: "Trending",
    },
    {
        id: 3,
        title: "Sony WH-1000XM5",
        category: "Audio",
        image: "/products/headphones.jpg",
        price: 24999,
        originalPrice: 29999,
        rating: 4.9,
        reviews: 540,
        badge: "Best Seller",
    },
    {
        id: 4,
        title: "Apple Watch Series 9",
        category: "Wearables",
        image: "/products/watch.jpg",
        price: 34999,
        originalPrice: 39999,
        rating: 4.8,
        reviews: 300,
        badge: "New",
    },
];

export default function ProductGrid() {
    return (
        <>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>

            <Pagination />
        </>
    );
}