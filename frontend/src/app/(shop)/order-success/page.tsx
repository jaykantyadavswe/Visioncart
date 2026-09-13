import Container from "@/components/ui/Container";
import OrderSuccessCard from "@/components/order-success/OrderSuccessCard";

export default function OrderSuccessPage() {
  return (
    <main className="bg-slate-50 py-16">
      <Container className="max-w-4xl">
        <OrderSuccessCard />
      </Container>
    </main>
  );
}