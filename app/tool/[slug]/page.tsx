import Comments from "@/components/tool/comments";
import { Button } from "@/components/ui/button";
import { ExternalLink, Share2, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            src="/sirius.png"
            alt="HevcPro"
            width={64}
            height={64}
            className="w-16 h-16 md:w-16 md:h-16 rounded-xl object-cover shrink-0 mx-auto md:mx-0"
          />

          <div className="flex-1 min-w-0 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-2">
              <h2 className="text-xl font-outfit font-semibold text-gray-900">
                HEVCPro
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-sm text-gray-500">
              <span>
                Posted by{" "}
                <Link href="#" className="text-gray-900 hover:text-gray-700">
                  Promise
                </Link>
              </span>
              <span className="hidden md:inline">•</span>
              <span>Oct 29, 2025</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-500">Upvoted by</span>
              <div className="flex -space-x-2">
                <div className="h-6 w-6 flex justify-center items-center rounded-full ring-2 ring-white overflow-hidden bg-gray-100">
                  <h4 className="text-gray-700 text-xs font-medium">A</h4>
                </div>
                <div className="h-6 w-6 flex justify-center items-center rounded-full ring-2 ring-white overflow-hidden bg-gray-100">
                  <h4 className="text-gray-700 text-xs font-medium">G</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-4 md:mt-0 md:self-start flex-wrap md:flex-nowrap">
            <Button
              className="cursor-pointer text-xs flex gap-1 items-center"
              variant="secondary"
            >
              <ThumbsUp />
              <span>12</span>
            </Button>
            <Button className="cursor-pointer" variant="secondary">
              <Share2 />
            </Button>
            <Link
              href="https://steelsoft.site/software/HEVCPro_home.html?ref=itslaunched.com"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md transition-colors"
            >
              <ExternalLink width={16} />
              <span className="inline">Visit Website</span>
            </Link>
          </div>
        </div>
        <h3 className="text-lg font-outfit font-semibold my-4">About</h3>
        <p className="text-gray-600">
          a powerful video compression software designed for professionals and
          video enthusiasts alike. Leveraging advanced H.265 (HEVC) encoding
          technology, HEVCPro significantly reduces video file sizes.
        </p>
      </div>
      <Comments />
    </div>
  );
}
