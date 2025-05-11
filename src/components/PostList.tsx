import { FrontMatterType } from "@/types/post";
import { format } from "date-fns";
import Link from "next/link";

export default function PostList({ posts }: { posts: FrontMatterType[] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-10 text-zinc-500 text-xl">
        포스트가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-100"
        >
          <Link
            href={`/post/${post.slug}`}
            className="flex flex-col justify-between h-full"
          >
            <div className="flex flex-col gap-4 p-6 h-full">
              <div className="flex flex-col gap-2 h-full">
                <span className="px-3 py-1 text-xs bg-zinc-50 text-zinc-700 rounded-full w-fit">
                  {post.category}
                </span>

                <h3 className="text-2xl font-bold text-zinc-900 line-clamp-2 hover:text-orange-300 transition duration-100">
                  {post.title}
                </h3>
                <p className="text-zinc-700">{post.description}</p>
              </div>
              {post.date && (
                <time
                  className="text-xs text-zinc-500"
                  dateTime={post.date}
                  suppressHydrationWarning
                >
                  {format(new Date(post.date), "yyyy-MM-dd")}
                </time>
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
