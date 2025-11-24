"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tag } from "@/types/schema";
import tags from "@/resources/tags.json";

interface Props {
  addTag: (tag: Tag) => void;
}

export function TagsInput(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");

  const list = React.useMemo(() => {
    if (searchValue.length)
      return [{ value: searchValue, label: searchValue }, ...tags];
    return tags;
  }, [searchValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-12 text-base text-gray-500 hover:text-gray-500 hover:bg-transparent cursor-pointer shadow-none border-0 justify-between"
        >
          {value
            ? tags.find((tag) => tag.value === value)?.label
            : "Select tag"}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[1000px] p-0">
        <Command>
          <CommandInput
            onValueChange={(v) => {
              setSearchValue(v);
            }}
            placeholder="Search tag"
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup>
              {list.map((tag, index) => (
                <CommandItem
                  key={tag.value + index}
                  value={tag.value}
                  onSelect={(currentValue) => {
                    props.addTag(tag);
                    setSearchValue("");
                    console.log(currentValue);
                    setOpen(false);
                  }}
                >
                  {tag.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
