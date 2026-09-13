import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    title: "iPhone 16 Pro",
    image: "/products/iphone.jpg",
    brand: "Apple",
    category: "Smartphones",
    price: 129999,
    quantity: 1,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    image: "/products/headphones.jpg",
    brand: "Sony",
    category: "Audio",
    price: 24999,
    quantity: 2,
    rating: 4.8,
  },
  {
    id: 3,
    title: "Nike Air Max 270",
    image: "/products/shoes.jpg",
    brand: "Nike",
    category: "Footwear",
    price: 8999,
    quantity: 1,
    rating: 4.7,
  },
];

export default function CartItems() {
  return (
    <div className="space-y-6">

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          {...item}
        />
      ))}

    </div>
  );
}