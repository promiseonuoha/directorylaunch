"use client";

import { UploadedFile } from "@/types/schema";
import { useState, useRef } from "react";

type FileUploadValue = UploadedFile[]; // the parent stores an array of images

interface FileUploadProps {
  value: FileUploadValue;
  setValue: (val: FileUploadValue) => void;
  multiple?: boolean; // allow multiple files
}

export default function FileUpload({
  value,
  setValue,
  multiple = true,
}: FileUploadProps) {
  const [mode, setMode] = useState<"file" | "url">("file");
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files ?? []);

    const mapped: UploadedFile[] = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    if (multiple) {
      setValue([...value, ...mapped]);
    } else {
      setValue([mapped[0]]);
    }
  };

  const handleAddUrl = () => {
    if (!imageUrl) return;

    const entry: UploadedFile = {
      url: imageUrl,
      preview: imageUrl,
    };

    if (multiple) {
      setValue([...value, entry]);
    } else {
      setValue([entry]);
    }

    setImageUrl("");
  };

  const removeFile = (preview: string) => {
    setValue(value.filter((f) => f.preview !== preview));
  };

  return (
    <div className="space-y-4 w-full">
      {/* MODE SWITCH */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode("file")}
          className={`px-3 text-sm py-2 rounded-lg border ${
            mode === "file"
              ? "bg-black text-white border-transparent"
              : "bg-white border-[#E4E4F6]"
          }`}
        >
          Upload File
        </button>

        <button
          type="button"
          onClick={() => setMode("url")}
          className={`px-3 text-sm py-2 rounded-lg border ${
            mode === "url"
              ? "bg-black text-white border-transparent"
              : "bg-white border-[#E4E4F6]"
          }`}
        >
          Enter URL
        </button>
      </div>

      {/* FILE UPLOAD MODE */}
      {mode === "file" && (
        <div className="space-y-3">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="h-24 flex flex-col items-center justify-center border-2 border-gray-200 border-dashed rounded-lg hover:border-gray-400 transition-colors cursor-pointer"
          >
            <svg
              className="h-6 w-6 text-gray-400 mb-1"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-xs text-gray-500">
              {" "}
              Click to upload {multiple ? "or drag files here" : "a file"}
            </span>
          </div>

          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            ref={fileInputRef}
            onChange={handleFiles}
            className="hidden"
          />
        </div>
      )}

      {/* URL MODE */}
      {mode === "url" && (
        <div className="space-y-3 w-full">
          <input
            type="text"
            placeholder="Enter image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full mobile:text-xs shadow-none rounded-xl outline-0 text-base font-normal placeholder:text-gray-500 text-gray-700 h-12 border border-[#E4E4F6] px-3.5"
          />
          <button
            type="button"
            onClick={handleAddUrl}
            className="px-3 py-2 bg-black text-sm text-white rounded-lg"
          >
            Add Image
          </button>
        </div>
      )}

      {/* PREVIEW */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {value.map((f) => (
            <div
              key={f.preview}
              className="relative w-20 h-20 aspect-square rounded overflow-hidden group"
            >
              <img
                src={f.preview}
                alt="preview"
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeFile(f.preview)}
                className="
                      absolute top-1 right-1 
                      rounded-full bg-black/70 w-4 h-4 text-[10px] cursor-pointer 
                      text-white opacity-0 group-hover:opacity-100
                    "
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
