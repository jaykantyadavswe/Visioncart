import OrdersHeader from "@/components/account/orders/OrdersHeader";
import OrderFilters from "@/components/account/orders/OrderFilters";
import OrdersList from "@/components/account/orders/OrdersList";

export default function OrdersPage() {
  return (
    <div className="space-y-8">

      <OrdersHeader />

      <OrderFilters />

      <OrdersList />

    </div>
  );
}