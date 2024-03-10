"use client";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-3xl">Something went wrong!</h2>
      <Button color="primary" onPress={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
