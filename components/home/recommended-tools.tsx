import Image from "next/image";

export default function RecommendedTools() {
  return (
    <div className="w-full mb-[60px]">
      <h3 className="text-base font-semibold text-black mb-6">
        Recommended Tools
      </h3>
      <div className="flex flex-col gap-6">
        {tools.map((tool) => (
          <div className="w-full" key={tool.id}>
            <div className="flex mb-2.5 gap-4 items-center">
              <Image
                src={tool.image}
                alt={tool.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg object-cover shrink-0"
              />
              <h2 className="font-semibold text-base text-black">
                {tool.name}
              </h2>
            </div>
            <p className="text-sm w-full leading-6 text-black/80">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const tools = Array.from({ length: 3 }).map((_, index) => {
  return {
    id: "Tool" + index,
    image: "/svg/kepler-logo.svg",
    name: "Kepler Skills Insights",
    description:
      "End your AI app chaos with a canvas that connects your everyday apps and tools. Replace tabs with context-rich AI Cards. ",
  };
});
