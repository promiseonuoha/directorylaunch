"use client";
import { useRouter } from "next/navigation";
// import { useUserTools } from "@/contexts/user-tools";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

import { ToolsCollection } from "@/types/schema";
import { EllipsisVertical } from "lucide-react";
// import { useTool } from "@/hooks/tools";
// import { useUser } from "@/contexts/user";
import { useRef, useState } from "react";

export default function ActionsDropdown({
  tool,
}: {
  tool: ToolsCollection | null;
}) {
  const router = useRouter();
  // const { user } = useUser();
  // const { deleteTool } = useTool();
  // const { setTools } = useUserTools();
  const [loading, setLoading] = useState(false);
  const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = () => {
    cancelButtonRef?.current?.click();
  };

  const handleDelete = async () => {
    // try {
    //   await deleteTool({
    //     id: tool?.id || "",
    //     setTools,
    //     userId: user?.id || "",
    //     setLoading,
    //   });
    //   closeModal();
    // } catch (error) {
    //   closeModal();
    // }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="cursor-pointer p-2 ml-auto w-8 flex justify-center items-center h-8 rounded-full hover:bg-gray-200 duration-200"
        asChild
      >
        <EllipsisVertical className="text-gray-700" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 py-3 rounded-xl translate-y-3">
        <DropdownMenuLabel className="pb-3 px-3">Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push(`/product/${tool?.slug}`)}
            className="py-2 px-4 text-xs text-gray-700 focus:text-gray-800 focus:bg-gray-50"
          >
            View Product
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-2 px-4 text-xs text-gray-700 focus:text-gray-800 focus:bg-gray-50"
            onClick={() => router.push(`/edit-product/${tool?.id}`)}
          >
            Edit Product
          </DropdownMenuItem>
          <Dialog>
            <DialogTrigger className="py-2 px-4 text-xs w-full rounded hover:bg-gray-50 hover:text-gray-800 text-start text-gray-700 cursor-default">
              Delete Product
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete {tool?.name}</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete {tool?.name}? This action
                  cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="">
                <DialogClose ref={cancelButtonRef} asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className="cursor-pointer"
                  >
                    Cancel
                  </Button>
                </DialogClose>

                <Button
                  type="button"
                  onClick={handleDelete}
                  className="bg-primary-color cursor-pointer hover:bg-primary-color/80"
                >
                  {loading ? "Please wait..." : "Delete"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
