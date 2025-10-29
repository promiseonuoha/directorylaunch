import TopCategories from "@/components/home/categories";
import FeaturedTools from "@/components/home/featured-tools";
import LatestTools from "@/components/home/latest-tools";
import QuickAccess from "@/components/home/quick-access";
import Statistics from "@/components/home/statistics";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex gap-12">
      <div className="w-full">
        <h1 className="text-3xl font-bold tracking-tight">
          Hit launch && snag your badge + DR backlink
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          15 products weekly. 7 votes per user. Zero noise. ✨
        </p>
        <InputGroup className="mt-4 h-12 rounded-2xl border-gray-100 bg-white shadow-none">
          <InputGroupInput placeholder="Search product" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">0 result</InputGroupAddon>
        </InputGroup>
        <FeaturedTools />
        <LatestTools />
      </div>
      <div className="min-w-[350px]">
        <Statistics />
        <TopCategories />
        <QuickAccess />
      </div>
    </div>
  );
}
