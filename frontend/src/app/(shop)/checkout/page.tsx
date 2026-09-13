import Container from "@/components/ui/Container";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import ContactForm from "@/components/checkout/ContactForm";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import DeliveryMethod from "@/components/checkout/DeliveryMethod";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="bg-slate-50 py-10">

      <Container>

        <CheckoutHeader />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">

          <div className="space-y-8">

            <ContactForm />

            <ShippingAddress />

            <DeliveryMethod />

            <PaymentMethod />

          </div>

          <OrderSummary />

        </div>

      </Container>

    </main>
  );
}