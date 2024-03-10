import { fetchSeriesCategories } from "@/actions/series";
import SeriesCategories from "@/components/SeriesCategories";
import { IconCategoryFilled } from "@tabler/icons-react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchSeriesCategories();
  return (
    <main className="flex flex-col gap-10">
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <IconCategoryFilled className="text-primary" size={25} />
            <h2 className="text-3xl font-semibold">Categorías</h2>{" "}
          </div>
          <p className="text-lg">
            Explora las categorías para encontrar tu próxima serie favorita.
          </p>
        </div>
        <SeriesCategories categories={categories} />
      </section>
      {children}
    </main>
  );
}
