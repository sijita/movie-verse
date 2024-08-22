import MovieContentDetails from "@/components/MovieContentDetails";
import { fetchMovieDetails } from "@/api/movies";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await fetchMovieDetails(id);

  return <MovieContentDetails movie={movie} />;
}
