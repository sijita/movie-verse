import LoginForm from "@/components/forms/LoginForm";
import { Card } from "@nextui-org/react";
import { IconMovie } from "@tabler/icons-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    return redirect("/home");
  }

  return (
    <main className="flex max-md:flex-col min-h-screen">
      <div className="py-10 px-8 flex flex-col gap-10 items-center justify-center w-full">
        <h1 className="text-5xl font-bold mb-10 text-center">
          Bienvenido a Movie Verse
        </h1>
        <h1 className="text-2xl font-semibold">Inicia sesión en tu cuenta</h1>
        <LoginForm />
      </div>
      <div className="lg:w-1/2 bg-[#BBFF29] flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Descubre el mundo del cine
          </h2>
          <p className="text-xl text-gray-800">
            Accede a información exclusiva sobre tus películas y series
            favoritas.
          </p>
          {/* Aquí puedes añadir una imagen o un componente SVG relacionado con el cine */}
          <div className="mt-8">
            {/* Placeholder para una imagen o gráfico */}
            <div className="w-64 h-64 bg-black bg-opacity-10 rounded-full mx-auto flex items-center justify-center">
              <IconMovie className="h-32 w-32 text-black" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
