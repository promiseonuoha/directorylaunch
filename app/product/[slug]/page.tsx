import RecommendedTools from "@/components/home/recommended-tools";
import Comments from "@/components/tool/comments";
import { ToolPreview } from "@/components/tool/tool-preview";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full py-16 max-mobile:pt-8 max-tablet:pb-0 flex max-tablet:flex-col gap-8">
      <div className="w-full">
        <div className="flex items-start max-mobile:gap-3 mb-8 gap-6 flex-1">
          <Image
            src="/svg/kepler-logo.svg"
            alt="Kepler Skills Insights"
            width={60}
            height={60}
            className="h-[60px] max-mobile:w-8 max-mobile:h-8 max-mobile:rounded-md w-[60px] rounded-lg object-cover shrink-0"
          />
          <div className="flex flex-col max-mobile:gap-1 gap-2">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold max-mobile:text-lg text-2xl text-black">
                Kepler Skills Insights
              </h3>
            </div>
            <p className="text-base max-mobile:text-sm text-black/80">
              The all-in-one platform for workforce skills
            </p>
          </div>
        </div>
        {/* <ToolPreviewCarousel /> */}
        <ToolPreview />
        <div className="w-full max-mini:grid grid-cols-2 mt-11 mb-12 flex justify-center gap-3">
          <button
            type="button"
            className="flex col-span-1 max-mini:w-full hover:border-[#FF4306] duration-200 font-semibold text-sm items-center justify-center gap-2 h-11 w-[186px] rounded-xl cursor-pointer border-2 border-[#E1E3EA]"
          >
            <Image
              src="/svg/thumbs-up.svg"
              alt="Reaction Icon"
              width={20}
              height={20}
            />
            2381
          </button>
          <button
            type="button"
            className="flex col-span-1 max-mini:w-full hover:border-[#FF4306] duration-200 font-semibold text-sm items-center justify-center gap-2 h-11 w-[186px] rounded-xl cursor-pointer border-2 border-[#E1E3EA]"
          >
            <Image
              src="/svg/external-link.svg"
              alt="External Link Icon"
              width={20}
              height={20}
            />
            Visit website
          </button>
          <button
            type="button"
            className="flex col-span-1 max-mini:w-full hover:border-[#FF4306] duration-200 font-semibold text-sm items-center justify-center gap-2 h-11 w-[186px] rounded-xl cursor-pointer border-2 border-[#E1E3EA]"
          >
            <Image
              src="/svg/share.svg"
              alt="Share Icon"
              width={20}
              height={20}
            />
            Share
          </button>
        </div>
        <p className="font-medium max-mini:text-sm leading-8 text-base text-black/70">
          CrossPostingPal is your all-in-one solution for simplifying content
          sharing and scheduling across multiple social platforms. Tired of the
          repetitive process of posting separately to Bluesky, Twitter,
          Instagram, TikTok, and others? CrossPostingPal is built to save you
          time and help you engage your audience more efficiently.
          <br /> <br />
          With its unified dashboard, creators can manage and schedule content
          across all platforms from one convenient place: no more tab-hopping or
          reformatting posts to fit each platform’s quirks. Just focus on what
          you do best: creating. Whether you’re a casual user or a seasoned
          content creator, CrossPostingPal makes it easy to upload, tailor, and
          schedule posts without the usual hassle. It’s the smarter way to grow
          your presence online.
          <br />
          <b>Try it free today - no credit card needed.</b>
          <br />
          Experience how effortless social media management can be.
          <br /> <br />
          With "UNEED30" code you can get special deal for Uneed users:
          additional 30% OFF, combinable with other active promotions.
        </p>
        <Comments />
      </div>
      <div className="min-w-[295px] max-tablet:min-w-0 max-tablet:w-full w-[295px]">
        <div className="w-full mb-6 border border-[#E4E4F6] rounded-xl p-6">
          <h4 className="font-semibold text-xs text-primary-color mb-3.5">
            Publisher
          </h4>
          <div className="flex mb-[18px] items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D9D9D9]" />
            <Link
              href="#"
              className="text-base max-mini:text-sm font-semibold text-black underline"
            >
              Johnathan Doe
            </Link>
          </div>
          <p className="text-sm font-medium text-black/70 mb-6">
            Launch Date: 2025-11-06
          </p>
          <h4 className="font-semibold text-xs text-primary-color mb-3.5">
            Tags
          </h4>
          <p className="text-sm text-black/80 mb-6">
            SaaS Email • SaaS • Developer Tools
          </p>
          <h4 className="font-semibold text-xs text-primary-color mb-3.5">
            Upvoted by
          </h4>
          <div className="w-full flex flex-wrap gap-1.5">
            {upvoters.map((voter, index) => (
              <Link href="#" key={index} className="col-span-1">
                <div
                  className={cn(
                    "w-9 h-9 bg-gray-100 hover:opacity-80 rounded-full flex justify-center items-center"
                  )}
                >
                  <h4 className="text-gray-700 text-sm font-medium">{voter}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <RecommendedTools />
      </div>
    </div>
  );
}

const upvoters = ["A", "L", "R", "E", "G"];
