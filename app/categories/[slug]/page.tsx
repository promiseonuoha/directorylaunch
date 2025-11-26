import RenderToolsByCategory from "@/components/home/render-tools-by-category";
import categories from "@/resources/categories.json";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  return (
    <div className="w-full max-mobile:pt-8 max-mobile:pb-0 pt-[60px] pb-[90px] flex flex-col items-center">
      <h1 className="font-semibold max-mobile:text-xl text-[28px] text-center mb-3">
        {category?.title}
      </h1>
      <p className="text-center max-mobile:text-sm font-medium text-base text-black/70">
        {category?.description}
      </p>
      <InputGroup className="mt-4 max-w-[800px] h-12 mb-12 rounded-2xl border-gray-100 bg-white shadow-none">
        <InputGroupInput
          className="max-mobile:text-sm"
          placeholder={`Search products in ${category?.title}`}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">0 result</InputGroupAddon>
      </InputGroup>

      <div className="w-full">
        <div className="flex flex-col gap-[60px]">
          <RenderToolsByCategory tools={tools} />
        </div>
      </div>
    </div>
  );
}

const tools = Array.from({ length: 15 }).map((_, index) => ({
  id: "Tool" + index,
  image: "/svg/kepler-logo.svg",
  name: "Kepler Skills Insights",
  description: "The all-in-one platform for workforce skills",
  categories: ["SaaS", "Email", "Developer Tools"],
  votes: 2381,
  commentCount: 2381,
  slug: "kepler",
}));
