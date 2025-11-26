"use client";

import { useNewTool } from "@/contexts/new-tool";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface Week {
  id: number;
  date: string;
  used: number;
  capacity: number;
}

export default function Schedule() {
  const router = useRouter();
  const { newTool } = useNewTool();

  const [weeks, setWeeks] = useState<Week[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
  const [showSkipModal, setShowSkipModal] = useState(false);

  useEffect(() => {
    if (!newTool) router.back();

    const sampleWeeks: Week[] = [
      { id: 1, date: "Dec 1, 2025", used: 2, capacity: 10 },
      { id: 2, date: "Dec 8, 2025", used: 7, capacity: 10 },
      { id: 3, date: "Dec 15, 2025", used: 10, capacity: 10 },
      { id: 4, date: "Dec 22, 2025", used: 1, capacity: 10 },
      { id: 5, date: "Dec 29, 2025", used: 0, capacity: 10 },
    ];

    setWeeks(sampleWeeks);
  }, [newTool, router]);

  if (!newTool) return null;

  return (
    <div className="w-full max-w-[1000px] flex flex-col max-mobile:pb-0 pb-20">
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="font-semibold max-mobile:text-lg text-2xl">
          Select your launch week
        </h1>
        <p className="text-base max-mobile:text-sm text-gray-500 font-medium">
          Products are launched weekly. Only 10 slots per week.
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-10">
        {weeks.map((week: Week) => {
          const isFull = week.used >= week.capacity;
          const selected = selectedWeek?.id === week.id;

          return (
            <div
              key={week.id}
              className={`
                w-full px-4 py-3 rounded-2xl border transition relative group
                ${
                  isFull
                    ? "bg-white border-gray-200 opacity-50 cursor-not-allowed"
                    : "bg-white cursor-pointer"
                }
                ${selected ? "border-primary-color bg-primary-color/5" : ""}
              `}
              onClick={() => !isFull && setSelectedWeek(week)}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-base">{week.date}</p>
                  <p className="text-sm text-gray-500">
                    {week.used} / {week.capacity} slots filled
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-lg text-xs font-medium 
                    ${
                      isFull
                        ? "bg-red-100 text-red-600"
                        : selected
                        ? "bg-primary-color text-white"
                        : "bg-gray-100 text-gray-600"
                    }
                  `}
                >
                  {isFull ? "Full" : selected ? "Selected" : "Available"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="h-2 w-1/2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-color transition-all"
                    style={{
                      width: `${(week.used / week.capacity) * 100}%`,
                    }}
                  ></div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSkipModal(true);
                  }}
                  className="transition-opacity px-3 py-2 rounded-lg cursor-pointer text-sm font-medium"
                >
                  🚀 Skip the line
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Dialog open={!!selectedWeek}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Confirm Launch Week</DialogTitle>
            <DialogDescription>
              Your product will launch on {selectedWeek?.date} (Monday of that
              week).
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="cursor-pointer"
                onClick={() => {
                  setSelectedWeek(null);
                }}
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="button"
              onClick={() => {
                // router.push("/add-product/success");
              }}
              className="bg-primary-color cursor-pointer hover:bg-primary-color/80"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showSkipModal}>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Skip the Line</DialogTitle>
            <DialogDescription>
              Want to skip the line and launch your product on this date anyway?
              You can pay $15 to get priority access and bypass the normal
              queue.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">What you get:</h4>{" "}
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Priority scheduling on your chosen date</li>{" "}
              <li>• Bypass the normal product queue</li>{" "}
              <li>• Guaranteed launch on your selected week</li>{" "}
            </ul>{" "}
          </div>
          <DialogFooter className="w-full grid grid-cols-2">
            <Button
              type="button"
              variant="secondary"
              className="cursor-pointer col-span-1"
              onClick={() => {
                setShowSkipModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="bg-primary-color col-span-1 cursor-pointer hover:bg-primary-color/80"
            >
              Skip the Line ($15)
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
