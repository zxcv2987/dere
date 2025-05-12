import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllFrontMatter, getPostBySlug } from "@/utils/post";
import { format } from "date-fns";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export async function generateStaticParams() {
  return getAllFrontMatter().map((post) => ({
    slug: post.slug,
  }));
}

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: {
    dark: "one-dark-pro",
    light: "github-light",
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, data } = getPostBySlug(slug);

  return (
    <article className="w-full flex flex-col gap-12">
      <section className="w-full flex flex-col gap-3 border-b border-zinc-200 pb-12">
        <span className="text-zinc-500 text-sm">
          {format(new Date(data.date), "yyyy년 MM월 dd일")}
        </span>
        <h1 className="text-5xl font-bold leading-tight mb-0">{data.title}</h1>
        <span className="text-zinc-500 text-sm">{data.category}</span>
      </section>
      <section className="w-full overflow-hidden">
        <div className="prose-container w-full max-w-full overflow-x-auto py-4">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeCodeTitles,
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    { properties: { className: ["anchor"] } },
                  ],
                  [rehypePrettyCode, prettyCodeOptions],
                ],
                format: "mdx",
              },
            }}
          />
        </div>
      </section>
    </article>
  );
}
