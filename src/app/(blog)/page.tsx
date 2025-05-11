import PostList from "@/components/PostList";
import { getAllFrontMatter } from "@/utils/post";

export default function Blog() {
  const posts = getAllFrontMatter();
  return <PostList posts={posts} />;
}
