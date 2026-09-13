import { Star, BadgeCheck } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    date: "12 Aug 2026",
    review:
      "Excellent product! The build quality is premium and delivery was super fast. Highly recommended.",
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 4,
    date: "08 Aug 2026",
    review:
      "Very good experience. Packaging was perfect and the product works flawlessly.",
  },
];

export default function ReviewsTab() {
  return (
    <div>

      {/* Header */}

      <div className="flex flex-col gap-8 lg:flex-row">

        {/* Left */}

        <div className="rounded-2xl border p-8 lg:w-80">

          <h2 className="text-lg font-semibold">
            Overall Rating
          </h2>

          <div className="mt-4 text-5xl font-bold">
            4.9
          </div>

          <div className="mt-3 flex">

            {[1,2,3,4,5].map((item)=>(
              <Star
                key={item}
                className="fill-yellow-400 text-yellow-400"
                size={20}
              />
            ))}

          </div>

          <p className="mt-3 text-slate-500">
            Based on 245 Reviews
          </p>

        </div>

        {/* Rating Distribution */}

        <div className="flex-1 rounded-2xl border p-8">

          {[5,4,3,2,1].map((star,index)=>(
            <div
              key={star}
              className="mb-5 flex items-center gap-4"
            >

              <span className="w-10">
                {star}★
              </span>

              <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200">

                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{
                    width:`${100-index*18}%`
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Reviews */}

      <div className="mt-12 space-y-8">

        {reviews.map((review)=>(
          <div
            key={review.id}
            className="rounded-2xl border p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  {review.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">

                  {[...Array(review.rating)].map((_,i)=>(
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-1 text-green-600">

                  <BadgeCheck size={16} />

                  <span className="text-sm">
                    Verified Purchase
                  </span>

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {review.date}
                </p>

              </div>

            </div>

            <p className="mt-5 leading-7 text-slate-600">
              {review.review}
            </p>

          </div>
        ))}

      </div>

      {/* Button */}

      <div className="mt-10">

        <button className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700">
          Write a Review
        </button>

      </div>

    </div>
  );
}