"use client";

import { useState } from "react";
import DescriptionTab from "./DescriptionTab";
import SpecificationsTab from "./SpecificationsTab";
import ReviewsTab from "./ReviewsTab";
import ShippingTab from "./ShippingTab";

const tabs = [
  "Description",
  "Specifications",
  "Reviews",
  "Shipping",
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="mt-20">

      {/* Tabs */}

      <div className="flex flex-wrap gap-3 border-b border-slate-200">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-t-xl px-6 py-4 text-sm font-semibold transition

            ${
              activeTab === tab
                ? "border-b-2 border-orange-600 text-orange-600"
                : "text-slate-500 hover:text-orange-600"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

      {/* Content */}

      <div className="rounded-b-3xl rounded-tr-3xl bg-white p-8 shadow-sm">

        {activeTab === "Description" && <DescriptionTab />}

        {activeTab === "Specifications" && <SpecificationsTab />}

        {activeTab === "Reviews" && <ReviewsTab />}

        {activeTab === "Shipping" && <ShippingTab />}

      </div>

    </section>
  );
}