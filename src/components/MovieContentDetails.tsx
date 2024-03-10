import { Button, Chip } from "@nextui-org/react";
import { IconHeart, IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function MovieContentDetails({
  movie,
}: {
  movie: {
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
    runtime: number;
    genres: { id: number; name: string }[];
  };
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between sm:w-[80%] gap-10 w-full mx-auto">
      <div className="flex flex-col w-full lg:w-auto items-center rounded-2xl">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="rounded-2xl object-contain lg:w-96 h-full"
          width={500}
          height={750}
          priority
        />
      </div>
      <div className="flex flex-col gap-5 lg:w-2/3">
        <div className="flex flex-col h-full justify-between gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-5">
              <h1 className="sm:text-5xl text-4xl font-bold">{movie.title}</h1>
              <Chip
                radius="full"
                className="px-3 py-2 bg-primary text-black shadow"
              >
                <span className="font-semibold">
                  {movie.vote_average.toFixed(1)}
                </span>
              </Chip>
            </div>
            <p className="text-2xl">{movie.overview}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-5 p-10 rounded-2xl bg-default">
            <div className="flex flex-col gap-1 justify-start w-full">
              <span className="font-bold">Fecha de lanzamiento:</span>
              <span>
                {new Date(movie.release_date).toLocaleDateString("es-ES")}
              </span>
            </div>
            <div className="flex flex-col gap-1 justify-start w-full">
              <span className="font-bold">Duración:</span>
              <span>{movie.runtime} min</span>
            </div>
            <div className="flex flex-col gap-1 justify-start w-full">
              <span className="font-bold">Generos:</span>
              <div className="flex flex-wrap gap-1">
                {movie.genres.map((genre: { id: number; name: string }) => (
                  <Chip
                    size="sm"
                    className="bg-primary text-black"
                    key={genre.id}
                  >
                    {genre.name}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <Button
              className="text-md px-8 py-5 text-black font-semibold"
              radius="full"
              color="primary"
              variant="shadow"
              endContent={<IconPlayerPlayFilled size={15} />}
            >
              Ver pelicula
            </Button>
            <div className="flex gap-3">
              <Button
                className="w-full sm:w-auto text-md px-8 py-5"
                radius="full"
              >
                Ver trailer
              </Button>
              <Button variant="flat" radius="full" isIconOnly>
                <IconHeart size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
