import ContentCategory from "@/components/ContentCategory";
import { fetchMoviesByCategory } from "@/api/movies";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movies = await fetchMoviesByCategory(id);

  return <ContentCategory movies={movies} />;
}
