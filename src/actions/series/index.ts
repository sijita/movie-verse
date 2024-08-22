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
