// import BecomeSponsor from "@/components/home/become-sponsor";
import TopCategories from "@/components/home/categories";
import NextLaunch from "@/components/home/next-launch";
import RecommendedTools from "@/components/home/recommended-tools";
import RenderToolsByCategory from "@/components/home/render-tools-by-category";
// import Sponsors from "@/components/home/sponsors";
import Statistics from "@/components/home/statistics";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-mobile:pt-8 pt-[60px] flex max-tablet:flex-col gap-8">
      <div className="w-full">
        <div className="w-full pl-7 max-mobile:pl-2">
          <h1 className="text-[28px] max-mobile:text-xl font-semibold mb-3">
            A launch platform for your products
          </h1>
          <p className="text-base max-mobile:text-sm font-medium text-black/70">
            Sumit your startup & Grow Fast
          </p>
          <InputGroup className="mt-4 h-12 rounded-2xl border-gray-100 bg-white shadow-none">
            <InputGroupInput
              className="max-mobile:text-sm"
              placeholder="Search product"
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">0 result</InputGroupAddon>
          </InputGroup>
        </div>
        {/* <Sponsors /> */}
        <NextLaunch />
        <div className="pt-8 max-mobile:gap-8 mb-12 flex flex-col gap-[60px]">
          <RenderToolsByCategory label="Launching Today" tools={tools} />
          <RenderToolsByCategory label="Launch Yesterday" tools={tools} />
          <RenderToolsByCategory label="Launch in Last month" tools={tools} />
        </div>
        <Link
          href="#"
          className="w-full text-base max-mobile:text-sm max-mobile:h-12 max-mobile:mb-5 mb-20 font-semibold text-black/80 hover:opacity-80 border-2 border-[#E1E3EA] rounded-full flex justify-center items-center h-[50px]"
        >
          See all of last month launched products
        </Link>
      </div>
      <div className="min-w-[295px] max-tablet:min-w-0 max-tablet:w-full w-[295px]">
        <RecommendedTools />
        <Statistics />
        <TopCategories />
        {/* <BecomeSponsor /> */}
      </div>
    </div>
  );
}

const tools = Array.from({ length: 5 }).map((_, index) => {
  return {
    id: "Tool" + index,
    image: "/svg/kepler-logo.svg",
    name: "Kepler Skills Insights",
    description: "The all-in-one platform for workforce skills",
    categories: ["SaaS  Email", "SaaS", "Developer Tools"],
    votes: 2381,
    commentCount: 2381,
    slug: "kepler",
  };
});
