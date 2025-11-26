"use client";
import { AnimatePresence, motion } from "framer-motion";
import links from "@/resources/navigation-links.json";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function ResponsiveNavbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  return (
    <AnimatePresence>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed w-screen h-screen top-0 left-0 bg-transparent z-10"
          ></div>
          <motion.div
            exit={{ x: "-100%" }}
            animate={{ x: 0 }}
            initial={{ x: "-100%" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="bg-white border-r border-gray-100 py-8 px-5 z-40 overflow-y-auto  h-screen fixed top-0 w-3/4 left-0 max-tablet:block hidden"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col gap-5">
                {links.map((link, index) => (
                  <Link
                    href={link.url}
                    key={index}
                    onClick={() => setOpen(false)}
                    className="text-base text-black/70 font-semibold"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  variant="default"
                  type="button"
                  onClick={() => {
                    setOpen(false);
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
                  onClick={() => setOpen(false)}
                  className="bg-black text-white h-9 flex justify-center items-center px-4 text-base font-semibold hover:bg-black/80 cursor-pointer"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
