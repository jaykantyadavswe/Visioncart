import OrderHeader from "@/components/account/order-details/OrderHeader";
import OrderTimeline from "@/components/account/order-details/OrderTimeline";
import OrderItems from "@/components/account/order-details/OrderItems";
import ShippingAddress from "@/components/account/order-details/ShippingAddress";
import PaymentDetails from "@/components/account/order-details/PaymentDetails";
import PriceSummary from "@/components/account/order-details/PriceSummary";
import ActionButtons from "@/components/account/order-details/ActionButtons";

export default function OrderDetailsPage() {
  return (
    <div className="space-y-8">

      <OrderHeader />

      <OrderTimeline />

      <OrderItems />

      <div className="grid gap-8 xl:grid-cols-[1.2fr_420px]">

        <div className="space-y-8">
          <ShippingAddress />
          <PaymentDetails />
        </div>

        <div className="space-y-8">
          <PriceSummary />
          <ActionButtons />
        </div>

      </div>

    </div>
  );
}