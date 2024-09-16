import db from "@/db/drizzle";
import { projects } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await db.query.projects.findMany();

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  const data = await db
    .insert(projects)
    .values({ ...body })
    .returning();

  return NextResponse.json(data[0]);
}
