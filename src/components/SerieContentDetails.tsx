import { Button, Chip } from "@nextui-org/react";
import { IconHeart, IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function SerieContentDetails({
  serie,
}: {
  serie: {
    backdrop_path: string;
    first_air_date: string;
    genres: {
      id: number;
      name: string;
    }[];
    id: number;
    last_air_date: string;
    name: string;
    number_of_episodes: number;
    number_of_seasons: number;
    overview: string;
    popularity: number;
    poster_path: string;
  };
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between sm:w-[80%] gap-10 w-full mx-auto">
      <div className="flex flex-col w-full lg:w-auto items-center rounded-2xl">
        <Image
          src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
          alt={serie.name}
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
              <h1 className="sm:text-5xl text-4xl font-bold">{serie.name}</h1>
            </div>
            <p className="text-2xl">{serie.overview}</p>
          </div>
          <div className="flex flex-col p-10 rounded-2xl bg-default gap-5">
            <div className="flex flex-col sm:flex-row justify-between gap-5">
              <div className="flex flex-col gap-1 justify-start w-full">
                <span className="font-bold">Fecha de lanzamiento:</span>
                <span>
                  {new Date(serie.first_air_date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-start w-full">
                <span className="font-bold">Ultimo episodio:</span>
                <span>
                  {new Date(serie.last_air_date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-start w-full">
                <span className="font-bold">Generos:</span>
                <div className="flex flex-wrap gap-1">
                  {serie.genres.map((genre: { id: number; name: string }) => (
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
            <div className="flex flex-col sm:flex-row justify-between gap-5">
              <div className="flex flex-col gap-1 justify-start w-full">
                <span className="font-bold">Temporadas:</span>
                <span>{serie.number_of_seasons}</span>
              </div>
              <div className="flex flex-col gap-1 justify-start w-full">
                <span className="font-bold">Episodios:</span>
                <span>{serie.number_of_episodes}</span>
              </div>
              <div className="flex flex-col gap-1 justify-start w-full">
                <span className="font-bold">Popularidad:</span>
                <span>{serie.popularity}</span>
              </div>
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
            Ver serie
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
  );
}
