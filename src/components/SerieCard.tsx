import { Card, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function SerieCard({
  serie,
}: {
  serie: {
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
  };
}) {
  return (
    <Link
      className="flex w-80 hover:scale-95 transition-all"
      href={`/series/${serie.id}`}
    >
      <Card className="w-80 flex flex-col gap-5 p-4 rounded-2xl bg-transparent border border-[#242424]">
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
            alt={serie.name}
            className="rounded-2xl w-full h-[25rem] object-cover"
            width={500}
            height={750}
            priority
          />
          <div className="absolute top-3 left-3">
            <Chip
              radius="full"
              className="text-center font-bold bg-primary text-black shadow"
            >
              <span className="font-semibold">
                {serie.vote_average.toFixed(1)}
              </span>
            </Chip>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 h-full">
          <h3 className="uppercase font-bold text-center">{serie.name}</h3>
          <div className="text-gray-400 font-medium">
            {new Date(serie.first_air_date).toLocaleDateString("es-ES", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </div>
        </div>
      </Card>
    </Link>
  );
}
