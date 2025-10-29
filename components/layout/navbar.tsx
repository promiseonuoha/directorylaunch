import Link from "next/link";
import links from "@/resources/navigation-links.json";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b h-16 px-6 flex justify-center border-[#e5e5e5]">
      <div className="w-full h-full max-w-[1100px] flex justify-between items-center">
        <Link href="/">
          <h1 className="font-semibold text-xl">Launchlistr</h1>
        </Link>
        <div className="flex items-center gap-5">
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="text-sm primary-link-hover font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="" className="text-sm primary-link-hover font-medium">
            Login
          </Link>
          <Button
            variant="default"
            className="rounded-full hover:opacity-80 cursor-pointer px-4"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
