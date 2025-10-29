import Link from "next/link";

export default function QuickAccess() {
  return (
    <div className="w-full py-4">
      <h3 className="text-base font-semibold">Quick Access</h3>
      <div className="pt-5 flex flex-col gap-4">
        {dummyData.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className="flex primary-link-hover w-max justify-between items-center py-1 rounded"
          >
            <p className="text-sm font-medium">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const dummyData = [
  {
    name: "Featured Tools",
    path: "",
  },
  {
    name: "Latest Added Tools",
    path: "",
  },
  {
    name: "Submit Project",
    path: "",
  },
];
