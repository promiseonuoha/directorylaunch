import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ToolCard from "./tool-card";

export default function LatestTools() {
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <h3 className="text-lg font-outfit font-semibold mb-4 mt-8">
          Latest Added Tools
        </h3>
        <Select>
          <SelectTrigger className="w-[180px] rounded-none bg-white shadow-none border-0">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Newest">Newest First</SelectItem>
            <SelectItem value="Oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
        {featuredTools.map((tool) => {
          return <ToolCard tool={tool} key={tool.id} />;
        })}
      </div>
      <Pagination className="mt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

const featuredTools = Array.from({ length: 7 }).map((_, index) => {
  return {
    id: "Tool" + index,
    image: "/sirius.png",
    name: "HEVCPro",
    description: "Professional and Efficient H.265 Video Compression Solution",
    votes: 2,
    commentCount: 5,
  };
});
