"use server";
import { cookies } from "next/headers";

export const handleTrendingMovieFilter = (key: string) => {
  cookies().set("trendingMovies", key);
};

export const handleTrendingSeriesFilter = (key: string) => {
  cookies().set("trendingSeries", key);
};
