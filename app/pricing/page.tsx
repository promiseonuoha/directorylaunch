import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function Page() {
  return (
    <div className="pt-[60px] max-mobile:pt-8 max-mobile:pb-0 pb-[90px] flex flex-col items-center">
      <h1 className="font-semibold text-[28px] max-mobile:text-xl text-center mb-3">
        Promote your product
      </h1>
      <p className="text-center max-mobile:text-sm max-mobile:mb-8 font-medium text-base text-black/70 mb-[60px]">
        Boost your presence and reach thousands of potential customers
      </p>
      <div className="w-full max-mobile:mb-10 mb-20 grid max-mini:grid-cols-1 max-tablet:grid-cols-2 grid-cols-4 gap-4 xl:gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="col-span-1 px-2 rounded-xl border border-[#E4E4F6] py-[26px] flex flex-col gap-2 items-center"
          >
            <h1 className="font-bold max-mobile:text-2xl text-center text-[32px]">
              {reason.value}
            </h1>
            <p className="text-black/80 max-mobile:text-sm text-base text-center px-2.5">
              {reason.label}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-center max-mobile:text-lg max-mobile:mb-4 text-2xl font-semibold mb-9">
        Choose a Feature Package
      </h2>
      <div className="w-full max-w-[840px] max-mobile:grid-cols-1 grid grid-cols-2 max-mobile:gap-4 gap-8">
        {packages.map((plan) => (
          <div key={plan.id} className="relative col-span-1 pt-3">
            <div
              className={cn(
                "rounded-xl w-full border border-[#E4E4F6] max-mobile:p-4 p-8"
              )}
            >
              <h3 className="text-xl max-mobile:text-base font-semibold mb-3.5">
                {plan.title}
              </h3>
              <p className="text-base max-mobile:text-sm text-black/80 mb-4">
                {plan.summary}
              </p>
              <h1 className="text-[32px] font-bold mb-5">{plan.price}</h1>
              <div className="flex max-mobile:mb-7 mb-[55px] flex-col gap-[22px]">
                {plan.benefits.map((benefit, index) => {
                  return (
                    <div key={index} className="flex w-full gap-2 items-start">
                      <Check className="text-[#FF4306] max-mobile:min-w-4 max-mobile:w-4 max-mobile:h-4 min-w-6 w-6 h-6" />
                      <p className="text-base max-mobile:text-sm text-black/80">
                        {benefit}
                      </p>
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
    value: "Only 15",
    label: "Products featured weekly for meaningful discovery",
  },
  {
    value: "7",
    label: "Weekly votes per user to support your product",
  },
  {
    value: "100% organic",
    label: "Quality over quantity — no noise, genuine engagement",
  },
  {
    value: "Live",
    label: "Real-time analytics and community feedback",
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
      "Be one of only 15 products featured this week — stand out from the crowd",
      "Receive a dedicated “Launch Badge” and a do-follow backlink that stays live forever",
      "Get access to live analytics so you can track clicks, and votes in real time",
      "Tap into our built-in community: each user gets 7 votes each week and votes are randomized so it’s fair",
    ],
  },
  {
    id: "monthly",
    isPopular: true,
    title: "Featured for a Month",
    summary: "Get premium visibility for your product for a full month.",
    price: "$99",
    benefits: [
      "Enjoy extended premium placement for four weeks — maximum discoverability",
      "Keep your “Winner” badge and backlink visible indefinitely, boosting SEO and credibility",
      "Access detailed weekly reports, growth trends and engagement insights",
      "Leverage our engaged maker community with sustained voting and support over the month",
    ],
  },
];
