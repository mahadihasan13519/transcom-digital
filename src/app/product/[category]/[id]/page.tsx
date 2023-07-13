"use client";

import { useState } from "react";
import ProductNavigation from "./Navigation";
import ProductOverview from "./Overview";
import RelatedProducts from "./RelatedProducts";
import ProductFeature from "./Feature";
import ProductSpecification from "./Specification";
import ProductReview from "./Review";
import ProductPolicy from "./Policy";

export default function Home({
  params,
}: {
  params: { category: string; id: number };
}) {
  const [activeTab, setActiveTab] = useState("overview");

  //TODO: fetch from database
  const product = {
    // id: 1,
    // category: "Refrigerator",
    name: "Hitachi Stylish Bottom Freezer | R-BG410P6PBX (XGR) | 366L",
    img: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fe5081a13-0c1d-4900-9214-4e1d1017d3af&w=1500&q=100",
    isDiscountAvaiable: true,
    discountPercentage: -3.72,
    price: 107500,
    priceAfterDiscount: 103500,
    savedAmount: 4000,
  };

  const getActivePage = () => {
    if (activeTab === "overview") {
      return <ProductOverview />;
    } else if (activeTab === "feature") {
      return <ProductFeature />;
    } else if (activeTab === "specification") {
      return <ProductSpecification />;
    } else if (activeTab === "review") {
      return <ProductReview />;
    } else return <ProductPolicy />;
  };

  return (
    <>
      {/* TODO: Change here */}
      <ProductNavigation
        id={params.id}
        category={params.category}
        {...product}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {getActivePage()}
      <RelatedProducts />
    </>
  );
}
