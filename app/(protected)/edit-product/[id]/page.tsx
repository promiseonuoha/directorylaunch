import Form from "./components/form";
// import NewsLetter from "@/components/application/news-letter";
// import pb from "@/lib/pocketbase";
// import { CategoriesCollection, CategoryGroupCollection } from "@/types/schema";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  // const categoryGroups: CategoryGroupCollection[] =
  //   (await pb
  //     .collection("category_groups")
  //     .getFullList({ requestKey: null })) || [];
  // const allCategories: CategoriesCollection[] =
  //   (await pb.collection("categories").getFullList({ requestKey: null })) || [];
  return (
    <>
      <Form
      // allCategories={allCategories}
      // id={id || ""}
      // categoryGroups={categoryGroups}
      />
    </>
  );
}
