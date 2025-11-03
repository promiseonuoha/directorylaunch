import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function BecomeSponsor() {
  return (
    <div className="bg-[#FDF4EE] border border-[#FF43064D] py-5 px-[18px] rounded-xl">
      <h3 className="text-black font-bold text-2xl mb-3">Become a Sponsor</h3>
      <p className="text-sm text-black/80 mb-5">
        The all-in-one platform for workforce skills The all-in-one platform for
        workforce skills
      </p>
      <div className="flex mb-6 flex-col gap-3">
        {benefits.map((benefit, index) => {
          return (
            <div key={index} className="flex w-full gap-1 items-start">
              <Check className="text-[#FF4306] w-6" />
              <p className="text-sm text-black/80">{benefit}</p>
            </div>
          );
        })}
      </div>
      <Button
        variant="default"
        className="bg-[#FF4407] hover:bg-[#FF4407]/80 cursor-pointer w-full h-12 rounded-xl text-lg text-white font-bold"
      >
        Claim Now
      </Button>
    </div>
  );
}

const benefits = ["1000+ Founders Website and Tools", "100000+ Visitors"];
