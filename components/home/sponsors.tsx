import Image from "next/image";
import SponsorBanner from "@/assets/kepler-sponsor.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Sponsors() {
  return (
    <div className="w-full grid grid-cols-3 gap-8 mt-5">
      {sponsors.map((sponsor) => {
        return (
          <div key={sponsor.id} className="relative col-span-1 pt-3">
            <div className="absolute top-0 py-1 px-2 right-5 h-6 rounded-full bg-[#FDF4EE] border border-[#FFA182]">
              <h4 className="text-xs font-semibold text-[#FF4306]">Sponsor</h4>
            </div>
            <div className="w-full border border-[#E4E4F6] rounded-xl p-5">
              <Image
                src={sponsor.image}
                alt={sponsor.title}
                className="w-full mb-6 object-cover h-[120px]"
              />
              <h3 className="text-lg text-black font-semibold mb-3">
                {sponsor.title}
              </h3>
              <p className="text-sm font-normal text-black/80 mb-3">
                The all-in-one platform for workforce skills The all-in-one
                platform for workforce skills
              </p>
              <Link
                href="#"
                className="flex gap-1 items-center text-base font-medium text-[#176AFD]"
              >
                Visit Website
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const sponsors = Array.from({ length: 3 }).map((_, index) => {
  return {
    id: "Sponsor" + index,
    image: SponsorBanner,
    title: "Kepler Skills Insights",
    description:
      "The all-in-one platform for workforce skills The all-in-one platform for workforce skills",
  };
});
