import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllFrontMatter, getPostBySlug } from "@/utils/post";
import { format } from "date-fns";
import { useMDXComponents } from "@/mdx-component";

// MDX 컨텐츠를 위한 래퍼 컴포넌트
function MDXContent({ content }: { content: string }) {
  const components = useMDXComponents({});
  return <MDXRemote source={content} components={components} />;
}

export async function generateStaticParams() {
  return getAllFrontMatter().map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content, data } = getPostBySlug(slug);

  return (
    <article className="w-full flex flex-col gap-8">
      <section className="w-full flex flex-col gap-2">
        <span className="text-zinc-500 text-sm">
          {format(new Date(data.date), "yyyy년 MM월 dd일")}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {data.title}
        </h1>
        <span className="text-zinc-500 text-sm">{data.category}</span>
      </section>
      <section className="w-full overflow-hidden">
        <div className="prose-container w-full max-w-full overflow-x-auto py-4">
          <MDXContent content={content} />
        </div>
      </section>
    </article>
  );
}
