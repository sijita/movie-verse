import { Divider } from "@nextui-org/react";
import MoviesHomeContent from "@/components/MoviesHomeContent";
import SeriesHomeContent from "@/components/SeriesHomeContent";
import { fetchMoviesCategories } from "@/api/movies";
import { fetchTrendingMovies } from "@/actions/movies";
import { fetchTrendingSeries } from "@/actions/series";
import { fetchSeriesCategories } from "@/api/series";

export default async function Page() {
  const moviesCategories = await fetchMoviesCategories();
  const seriesCategories = await fetchSeriesCategories();
  const trendingMovies = await fetchTrendingMovies();
  const trendingSeries = await fetchTrendingSeries();

  return (
    <main className="flex flex-col gap-20 p-10 sm:p-20">
      <MoviesHomeContent
        moviesCategories={moviesCategories}
        trendingMovies={trendingMovies}
      />
      <Divider className="bg-primary" />
      <SeriesHomeContent
        seriesCategories={seriesCategories}
        trendingSeries={trendingSeries}
      />
    </main>
  );
}
