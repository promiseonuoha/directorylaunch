"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  {
    label: "My Products",
    path: "/my-products",
  },
  {
    label: "My Upvotes",
    path: "/my-upvotes",
  },
];

export default function SectionNavigation() {
  const pathname = usePathname();

  return (
    <div className="w-full max-tablet:h-7 h-9 overflow-y-hidden overflow-x-auto gap-6 border-b border-gray-300  flex">
      {pages.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`h-9 max-tablet:h-7 min-w-max  flex items-start max-tablet:text-xs justify-center bg-transparent font-semibold text-sm ${
              pathname === item.path
                ? "border-b-2 border-primary-color text-primary-color"
                : "border-b-2 border-transparent text-gray-500"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
