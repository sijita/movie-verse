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
        placeholder="example@domain.com"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        endContent={<IconMail className="text-gray-500" />}
        isRequired
        classNames={{
          input: "text-black",
          inputWrapper: "bg-white",
        }}
        labelPlacement="outside"
      />
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        label="Contraseña"
        placeholder="********"
        endContent={
          <Button
            variant="light"
            onClick={() => setShowPassword(!showPassword)}
            isIconOnly
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
          input: "text-black",
          inputWrapper: "bg-white",
        }}
        labelPlacement="outside"
      />
      <Link href="#" className="text-sm text-primary hover:underline">
        ¿Olvidaste tu contraseña?
      </Link>
      <Button
        color="primary"
        type="submit"
        className="mt-3 font-semibold text-black"
        size="md"
        fullWidth
      >
        Iniciar sesión
      </Button>
      <div className="text-sm mt-3">
        ¿No tienes una cuenta?{" "}
        <Link href="/signup" className="text-sm text-primary hover:underline">
          Registrate
        </Link>
      </div>
    </form>
  );
}
