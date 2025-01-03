import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded
      ? forwarded.split(",")[0].trim() 
      : request.ip || "IP não identificado";

    console.log(ip)
    return NextResponse.json({ ip });
  } catch (error) {
    return NextResponse.json({ ip: "Erro ao capturar IP." }, { status: 500 });
  }
}