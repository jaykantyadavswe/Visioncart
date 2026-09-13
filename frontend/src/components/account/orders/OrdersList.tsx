import OrderCard from "./OrderCard";

const orders = [
  {
    id: "VC240801",
    product: "iPhone 16 Pro",
    image: "/products/iphone.jpg",
    status: "Delivered",
    date: "2 Aug 2026",
    total: 129999,
    quantity: 1,
    payment: "UPI",
    address: "Bhopal, Madhya Pradesh",
  },
  {
    id: "VC240802",
    product: "Sony WH-1000XM5",
    image: "/products/headphones.jpg",
    status: "Shipped",
    date: "31 Jul 2026",
    total: 24999,
    quantity: 1,
    payment: "Credit Card",
    address: "Bhopal, Madhya Pradesh",
  },
] as const;

export default function OrdersList() {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}