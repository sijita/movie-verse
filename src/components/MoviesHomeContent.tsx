import MoviesCategories from "@/components/MoviesCategories";
import MoviesRow from "@/components/TrendingMovies";
import TrendingMoviesFilter from "@/components/TrendingMoviesFilter";
import { IconCategoryFilled, IconFlame } from "@tabler/icons-react";
import Link from "next/link";

export default function MoviesHomeContent({
  moviesCategories,
  trendingMovies,
}: {
  moviesCategories: {
    id: number;
    name: string;
  }[];
  trendingMovies: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
    runtime: number;
    genres: { id: number; name: string }[];
  }[];
}) {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <Link href="/movies" className="text-4xl font-bold">
          Películas
        </Link>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <IconCategoryFilled className="text-primary" size={25} />
            <h2 className="text-3xl font-semibold">Categorías</h2>
          </div>
          <p className="text-lg">
            Explora las categorías para encontrar tu próxima película favorita.
          </p>
        </div>
        <MoviesCategories categories={moviesCategories} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex items-center gap-3">
              <IconFlame className="text-primary fill-primary" size={25} />
              <h2 className="text-3xl font-semibold">Películas en tendencia</h2>
            </div>
            <TrendingMoviesFilter />
          </div>
          <p className="text-lg">
            Descubre las películas en tendencia de la semana o del día.
          </p>
        </div>
        <MoviesRow movies={trendingMovies} />
      </div>
    </section>
  );
}
