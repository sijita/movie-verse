import MoviesCategories from "@/components/MoviesCategories";
import MoviesRow from "@/components/TrendingMovies";
import TrendingMoviesFilter from "@/components/TrendingMoviesFilter";
import {
  fetchMoviesCategories,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "@/api/movies";
import {
  IconCategoryFilled,
  IconFlame,
  IconThumbUpFilled,
  IconTicket,
} from "@tabler/icons-react";
import { fetchTrendingMovies } from "@/actions/movies";

export default async function Page() {
  const categories = await fetchMoviesCategories();
  const topRatedMovies = await fetchTopRatedMovies();
  const trendingMovies = await fetchTrendingMovies();
  const upcomingMovies = await fetchUpcomingMovies();

  return (
    <main className="flex flex-col gap-20">
      <h1 className="text-4xl font-bold text-center">Películas</h1>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <IconCategoryFilled className="text-primary" size={25} />
            <h2 className="text-3xl font-semibold">Categorías</h2>{" "}
          </div>
          <p className="text-lg">
            Explora las categorías para encontrar tu próxima película favorita.
          </p>
        </div>
        <MoviesCategories categories={categories} />
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-wrap justify-between gap-2">
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
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center gap-3">
            <IconThumbUpFilled className="text-primary" size={25} />
            <h2 className="text-3xl font-semibold">Películas más votadas</h2>
          </div>
          <p className="text-lg">
            Descubre las películas más votadas por la comunidad.
          </p>
        </div>
        <MoviesRow movies={topRatedMovies} />
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center gap-3">
            <IconTicket className="text-primary fill-primary" size={25} />
            <h2 className="text-3xl font-semibold">Proximas películas</h2>
          </div>
          <p className="text-lg">Películas que se estrenarán pronto.</p>
        </div>
        <MoviesRow movies={upcomingMovies} />
      </section>
    </main>
  );
}
