import Link from "next/link";
import categories from "@/resources/categories.json";

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

      <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5">
        {categories.map((cat, index) => {
          const isActive = cat.title === selectedCategory;

          return (
            <Link
              key={index}
              href={`/categories/${cat.slug}`}
              className={`block mb-5 p-4 rounded-xl border transition-all bg-white hover:border-gray-300 break-inside-avoid ${
                isActive ? "border-black bg-gray-50" : "border-gray-100"
              }`}
            >
              <h3 className="font-outfit font-semibold mb-1">{cat.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {cat.products} products
              </p>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
