"use client";

import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  label: string;
  id: number;
}

interface Props {
  options: Category[];
  selected: Category[];
  setSelected: React.Dispatch<React.SetStateAction<Category[]>>;
  label: string;
  placeholder: string;
  required: boolean;
  large: boolean;
}

export default function MultiSelect(props: Props) {
  const {
    options,
    selected,
    setSelected,
    label,
    placeholder,
    required,
    large,
  } = props;

  return (
    <div className="w-full flex flex-col mobile:gap-0.5 gap-1.5">
      <div className="flex w-max h-max items-start">
        <label
          className={` font-medium mobile:text-xs text-black/70 ${
            large ? "text-base leading-6" : "text-sm"
          }`}
        >
          {label}
        </label>
        &nbsp;
        {required && (
          <span className="text-sm mobile:text-xs text-red-600">*</span>
        )}
      </div>
      <div className="w-full">
        <Listbox value={selected} onChange={setSelected} multiple>
          <div className="relative mt-1">
            <Listbox.Button
              className={cn(
                "flex w-full items-center justify-between text-left mobile:text-xs shadow-none rounded-xl outline-0 text-base font-normal text-gray-700 h-12 border border-[#E4E4F6] px-3.5",
                {
                  "text-gray-500": selected.length === 0,
                }
              )}
            >
              <span className="block truncate">
                {selected.length > 0
                  ? selected.map((s) => s.label).join(", ")
                  : placeholder}
              </span>

              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Listbox.Button>

            <Listbox.Options
              className="
              absolute z-20 ring-[#E4E4F6] mt-2 max-h-60 w-full overflow-auto rounded-xl 
              bg-white p-2 shadow-lg ring-1 focus:outline-none
            "
            >
              {options.map((item) => (
                <Listbox.Option
                  key={item.id}
                  value={item}
                  className={({ active }) =>
                    `cursor-pointer select-none rounded-lg px-4 py-2 ${
                      active ? "bg-gray-100" : "bg-white"
                    }`
                  }
                >
                  {({ selected }) => (
                    <div className="flex items-center gap-2">
                      <span className="flex-1 text-sm text-black/70">
                        {item.label}
                      </span>

                      {selected && (
                        <Check className="h-3.5 w-3.5 text-black/70" />
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
