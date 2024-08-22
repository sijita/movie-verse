import { fetchSeriesByCategory } from "@/api/series";
import ContentCategory from "@/components/ContentCategory";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const series = await fetchSeriesByCategory(id);

  return <ContentCategory series={series} />;
}
