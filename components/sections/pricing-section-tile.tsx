import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/button";

const PricingTile = ({
  plan,
  planIcon: PlanIcon,
  planPrice,
  planPeriod,
  bullets,
  CallToAction,
  darkMode,
}: any) => {
  const price =
    planPeriod === "/ monthly" ? "$" + planPrice : "$" + planPrice * 12 * 0.75;
  return (
    <div className="max-w-[450px] rounded-2xl border border-primary p-6 shadow-sm ring-1 ring-primary sm:order-last sm:px-8 lg:p-12">
      <div className="flex items-center justify-start gap-x-[8px] mb-[32px]">
        {PlanIcon && <PlanIcon className="text-primary w-6 h-6" />}
        <p className="text-small ">{plan}</p>
      </div>
      <div className="flex items-center gap-x-[6px] mb-[32px]">
        <h2 className={`font-bold text-2xl  `}>{planPrice ? price : "FREE"}</h2>
        <p className={`text-base `}>{planPrice ? planPeriod : ""}</p>
      </div>
      <div className="flex flex-col  gap-x-[8px] mb-[32px]">
        {bullets.map((bullet: any, i: any) => {
          return (
            <div className="flex items-center gap-x-[8px]" key={i}>
              <Check className="text-primary h-4 w-4" />
              <p>{bullet}</p>
            </div>
          );
        })}
      </div>

      <Button
        className={` bg-transparent text-black hover:text-white dark:bg-secondary dark:text-white `}
      >
        <span className="text-med ">{CallToAction}</span>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default PricingTile;
