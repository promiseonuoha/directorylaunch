import Link from "next/link";
import links from "@/resources/footer-links.json";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center px-6">
      <div className="w-full max-w-[1238px] pt-16 flex flex-col">
        <div className="w-full pb-16 border-b border-gray-200 mb-8 flex gap-16 items-start">
          <div className="min-w-max flex flex-col  gap-8">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
              <h1 className="font-bold text-lg text-[#101828]">Logo</h1>
            </Link>
            <p className="font-normal text-base text-gray-600 leading-6">
              Design amazing digital experiences that <br /> create more happy
              in the world.
            </p>
          </div>
          <div className="gap-8 w-full grid grid-cols-3 items-start">
            {links.map((item) => {
              return (
                <div
                  key={item.label}
                  className="flex flex-col h-max col-span-1 gap-4"
                >
                  <p className="text-sm font-semibold text-black">
                    {item.label}
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    {item.links.map((link) => {
                      return (
                        <Link
                          href={link.path}
                          key={link.name}
                          className="text-gray-600 text-base max-tablet:text-sm max-mini:text-xs font-semibold"
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full pb-12 flex items-center justify-center">
          <p className="text-gray-500 text-center font-normal text-base">
            © {new Date().getFullYear()} Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
