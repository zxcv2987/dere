import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 p-4 md:px-16 bg-white/60 backdrop-blur-md border-b border-zinc-200/50">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-end justify-center h-fit">
          <h1 className="text-3xl font-bold">dere</h1>
          <span className="text-xs text-zinc-500 p-1 pl-2">|</span>
          <span className="text-xs text-zinc-500 p-1">DevRecord</span>
        </Link>
      </div>
    </header>
  );
}
