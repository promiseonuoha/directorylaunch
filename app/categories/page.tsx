import RenderToolsByCategory from "@/components/home/render-tools-by-category";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedCategory = params?.category;

  return (
    <div className="w-full pt-[60px] pb-[90px] flex flex-col items-center">
      <h1 className="font-semibold text-[28px] text-center mb-3">Categories</h1>
      <p className="text-center font-medium text-base text-black/70 mb-12">
        Find Products By Category, select a category to get started.
      </p>

      <div className="w-full flex gap-8">
        <div className="w-full">
          <div className="flex flex-col gap-[60px]">
            <RenderToolsByCategory
              label={
                selectedCategory
                  ? `${selectedCategory} Products`
                  : "Showing all products"
              }
              tools={tools}
            />
          </div>
        </div>

        <div className="min-w-[550px] w-[550px] grid grid-cols-2 gap-5">
          {categories.map((cat, index) => {
            const isActive = cat.title === selectedCategory;
            return (
              <Link
                key={index}
                href={`?category=${encodeURIComponent(cat.title)}`}
                className={`block h-max p-4 rounded-xl border transition-all bg-white hover:border-gray-300 ${
                  isActive ? "border-black bg-gray-50" : "border-gray-100"
                }`}
              >
                <h3 className="font-outfit font-semibold mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.products} products</p>
              </Link>
            );
          })}
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

const categories = [
  { title: "Analytics", products: 31 },
  { title: "API Tools", products: 35 },
  { title: "Art & Design", products: 73 },
  { title: "Artificial Intelligence", products: 226 },
  { title: "Authentication", products: 6 },
  { title: "Blockchain", products: 1 },
  { title: "Books", products: 6 },
  { title: "Bots", products: 4 },
  { title: "Business Tools", products: 102 },
  { title: "Calendar", products: 5 },
  { title: "Chat", products: 19 },
  { title: "Chrome Extensions", products: 17 },
  { title: "Code Editors", products: 5 },
  { title: "Collaboration", products: 10 },
  { title: "Communication", products: 18 },
  { title: "Content Management", products: 13 },
  { title: "Crypto", products: 5 },
  { title: "Customer Success", products: 7 },
  { title: "Data", products: 20 },
  { title: "Database", products: 7 },
  { title: "Design Tools", products: 68 },
  { title: "Developer Tools", products: 87 },
  { title: "E-Commerce", products: 17 },
  { title: "Education", products: 37 },
  { title: "Email", products: 14 },
  { title: "Finance", products: 24 },
  { title: "Fitness", products: 2 },
  { title: "Food & Drink", products: 4 },
  { title: "Games", products: 37 },
  { title: "Health & Fitness", products: 13 },
  { title: "Home Automation", products: 2 },
  { title: "Human Resources", products: 16 },
  { title: "Indie Games", products: 11 },
  { title: "Internet of Things", products: 3 },
  { title: "Investing", products: 6 },
  { title: "Legal", products: 6 },
  { title: "Lifestyle", products: 29 },
  { title: "Machine Learning", products: 1 },
];
