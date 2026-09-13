"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/products/laptop.jpg",
  "/products/headphones.jpg",
  "/products/watch.jpg",
  "/products/keyboard.jpg",
];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse gap-6 lg:flex-row">

      {/* Thumbnails */}
      <div className="flex gap-3 lg:flex-col">

        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border-2 transition
              ${
                selectedImage === image
                  ? "border-orange-500"
                  : "border-slate-200"
              }`}
          >
            <Image
              src={image}
              alt=""
              width={90}
              height={90}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}

      </div>

      {/* Main Image */}
      <div className="flex-1 overflow-hidden rounded-3xl bg-white p-6 shadow-sm">

        <Image
          src={selectedImage}
          alt="Product"
          width={700}
          height={700}
          priority
          className="mx-auto h-[550px] w-full object-contain transition duration-500 hover:scale-110"
        />

      </div>

    </div>
  );
}