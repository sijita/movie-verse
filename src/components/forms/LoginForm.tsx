"use client";
import { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { IconEye, IconEyeClosed, IconMail } from "@tabler/icons-react";
import useLogin from "@/hooks/useLogin";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { onSubmit } = useLogin();

  return (
    <form
      action="/api/auth/callback/credentials"
      method="post"
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-3 w-full max-w-md"
    >
      <Input
        type="email"
        name="email"
        label="Correo electrónico"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        endContent={<IconMail className="text-gray-500" />}
        isRequired
        classNames={{
          input: "text-white font-semibold",
          inputWrapper: "bg-black",
        }}
      />
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        label="Contraseña"
        endContent={
          <Button
            color="primary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IconEyeClosed color="black" />
            ) : (
              <IconEye color="black" />
            )}
          </Button>
        }
        isRequired
        classNames={{
          input: "text-white font-semibold",
          inputWrapper: "bg-black",
        }}
      />
      <Link href="#" className="text-sm text-primary hover:underline">
        ¿Olvidaste tu contraseña?
      </Link>
      <Button
        color="primary"
        type="submit"
        className="mt-3 font-semibold text-black"
        size="lg"
        fullWidth
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
