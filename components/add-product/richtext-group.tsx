"use client";
import Tiptap from "@/components/ui/tiptap";

interface Params {
  label: string;
  required: boolean;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  large?: boolean;
  guideLine?: string;
}

export default function RichTextGroup({
  label,
  required,
  placeholder,
  large,
  guideLine,
  value,
  setValue,
}: Params) {
  return (
    <div className="w-full flex max-tablet:gap-0.5 flex-col gap-1.5">
      <div className="flex max-w-full w-max h-max items-start">
        <label
          className={` font-medium max-tablet:text-xs text-gray-700 ${
            large ? "text-base leading-6" : "text-sm"
          }`}
        >
          {label}
        </label>{" "}
        &nbsp;
        {required && <span className="text-sm text-red-600">*</span>}
      </div>

      <div className="w-full">
        <Tiptap
          initialData={value}
          placeholder={placeholder}
          changed={setValue}
        />
      </div>

      {guideLine && (
        <span className="text-sm max-tablet:text-[10px] font-normal leading-5 text-gray-600">
          {guideLine}
        </span>
      )}
    </div>
  );
}
