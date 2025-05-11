import PostList from "@/components/PostList";
import { getAllCategories } from "@/utils/category";
import { getFrontMatterByCategory } from "@/utils/post";

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const frontMatters = getFrontMatterByCategory((await params).category);
  return <PostList posts={frontMatters} />;
}
