"use client";
import { useState, useEffect } from "react";
import { ToolsCollection } from "@/types/schema";
import { ColumnDef } from "@tanstack/react-table";
import ActionsDropdown from "./components/action-dropdown";
// import { useTool } from "@/hooks/tools";
import axios from "axios";
import Link from "next/link";

const getToolDetails = async (
  toolId: string,
  setTool: (tool: ToolsCollection) => void
) => {
  try {
    const request = await axios.request({
      url: `/api/ai-tools/get-tool-details?toolId=${toolId}`,
      method: "GET",
    });
    setTool(request.data?.tool);
  } catch (error) {
    console.log(error);
  }
};

const ToolCell = ({ tool }: { tool: ToolsCollection | null }) => {
  const [fileUrl, setFileUrl] = useState<string>(tool?.logo || "");
  // const { getFileUrl } = useTool();

  // useEffect(() => {
  //   if (tool) {
  //     getFileUrl({ fileName: tool.logo, record: tool, setUrl: setFileUrl });
  //   }
  // }, [tool, getFileUrl]);

  return (
    <div className="pl-5 max-tablet:pl-3 flex items-center space-x-3">
      {tool && fileUrl.length > 0 && (
        <img
          src={tool?.status === "published" ? fileUrl : "/placeholder.png"}
          alt=""
          className="w-8 h-8 rounded-full"
        />
      )}
      <div>
        <div className="font-semibold max-tablet:text-xs truncate max-w-full text-sm leading-5 text-gray-900">
          {tool?.name}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: tool?.description || "" }}
          className="text-sm max-tablet:text-xs truncate max-tablet:max-w-[120px] max-w-[170px] line-clamp-1 text-gray-600 leading-5 font-normal"
        ></div>
      </div>
    </div>
  );
};

const BookmarksCell = ({ tool }: { tool: ToolsCollection | null }) => {
  const [aiTool, setAiTool] = useState<ToolsCollection | null>(tool);

  useEffect(() => {
    if (tool) {
      getToolDetails(tool.id, setAiTool);
    }
  }, [tool]);

  return <span>{aiTool?.number_of_bookmarks}</span>;
};

// Define the columns with custom cell rendering for the "Tool" column
export const columns: ColumnDef<ToolsCollection | null>[] = [
  {
    accessorKey: "tool",
    header: "Tool",
    cell: ({ row }) => <ToolCell tool={row.original} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const tool: ToolsCollection | null = row.original;
      return (
        <div
          className={`px-2 w-max py-0.5 rounded-full text-xs font-medium ${
            tool?.status === "published"
              ? "bg-success50 text-success700"
              : tool?.status === "pending"
              ? "bg-warning50 text-warning700"
              : "bg-indigo-50 text-primary-color"
          }`}
        >
          {tool?.status === "published"
            ? "Published"
            : tool?.status === "pending"
            ? "Submission Pending"
            : "Adding tool information"}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Published on",
    cell: ({ row }) => {
      const tool: ToolsCollection | null = row.original;
      return `${
        tool?.status === "published"
          ? new Date(tool?.created || "").toLocaleDateString()
          : "N/A"
      }`;
    },
  },
  {
    accessorKey: "impressions",
    header: "Total Impressions",
    cell: ({ row }) => {
      const tool: ToolsCollection | null = row.original;
      return tool?.status === "published" ? (
        <p className="max-w-[120px] max-tablet:text-xs max-tablet:max-w-[70px] truncate">
          3,000
        </p>
      ) : (
        "N/A"
      );
    },
  },

  {
    accessorKey: "number_of_bookmarks",
    header: "Upvote",
    cell: ({ row }) =>
      row.original?.status === "published" ? (
        <BookmarksCell tool={row.original} />
      ) : (
        ""
      ),
  },

  {
    accessorKey: "action",
    header: "Actions",
    cell: ({ row }) => {
      const tool: ToolsCollection | null = row.original;
      return tool?.status === "published" ? (
        <ActionsDropdown tool={tool} />
      ) : tool?.status === "pending" ? (
        <div className="w-max ml-auto">
          <Link
            href={`/dashboard/ai-tools/edit/${tool?.id}`}
            className="text-primary-color font-semibold text-sm py-2 px-3.5 rounded-eight bg-brand50 border border-brand50"
          >
            Review and Submit
          </Link>
        </div>
      ) : (
        ""
      );
    },
  },
];
