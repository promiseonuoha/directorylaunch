import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface Props {
  tool: {
    id: string;
    image: string;
    name: string;
    description: string;
    votes: number;
    commentCount: number;
    categories: string[];
    slug: string;
  };
}

export default function ToolCard(props: Props) {
  const { tool } = props;

  const categories = useMemo(() => {
    return tool.categories.slice(0, 2);
  }, [tool.categories]);
  return (
    <div className="duration-200 rounded-2xl max-mini:p-0 max-mini:mb-2 max-mobile:p-2 p-6 hover:bg-[#F7F7FE] group">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1">
          <Link
            href={`/product/${tool.slug}`}
            className="flex items-start gap-6 max-mobile:gap-4 flex-1"
          >
            <Image
              src={tool.image}
              alt={tool.name}
              width={60}
              height={60}
              className="h-[60px] max-mobile:w-8 max-mobile:h-8 max-mobile:rounded-md w-[60px] rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold line-clamp-1 max-mobile:text-sm text-lg text-black">
                  {tool.name}
                </h3>
                <ExternalLink className="hidden max-mobile:h-2 max-mobile:w-2 w-4 h-4 text-black/60 transform translate-x-2 opacity-0 group-hover:block group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out" />
              </div>
              <p className="text-base line-clamp-1 w-full max-mobile:text-sm text-black/80">
                {tool.description}
              </p>
              <div className="flex w-full overflow-hidden mt-1 items-center gap-3">
                {categories.slice(0, 2).map((category, index) => {
                  return (
                    <p
                      key={index}
                      className="text-sm max-mini:text-[10px] max-mobile:text-xs font-normal text-black/80 flex gap-3 items-center"
                    >
                      {category} {index < categories.length - 1 && "•"}
                    </p>
                  );
                })}
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center max-mobile:gap-2.5 gap-4">
          <button
            type="button"
            className="flex flex-col max-mobile:gap-0.5 cursor-pointer justify-center max-mobile:w-11 max-mobile:h-11 max-mobile:rounded-lg items-center gap-1 w-[60px] rounded-xl h-[60px] border-2 border-[#E1E3EA] bg-white hover:opacity-80"
          >
            <Image
              src="/svg/comment.svg"
              alt="Comment Icon"
              width={20}
              height={20}
              className="max-mobile:w-3 max-mobile:h-3"
            />
            <span className="text-sm max-mobile:text-[10px] text-black font-semibold">
              {tool.commentCount}
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col max-mobile:gap-0.5 max-mobile:w-11 max-mobile:h-11 max-mobile:rounded-lg cursor-pointer justify-center items-center gap-1 w-[60px] rounded-xl h-[60px] border-2 border-[#E1E3EA] bg-white hover:opacity-80"
          >
            <Image
              src="/svg/thumbs-up.svg"
              alt="Reaction Icon"
              width={20}
              height={20}
              className="max-mobile:w-3 max-mobile:h-3"
            />
            <span className="text-sm max-mobile:text-[10px] text-black font-semibold">
              {tool.votes}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
