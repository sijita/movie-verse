export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen p-10 sm:p-20 flex flex-col gap-10">
      {children}
    </main>
  );
}
