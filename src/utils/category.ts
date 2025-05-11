import { getAllFrontMatter } from "./post";

export function getAllCategories(): string[] {
  const allPosts = getAllFrontMatter();
  const categories = allPosts.map((post) => post.category);
  return [...new Set(categories)];
}
