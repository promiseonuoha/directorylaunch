"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Code,
  EllipsisVertical,
  Italic,
  Reply,
  SendHorizonal,
  Strikethrough,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export default function Comments() {
  const [renderKey, setRenderKey] = useState(0);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Leave a comment...",
        showOnlyWhenEditable: true,
        showOnlyCurrent: true,
      }),
    ],
    content: "",
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) return;

    const update = () => setRenderKey((k) => k + 1);

    editor.on("selectionUpdate", update);
    editor.on("transaction", update);

    return () => {
      editor.off("selectionUpdate", update);
      editor.off("transaction", update);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-lg font-semibold">Comments</h2>
      <div className="relative z-10 mt-6">
        <div className="overflow-hidden rounded-xl border border-border text-foreground bg-background w-full">
          <div className="relative flex flex-col gap-2">
            <form className="relative">
              <div className="border-b border-gray-100">
                <div className="min-h-10 px-5 pt-3">
                  <EditorContent
                    editor={editor}
                    className="prose text-base max-w-none"
                  />
                </div>

                <div className="w-full flex justify-between items-center">
                  {editor && (
                    <div className="flex flex-row mt-3 items-center gap-2 p-2 bg-card">
                      <button
                        type="button"
                        onClick={() =>
                          editor.chain().focus().toggleBold().run()
                        }
                        className={`px-2 rounded-md ${
                          editor.isActive("bold")
                            ? "text-accent-foreground"
                            : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <Bold width={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          editor.chain().focus().toggleItalic().run()
                        }
                        className={`px-2 rounded-md ${
                          editor.isActive("italic")
                            ? "text-accent-foreground"
                            : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <Italic width={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          editor.chain().focus().toggleStrike().run()
                        }
                        className={`px-2 rounded-md ${
                          editor.isActive("strike")
                            ? "text-accent-foreground"
                            : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <Strikethrough width={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          editor.chain().focus().toggleCode().run()
                        }
                        className={`px-2 rounded-md ${
                          editor.isActive("code")
                            ? "text-accent-foreground"
                            : "text-muted-foreground hover:text-accent-foreground"
                        }`}
                      >
                        <Code width={16} />
                      </button>
                    </div>
                  )}
                  <button
                    aria-label="Send"
                    className="inline-flex items-center justify-center font-medium cursor-pointer disabled:pointer-events-none disabled:bg-muted disabled:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring size-7 rounded-full bg-fc-primary text-fc-primary-foreground transition-colors hover:bg-fc-primary/80 absolute right-3.5 bottom-3"
                    type="submit"
                    disabled
                  >
                    <SendHorizonal width={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="relative flex flex-row gap-2 p-4 text-sm">
                <div className="w-8 h-8 rounded-full ring-white bg-gray-100 ring-2 flex justify-center items-center">
                  <h4 className="text-gray-700 text-sm font-medium">P</h4>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-row items-center gap-2">
                    <span className="truncate font-medium">Promise Onuoha</span>
                    <span className="text-xs text-fc-muted-foreground">
                      Today 16:06
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="inline-flex items-center justify-center font-medium cursor-pointer disabled:pointer-events-none disabled:bg-fc-muted disabled:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring size-7 rounded-full transition-colors hover:bg-accent/80 text-muted-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground disabled:invisible ms-auto -my-2">
                        {" "}
                        <EllipsisVertical height={16} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Copy</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="grid whitespace-pre-wrap wrap-break-word">
                    <span>
                      <span className="">Awesome</span>
                    </span>
                  </div>
                  <div className="mt-2 flex flex-row -mx-2">
                    <button
                      className="inline-flex items-center gap-1.5 p-2 text-xs transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-muted-foreground hover:text-accent-foreground"
                      type="button"
                    >
                      <ThumbsUp width={16} />
                    </button>
                    <button
                      className="inline-flex items-center gap-1.5 p-2 text-xs transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-muted-foreground hover:text-accent-foreground"
                      type="button"
                    >
                      <ThumbsDown width={16} />
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 p-2 text-xs transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-muted-foreground hover:text-accent-foreground"
                    >
                      <Reply width={16} />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
