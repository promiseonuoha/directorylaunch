import ToolCard from "./tool-card";

interface Props {
  label?: string;
  tools: {
    id: string;
    image: string;
    name: string;
    description: string;
    votes: number;
    commentCount: number;
    categories: string[];
    slug: string;
  }[];
}

export default function RenderToolsByCategory(props: Props) {
  const { label, tools } = props;
  return (
    <div>
      {label && (
        <h3 className="text-2xl pl-6 max-mobile:pl-1 max-mobile:mb-4 max-mobile:text-lg font-semibold mb-6">
          {label}
        </h3>
      )}

      <div className="flex flex-col gap-1">
        {tools.map((tool) => {
          return <ToolCard tool={tool} key={tool.id} />;
        })}
      </div>
    </div>
  );
}
