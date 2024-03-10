import {
  fetchSeriesCategories,
  fetchTopRatedSeries,
  fetchTrendingSeries,
  fetchUpcomingSeries,
} from "@/actions/series";
import {
  IconCategoryFilled,
  IconFlame,
  IconThumbUpFilled,
  IconTicket,
} from "@tabler/icons-react";
import TrendingSeriesFilter from "@/components/TrendingSeriesFilter";
import SeriesRow from "@/components/SeriesRow";
import SeriesCategories from "@/components/SeriesCategories";

export default async function Page() {
  const categories = await fetchSeriesCategories();
  const trendingSeries = await fetchTrendingSeries();
  const topRatedSeries = await fetchTopRatedSeries();
  const upcomingSeries = await fetchUpcomingSeries();

  return (
    <main className="flex flex-col gap-20">
      <h1 className="text-4xl font-bold text-center">Series</h1>
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
      <section className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-wrap justify-between gap-2">
            <div className="flex items-center gap-3">
              <IconFlame className="text-primary fill-primary" size={25} />
              <h2 className="text-3xl font-semibold">Series en tendencia</h2>
            </div>
            <TrendingSeriesFilter />
          </div>
          <p className="text-lg">
            Descubre las series en tendencia de la semana o del día.
          </p>
        </div>
        <SeriesRow series={trendingSeries} />
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center gap-3">
            <IconThumbUpFilled className="text-primary" size={25} />
            <h2 className="text-3xl font-semibold">Series más votadas</h2>
          </div>
          <p className="text-lg">
            Descubre las series más votadas por la comunidad.
          </p>
        </div>
        <SeriesRow series={topRatedSeries} />
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center gap-3">
            <IconTicket className="text-primary fill-primary" size={25} />
            <h2 className="text-3xl font-semibold">Proximas series</h2>
          </div>
          <p className="text-lg">
            Descubre las series que se estrenarán próximamente.
          </p>
        </div>
        <SeriesRow series={upcomingSeries} />
      </section>
    </main>
  );
}
