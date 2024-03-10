"use server";
import axios from "@/utils/axios";
import { cookies } from "next/headers";

export const fetchTrendingSeries = async () => {
  const trendingFilter = cookies().get("trendingSeries")?.value || "week";
  const fetchTrendingSeries = await axios.get(
    `/trending/tv/${trendingFilter}?language=es-ES`
  );
  const trendingSeries = fetchTrendingSeries.data.results;

  return trendingSeries;
};

export const fetchSerieDetails = async (id: string) => {
  const fetchSerieDetails = await axios.get(`/tv/${id}?language=es-ES`);
  const serie = fetchSerieDetails.data;

  return serie;
};

export const fetchSeriesCategories = async () => {
  const fetchSeriesCategories = await axios.get(
    "/genre/tv/list?language=es-ES"
  );
  const categories = fetchSeriesCategories.data.genres.slice(0, 5);

  return categories;
};

export const fetchSeriesByCategory = async (id: string) => {
  const fetchSeriesByCategory = await axios.get(
    `/discover/tv?with_genres=${id}&language=es-ES`
  );
  const series = fetchSeriesByCategory.data.results;

  return series;
};

export const fetchTopRatedSeries = async () => {
  const fetchTopRatedSeries = await axios.get(
    "/tv/top_rated?language=es-ES&page=1"
  );
  const topRatedSeries = fetchTopRatedSeries.data.results;

  return topRatedSeries;
};

export const fetchUpcomingSeries = async () => {
  const fetchUpcomingSeries = await axios.get(
    "/tv/on_the_air?language=es-ES&page=1"
  );
  const upcomingSeries = fetchUpcomingSeries.data.results;

  return upcomingSeries;
};
