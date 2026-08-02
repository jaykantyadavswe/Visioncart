import Container from "../ui/Container";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "Verified Buyer",
    review:
      "Amazing shopping experience! The product quality was excellent, delivery was quick, and everything arrived exactly as expected.",
    image: "/ReviewImage/image0.png",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "Fashion Enthusiast",
    review:
      "Beautiful collections and a seamless checkout experience. This has become one of my favorite places to shop online.",
    image: "/ReviewImage/image.png",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Tech Lover",
    review:
      "Great prices, authentic products, and outstanding customer support. Highly recommended for anyone looking for quality products.",
    image: "/ReviewImage/image2.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Customer Reviews
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Loved by Thousands of Customers
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            Trusted by shoppers for premium products, secure payments,
            fast delivery, and a smooth shopping experience.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-slate-50 p-8 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-600">50K+</h3>
            <p className="mt-2 text-slate-500">Happy Customers</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-600">4.9★</h3>
            <p className="mt-2 text-slate-500">Average Rating</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-600">20K+</h3>
            <p className="mt-2 text-slate-500">Orders Delivered</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-600">99%</h3>
            <p className="mt-2 text-slate-500">Satisfaction Rate</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}