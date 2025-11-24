import { Color } from "@tiptap/extension-color";
import "./tiptap.css";
import ListItem from "@tiptap/extension-list-item";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  RotateCw,
  RotateCcw,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Params {
  changed: (v: string) => void;
  initialData: string;
  placeholder: string;
}

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (editor) {
    editor.setOptions({
      editorProps: {
        attributes: {
          class:
            "px-6 z-10 py-4 hide-scrollbar max-tablet:text-xs text-sm font-normal max-h-[200px] w-full min-h-[200px] placeholder:text-[#00000099] border-[#E5E5E5] overflow-y-auto rounded-b-2xl outline-none border border-t-0 text-[#00000099]",
        },
      },
    });
  }

  if (!editor) {
    return null;
  }

  return (
    <div className="flex w-full overflow-x-auto border-b border-b-[#0000000F] border-[#E5E5E5] gap-x-3 gap-y-3 px-6 pt-4 pb-3 top-0 z-20 bg-white rounded-t-2xl border-x border-t">
      <ToggleGroup type="multiple" className="p-0 m-0 gap-2">
        <ToggleGroupItem
          value="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Toggle italic"
        >
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          aria-label="Toggle underline"
        >
          U
        </ToggleGroupItem>
        <ToggleGroupItem
          value="list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="Toggle bullet list"
        >
          <List className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="listOrdered"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="Toggle ordered list"
        >
          <ListOrdered className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="undo"
          onClick={() => editor.chain().focus().undo().run()}
          aria-label="Undo"
        >
          <RotateCcw className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="redo"
          onClick={() => editor.chain().focus().redo().run()}
          aria-label="Redo"
        >
          <RotateCw className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

const Tiptap = ({ changed, initialData, placeholder }: Params) => {
  return (
    <EditorProvider
      immediatelyRender={false}
      slotBefore={<MenuBar />}
      extensions={[
        Color.configure({ types: [ListItem.name] }),
        TextStyle,
        Underline,
        Placeholder.configure({
          placeholder: placeholder || "Tell us a little about yourself",
        }),
        BulletList,
        OrderedList,
        StarterKit.configure({
          bulletList: {
            keepMarks: true,
            keepAttributes: false,
          },
          orderedList: {
            keepMarks: true,
            keepAttributes: false,
          },
        }),
      ]}
      content={initialData}
      onUpdate={({ editor }) => {
        const html = editor.getHTML();
        changed(html);
      }}
    />
  );
};

export default Tiptap;
