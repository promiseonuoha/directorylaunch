"use client";

import Carousel from "@/components/ui/carousel";
export function ToolPreview() {
  const slideData = [1, 2, 3, 4];
  return (
    <div className="relative h-[330px] max-mobile:h-[230px] overflow-hidden w-full">
      <Carousel slides={slideData} />
    </div>
  );
}
