import Link from "next/link";
import links from "@/resources/navigation-links.json";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b h-[70px] px-6 flex justify-center border-[#E1E3EA]">
      <div className="w-full h-full max-w-[1276px] flex justify-between items-center">
        <div className="flex items-center gap-20">
          <Link href="/" className="flex gap-2 items-center">
            <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
            <h1 className="font-bold text-xl">Logo</h1>
          </Link>
          <div className="flex items-center gap-5">
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                className="text-base text-black/70 font-semibold"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <Button
            variant="default"
            type="button"
            className="bg-primary-color text-base font-semibold hover:bg-primary-color/80 cursor-pointer"
          >
            Submit a Product
          </Button>
          <Link
            href="/login"
            style={{
              borderRadius: "8px",
            }}
            className="bg-black text-white h-9 flex justify-center items-center px-4 text-base font-semibold hover:bg-black/80 cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
