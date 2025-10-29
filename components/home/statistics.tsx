import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export default function Statistics() {
  return (
    <div className="w-full pb-4 border-b border-[#e5e5e5]">
      <div className="flex mb-3 items-center gap-2">
        <h3 className="text-base font-semibold">Statistics</h3>
        <Tooltip>
          <TooltipTrigger className="h-3" asChild>
            <Info className="w-3 text-muted-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Since October 2025</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="w-full grid grid-cols-2 gap-3">
        <div className="col-span-1 border border-[#e5e5e5] rounded-md flex flex-col items-center justify-center py-2">
          <h2 className="text-xl mb-0.5 font-bold">23,285</h2>
          <p className="text-xs font-medium text-muted-foreground">Visitors</p>
        </div>
        <div className="col-span-1 border border-[#e5e5e5] rounded-md flex flex-col items-center justify-center py-2">
          <h2 className="text-xl mb-0.5 font-bold">87,002</h2>
          <p className="text-xs font-medium text-muted-foreground">
            Page Views
          </p>
        </div>
      </div>
    </div>
  );
}
