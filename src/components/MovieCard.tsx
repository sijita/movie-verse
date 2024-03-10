import { Card, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({
  movie,
}: {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  };
}) {
  return (
    <Link className="flex w-80" href={`/movies/${movie.id}`}>
      <Card className="w-80 flex flex-col gap-5 p-4 rounded-2xl bg-transparent border border-default">
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
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
                {movie.vote_average.toFixed(1)}
              </span>
            </Chip>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 h-full">
          <h3 className="uppercase font-bold text-center">{movie.title}</h3>
          <div className="text-gray-400 font-medium">
            {new Date(movie.release_date).toLocaleDateString("es-ES", {
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
