import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function Page() {
  return (
    <div className="pt-[60px] pb-[90px] flex flex-col items-center">
      <h1 className="font-semibold text-[28px] text-center mb-3">
        Promote your product
      </h1>
      <p className="text-center font-medium text-base text-black/70 mb-[60px]">
        Boost your presence and reach thousands of potential customers
      </p>
      <div className="w-full mb-20 grid grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="col-span-1 rounded-xl border border-[#E4E4F6] pt-[26px] pb-6 flex flex-col gap-2 items-center"
          >
            <h1 className="font-bold text-[32px]">{reason.value}</h1>
            <p className="text-black/80 text-base">{reason.label}</p>
          </div>
        ))}
      </div>
      <h2 className="text-center text-2xl font-semibold mb-9">
        Choose a Feature Package
      </h2>
      <div className="w-full max-w-[840px] grid grid-cols-2 gap-8">
        {packages.map((plan) => (
          <div key={plan.id} className="relative col-span-1 pt-3">
            <div
              className={cn("rounded-xl w-full border border-[#E4E4F6] p-8")}
            >
              <h3 className="text-xl font-semibold mb-3.5">{plan.title}</h3>
              <p className="text-base text-black/80 mb-4">{plan.summary}</p>
              <h1 className="text-[32px] font-bold mb-5">{plan.price}</h1>
              <div className="flex mb-[55px] flex-col gap-[22px]">
                {plan.benefits.map((benefit, index) => {
                  return (
                    <div key={index} className="flex w-full gap-2 items-start">
                      <Check className="text-[#FF4306] w-6" />
                      <p className="text-base text-black/80">{benefit}</p>
                    </div>
                  );
                })}
              </div>
              <Button
                variant="default"
                className="bg-[#FF4407] hover:bg-[#FF4407]/80 cursor-pointer w-full h-12 rounded-xl text-lg text-white font-bold"
              >
                Select Package
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const reasons = [
  {
    value: "10,500",
    label: "Clicks on products per month",
  },
  {
    value: "10,500",
    label: "Clicks on products per month",
  },
  {
    value: "10,500",
    label: "Clicks on products per month",
  },
  {
    value: "10,500",
    label: "Clicks on products per month",
  },
];

const packages = [
  {
    id: "weekly",
    isPopular: false,
    title: "Featured for a Week",
    summary: "Get premium visibility for your product for a full week.",
    price: "$29",
    benefits: [
      "Get premium visibility for your product for a full week.",
      "Do-follow backlink forever",
    ],
  },
  {
    id: "monthly",
    isPopular: true,
    title: "Featured for a Month",
    summary: "Get premium visibility for your product for a full month.",
    price: "$99",
    benefits: [
      "Get premium visibility for your product for a full month.",
      "Do-follow backlink forever",
    ],
  },
];
