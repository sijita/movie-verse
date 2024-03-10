import { IconCategoryFilled, IconFlame } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import SeriesCategories from "./SeriesCategories";
import SeriesRow from "./SeriesRow";
import TrendingSeriesFilter from "./TrendingSeriesFilter";

export default function SeriesHomeContent({
  seriesCategories,
  trendingSeries,
}: {
  seriesCategories: {
    id: number;
    name: string;
  }[];
  trendingSeries: {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
  }[];
}) {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <Link href="/series" className="text-4xl font-bold">
            Series
          </Link>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <IconCategoryFilled className="text-primary" size={25} />
              <h2 className="text-3xl font-semibold">Categorías</h2>
            </div>
            <p className="text-lg">
              Explora las categorías para encontrar tu próxima serie favorita.
            </p>
          </div>
          <SeriesCategories categories={seriesCategories} />
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex items-center gap-3">
              <IconFlame className="text-primary fill-primary" size={25} />
              <h2 className="text-3xl font-semibold">Series en tendencia</h2>
            </div>
            <TrendingSeriesFilter />
          </div>
          <p className="text-lg">
            Descubre las series en tendencia de la semana o del día.
          </p>
        </div>
        <SeriesRow series={trendingSeries} />
      </div>
    </section>
  );
}
