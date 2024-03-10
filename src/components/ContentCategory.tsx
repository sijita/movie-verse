import MovieCard from "./MovieCard";
import SerieCard from "./SerieCard";

export default function ContentCategory({
  movies,
  series,
}: {
  movies?: any[];
  series?: any[];
}) {
  return (
    <div className="flex gap-5 w-full flex-nowrap overflow-x-scroll scrollbar-hide pb-5">
      {movies &&
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      {series &&
        series.map((serie, index) => <SerieCard key={index} serie={serie} />)}
    </div>
  );
}
