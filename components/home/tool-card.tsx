import { ArrowUp, MessageCircle } from "lucide-react";
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
  };
}

export default function ToolCard(props: Props) {
  const { tool } = props;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 hover:border-gray-200 group">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1">
          <Link href="/tool/hevcpro" className="flex items-center gap-3 flex-1">
            <Image
              src={tool.image}
              alt={tool.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-outfit font-semibold text-gray-900 text-[15px] mb-0.5 transition-colors">
                  {tool.name}
                </h3>
                <svg
                  className="hidden w-3.5 h-3.5 text-gray-400 transform translate-x-2 opacity-0 group-hover:block group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {tool.description}
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium tabular-nums">
              {tool.votes}
            </span>
          </button>
          <Link
            href="#"
            className="inline-flex items-center gap-1 p-1.5 text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium tabular-nums">
              {tool.commentCount}
            </span>
          </Link>

          <button
            type="button"
            className="p-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
