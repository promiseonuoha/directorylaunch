"use client";
import Link from "next/link";
import links from "@/resources/navigation-links.json";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ResponsiveNavbar from "./responsive-navbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="w-full bg-white border-b max-tablet:h-[60px] h-[70px] px-6 flex justify-center border-[#E1E3EA]">
      <div className="w-full h-full max-w-[1276px] flex justify-between items-center">
        <div className="flex items-center gap-20">
          <Link href="/" className="flex gap-2 items-center">
            <div className="w-8 h-8 max-tablet:w-6 max-tablet:h-6 rounded-full bg-[#D9D9D9]" />
            <h1 className="font-bold max-tablet:text-base text-xl">Logo</h1>
          </Link>
          <div className="flex max-tablet:hidden items-center gap-5">
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
        <div className="flex max-tablet:hidden items-center gap-3.5">
          <Button
            variant="default"
            type="button"
            onClick={() => {
              router.push("/add-product");
            }}
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

        <div className="max-tablet:flex items-center hidden">
          <button
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            className="w-[18px] flex flex-col gap-1.5 bg-transparent border-none outline-none"
          >
            <div
              className={`w-full h-px bg-gray-700 duration-300 ${
                open
                  ? "rotate-45 translate-y-[3.6px]"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
            <div
              className={`w-full h-px bg-gray-700 duration-300 ${
                open
                  ? "-rotate-45 -translate-y-[3.6px]"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
      <ResponsiveNavbar setOpen={setOpen} open={open} />
    </nav>
  );
}
