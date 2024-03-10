import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { LoginSchema } from "@/schemas/login.schema";
import { ValiError, parse } from "valibot";

export default function useLogin() {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let toastLoading: string | undefined;
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const { email, password } = parse(LoginSchema, data);
      toastLoading = toast.loading("Cargando...");

      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (result?.ok === false) {
        toast.dismiss(toastLoading);
        return toast.error("Credenciales invalidas");
      }

      toast.dismiss(toastLoading);
      toast.success("¡Bienvenido!");
      return router.push("/");
    } catch (error) {
      toast.dismiss(toastLoading);

      if (error instanceof ValiError) {
        return error.issues.map((issue) => toast.error(issue.message));
      }

      return toast.error("Error");
    }
  }

  return { onSubmit };
}
