"use client";

import { useNewTool } from "@/contexts/new-tool";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Schedule() {
  const router = useRouter();
  const { newTool } = useNewTool();

  useEffect(() => {
    if (!newTool) {
      router.back();
    }
  }, []);

  if (!newTool) return null;

  return (
    <div className="w-full max-w-[1000px] h-max flex flex-col">
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="font-semibold text-xl">Select your launch date</h1>
        <p className="text-base text-gray-500 font-medium">
          Choose when to launch your product
        </p>
      </div>
      <div className="duration-200 border border-[#E4E4F6] rounded-xl p-4 group">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 flex-1">
            <div className="flex items-start gap-4 flex-1">
              <img
                src={newTool.logo[0].preview}
                alt={newTool.name}
                className="h-[60px] w-[60px] rounded-lg object-cover shrink-0"
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg text-black">
                    {newTool.name}
                  </h3>
                </div>
                <p className="text-base text-black/80">
                  {newTool.shortDescription}
                </p>
                <div className="flex mt-1 items-center gap-3">
                  {newTool.categories.map((category, index) => {
                    return (
                      <p
                        key={index}
                        className="text-sm font-normal text-black/80 flex gap-3 items-center"
                      >
                        {category.label}{" "}
                        {index < newTool.categories.length - 1 && "•"}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
