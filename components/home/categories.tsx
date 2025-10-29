import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="w-full py-4 border-b border-[#e5e5e5]">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-base font-semibold">Top Categories</h3>
        <Link href="" className="text-sm primary-link-hover font-medium">
          View all
        </Link>
      </div>
      <div className="pt-5 flex flex-col gap-4">
        {dummyData.map((category, index) => (
          <Link
            href=""
            key={index}
            className="w-full flex justify-between items-center py-1 rounded"
          >
            <p className="text-sm font-medium">{category.name}</p>

            <p className="text-muted-foreground bg-secondary rounded-full px-2 py-0.5 text-xs">
              {category.projects} projects
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const dummyData = [
  {
    name: "Artificial Intelligence",
    projects: 1245,
  },
  {
    name: "Productivity",
    projects: 980,
  },
  {
    name: "Health Tech",
    projects: 765,
  },
  {
    name: "Fintech",
    projects: 654,
  },
  {
    name: "Education",
    projects: 543,
  },
];
