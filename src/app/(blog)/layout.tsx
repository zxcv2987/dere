import Category from "@/components/Category";
import { getAllCategories } from "@/utils/category";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = getAllCategories();

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-start">
      <div className="md:sticky md:top-24 md:w-2xs">
        <Category categories={categories} />
      </div>
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
}
