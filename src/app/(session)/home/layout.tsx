import Hero from "@/components/ui/Hero";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";
import { fetchRandomMovie } from "@/api/movies";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const movie = await fetchRandomMovie();

  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Suspense fallback={<Loading />}>
        <Hero movie={movie} />
        {children}
      </Suspense>
    </main>
  );
}
