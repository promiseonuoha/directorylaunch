import { ArrowUp, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  tool: {
    id: string;
    image: string;
    name: string;
    description: string;
    votes: number;
    commentCount: number;
    categories: string[];
  };
}

export default function ToolCard(props: Props) {
  const { tool } = props;
  return (
    <div className="duration-200 rounded-2xl p-6 hover:bg-[#F7F7FE] group">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1">
          <Link href="#" className="flex items-start gap-6 flex-1">
            <Image
              src={tool.image}
              alt={tool.name}
              width={60}
              height={60}
              className="h-[60px] w-[60px] rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg text-black">
                  {tool.name}
                </h3>
                <ExternalLink className="hidden w-4 h-4 text-black/60 transform translate-x-2 opacity-0 group-hover:block group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out" />
              </div>
              <p className="text-base text-black/80">{tool.description}</p>
              <div className="flex mt-1 items-center gap-3">
                {tool.categories.map((category, index) => {
                  return (
                    <p
                      key={index}
                      className="text-sm font-normal text-black/80 flex gap-3 items-center"
                    >
                      {category} {index < tool.categories.length - 1 && "•"}
                    </p>
                  );
                })}
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex flex-col cursor-pointer justify-center items-center gap-1 w-[60px] rounded-xl h-[60px] border-2 border-[#E1E3EA] bg-white hover:opacity-80"
          >
            <Image
              src="/svg/comment.svg"
              alt="Comment Icon"
              width={20}
              height={20}
            />
            <span className="text-sm text-black font-semibold">
              {tool.commentCount}
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col cursor-pointer justify-center items-center gap-1 w-[60px] rounded-xl h-[60px] border-2 border-[#E1E3EA] bg-white hover:opacity-80"
          >
            <Image
              src="/svg/thumbs-up.svg"
              alt="Reaction Icon"
              width={20}
              height={20}
            />
            <span className="text-sm text-black font-semibold">
              {tool.votes}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
