import { LoginSchema } from "@/schemas/login.schema";
import { NextResponse } from "next/server";
import { ValiError, parse } from "valibot";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = parse(LoginSchema, body);

    if (email !== "admin@mail.com" || password !== "admin") {
      return NextResponse.json(
        { error: "Credenciales invalidas" },
        { status: 401 }
      );
    }

    return NextResponse.json({ user: { email } }, { status: 200 });
  } catch (error) {
    if (error instanceof ValiError) {
      return NextResponse.json(
        { error: error.issues.map((issue) => ({ message: issue.message })) },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: "Error" }, { status: 400 });
  }
}
