import ContentCategory from "@/components/ContentCategory";
import { fetchSeriesByCategory } from "@/actions/series";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const series = await fetchSeriesByCategory(id);

  return <ContentCategory series={series} />;
}
