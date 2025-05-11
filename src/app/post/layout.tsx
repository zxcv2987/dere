"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-3xl pt-12 md:pt-0">{children}</div>

      <div className="absolute left-4 md:left-0 top-0">
        <div className="sticky top-24">
          <Link
            href={"/"}
            className="text-zinc-500 hover:text-zinc-700 whitespace-nowrap"
            onClick={() => router.back()}
          >
            ← 이전으로
          </Link>
        </div>
      </div>
    </div>
  );
}
