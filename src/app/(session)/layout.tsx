import Footer from "@/components/ui/Footer";
import Loading from "@/components/ui/Loading";
import NavBar from "@/components/ui/NavBar";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Suspense fallback={<Loading />}>
        <NavBar />
        {children}
        <Footer />
      </Suspense>
    </main>
  );
}
