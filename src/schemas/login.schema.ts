import { object, email, minLength, string } from "valibot";

export const LoginSchema = object({
  email: string([email("El correo electrónico es invalido")]),
  password: string([minLength(1, "La contraseña es requerida")]),
});
