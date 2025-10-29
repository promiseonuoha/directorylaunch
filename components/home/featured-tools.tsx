import ToolCard from "./tool-card";

export default function FeaturedTools() {
  return (
    <div>
      <h3 className="text-lg font-outfit font-semibold mb-4 mt-8">
        🚀 Handpicked for You
      </h3>
      <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mb-4">
        <div className="flex gap-3">
          <div className="shrink-0">
            <svg
              className="w-5 h-5 text-yellow-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-sm font-sans text-yellow-800">
              Meet our favorites! These featured tools are the ones we can’t
              stop using — powerful, creative, and seriously useful. Whether
              you’re building, designing, or exploring, this list has something
              that’ll level up your workflow.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {featuredTools.map((tool) => {
          return <ToolCard tool={tool} key={tool.id} />;
        })}
      </div>
    </div>
  );
}

const featuredTools = Array.from({ length: 5 }).map((_, index) => {
  return {
    id: "Tool" + index,
    image: "/sirius.png",
    name: "HEVCPro",
    description: "Professional and Efficient H.265 Video Compression Solution",
    votes: 2,
    commentCount: 5,
  };
});
