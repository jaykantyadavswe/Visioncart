import Container from "@/components/ui/Container";

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetailsPage({ params }: Props) {
  return (
    <Container className="py-16">

      <p className="text-sm text-slate-500">
        Home / Shop / Product
      </p>

      <h1 className="mt-4 text-4xl font-bold">
        Product #{params.id}
      </h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">

        <div className="rounded-3xl bg-slate-100 p-10">
          Product Images
        </div>

        <div>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
            Electronics
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Product Name
          </h2>

          <p className="mt-6 text-slate-600">
            Product description will come from the backend.
          </p>

          <div className="mt-8 text-4xl font-bold text-orange-600">
            ₹9,999
          </div>

          <button className="mt-10 rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white hover:bg-orange-700">
            Add to Cart
          </button>

        </div>

      </div>

    </Container>
  );
}