import Container from "@/components/ui/Container";
import CartHeader from "@/components/cart/CartHeader";
import CartItems from "@/components/cart/CartItems";
import OrderSummary from "@/components/cart/OrderSummary";
import RecommendedProducts from "@/components/cart/RecommendedProducts";

export default function CartPage() {
  return (
    <main className="bg-slate-50 py-10">

      <Container>

        <CartHeader />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">

          <CartItems />

          <OrderSummary />

        </div>

        <RecommendedProducts />

      </Container>

    </main>
  );
}