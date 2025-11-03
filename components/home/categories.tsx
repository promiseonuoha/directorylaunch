import Link from "next/link";

export default function TopCategories() {
  return (
    <div className="w-full mb-[57px]">
      <h3 className="text-base font-semibold text-black mb-5">
        Top Categories
      </h3>
      <div className="flex flex-col gap-3">
        {dummyData.map((category, index) => (
          <Link
            href=""
            key={index}
            className="w-full flex justify-between items-center"
          >
            <p className="text-sm font-semibold">{category.name}</p>
            <p className="text-sm font-semibold">{category.projects}</p>
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
