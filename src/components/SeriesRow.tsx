import SerieCard from "./SerieCard";

export default function SeriesRow({
  series,
}: {
  series: {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
  }[];
}) {
  return (
    <div className="flex gap-5 w-full flex-nowrap overflow-x-scroll scrollbar-hide pb-5">
      {series.map((serie, index) => (
        <SerieCard key={index} serie={serie} />
      ))}
    </div>
  );
}
