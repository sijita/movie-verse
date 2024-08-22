"use server";
import axios from "@/utils/axios";
import { cookies } from "next/headers";

export const fetchTrendingMovies = async () => {
  const trendingFilter = cookies().get("trendingMovies")?.value || "week";
  const fetchPopularMovies = await axios.get(
    `trending/movie/${trendingFilter}?language=es-ES`
  );
  const popularMovies = fetchPopularMovies.data.results;

  return popularMovies;
};
