import Link from "next/link";
export default function Category({ categories }: { categories: string[] }) {
  return (
    <nav className="w-full pb-8">
      <div className="border border-zinc-300 w-24 hidden md:block" />
      <div className="pt-2 pl-1 flex-row md:flex-col flex flex-wrap gap-4">
        {categories.map((category) => (
          <Link key={category} href={`/category/${category}`}>
            <span className="text-lg text-zinc-600 hover:text-orange-300">
              {category}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
