import LoginForm from "@/components/forms/LoginForm";
import { Card } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <main className="flex flex-col gap-10 items-center justify-center min-h-screen p-5">
      <h1 className="text-5xl font-bold mb-10">Bienvenido a BeMaster Movies</h1>
      <Card className="flex flex-col gap-5 max-w-md w-full p-10 bg-default">
        <h1 className="text-4xl font-bold text-center">Iniciar sesión</h1>
        <LoginForm />
      </Card>
    </main>
  );
}
