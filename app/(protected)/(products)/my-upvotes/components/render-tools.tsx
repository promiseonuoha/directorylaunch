"use client";
import { useState, useEffect } from "react";
// import { useTool } from "@/hooks/tools";

import { DataTable } from "./data-table";
import { columns } from "../columns";
import { ToolsCollection } from "@/types/schema";
// import { useUser } from "@/contexts/user";
// import { useUserTools } from "@/contexts/user-tools";

export default function RenderTools() {
  // const { getUserTools } = useTool();
  // const { tools, setTools } = useUserTools();
  const [loading, setLoading] = useState<boolean>(false);

  // const { user } = useUser();

  // useEffect(() => {
  //   if (user) {
  //     getUserTools({ setData: setTools, setLoading, userId: user?.id });
  //   }
  // }, [user]);

  return <DataTable columns={columns} data={tools} />;
}

const tools: ToolsCollection[] = [
  {
    bookmarked: false,
    id: "prod_001",
    slug: "taskgenie-ai",
    created: new Date("2024-10-12T10:30:00.000Z"),
    updated: new Date("2024-12-01T15:00:00.000Z"),
    short_description:
      "AI-powered productivity assistant that organizes tasks automatically.",
    name: "TaskGenie AI",
    logo: "https://dummyimage.com/200x200/000/fff&text=TaskGenie",
    rating: 4.8,
    number_of_bookmarks: 120,
    description:
      "TaskGenie AI is an intelligent productivity tool that helps users organize tasks, automate reminders, and manage projects using natural language input. It integrates seamlessly with popular apps and adapts to your workflow.",
    use_cases: [
      "Auto-generate task lists from notes",
      "AI reminders based on behavior",
      "Project planning assistance",
      "Productivity insights and reports",
    ],
    price: "Free plan available, Pro starts at $9/month",
    faqs: [
      {
        question: "Is TaskGenie AI free?",
        answer:
          "Yes, we offer a free plan with essential features. A Pro subscription unlocks advanced AI automation.",
      },
      {
        question: "Does it integrate with Notion and Google Calendar?",
        answer:
          "Yes, TaskGenie AI supports deep integrations with Notion, Google Calendar, and Slack.",
      },
    ],
    socials: {
      facebook: "https://facebook.com/taskgenie",
      twitter: "https://twitter.com/taskgenie",
      instagram: "https://instagram.com/taskgenie",
      reddit: "https://reddit.com/r/taskgenie",
      linkedIn: "https://linkedin.com/company/taskgenie",
      ox: "https://example.com/taskgenie",
      pinterest: "https://pinterest.com/taskgenie",
    },
    email: "hello@taskgenie.ai",
    url: "https://taskgenie.ai",
    payment_method: "Credit Card, PayPal",
    categories: ["productivity", "automation", "ai", "task-management"],
    category_group: "Productivity Tools",
    created_by: "user_12345",
    screenshot:
      "https://dummyimage.com/1200x800/000/fff&text=TaskGenie+Screenshot",
    ratings: 243,
    number_of_ratings: 75,
    status: "published",
  },
];
