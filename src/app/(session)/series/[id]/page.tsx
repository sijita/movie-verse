import { fetchSerieDetails } from "@/api/series";
import SerieContentDetails from "@/components/SerieContentDetails";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const serie = await fetchSerieDetails(id);

  return <SerieContentDetails serie={serie} />;
}
