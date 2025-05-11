import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FrontMatterType, PostType } from "@/types/post";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllFrontMatter(): FrontMatterType[] {
  const fullPath = fs.readdirSync(postsDirectory);

  return fullPath
    .map((fileName) => {
      const file = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const matterData = matter(file);
      return {
        slug: fileName.replace(/\.mdx?$/, ""),
        title: matterData.data.title,
        date: matterData.data.date,
        category: matterData.data.category,
        tags: matterData.data.tags,
        description: matterData.data.description,
        ...matterData.data,
      };
    })
    .sort((a, b) => (new Date(b.date) < new Date(a.date) ? -1 : 1));
}

export function getFrontMatterByCategory(category: string): FrontMatterType[] {
  const allPosts = getAllFrontMatter();
  return allPosts.filter((post) => post.category === category);
}

export function getPostBySlug(slug: string): PostType {
  const postPath = path.join(process.cwd(), "src/posts", `${slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    notFound();
  }

  const postContent = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(postContent);
  return { content, data: data as FrontMatterType };
}
