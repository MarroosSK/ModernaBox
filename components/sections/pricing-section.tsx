"use client";
import { useState } from "react";

import { pricingData } from "@/constants/pricing-data";
import PricingTile from "./pricing-section-tile";

const PricingSection = () => {
  const [planPeriod, setPlanPeriod] = useState("/ monthly");

  const planPeriodToggle = () => {
    planPeriod === "/ monthly"
      ? setPlanPeriod("/ yearly")
      : setPlanPeriod("/ monthly");
  };

  return (
    <section className="py-[96px] md:px-[96px]">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>
        <p className="mx-auto max-w-2xl leading-relaxed">
          All features are for FREE!
        </p>
      </div>
      {/* Plans */}
      {/* <div className="my-[40px] flex items-center justify-center gap-x-[14px]">
        <p className="text-med">Monthly</p>
        <Switch onClick={planPeriodToggle} />
        <p className="text-med ">Yearly</p>
        <Badge variant="outline" className="border border-primary">
          Save 25%
        </Badge>
      </div> */}
      <div className="flex items-center justify-center my-[40px]">
        {pricingData.map((planData: any, i) => {
          return <PricingTile key={i} {...planData} planPeriod={planPeriod} />;
        })}
      </div>
    </section>
  );
};

export default PricingSection;
