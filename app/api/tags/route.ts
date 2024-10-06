import db from "@/db/drizzle";
import { tags } from "@/db/schema";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await db.query.tags.findMany({
    where: eq(tags.userId, userId),
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await db
      .insert(tags)
      .values({ ...body, userId })
      .returning();
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error inserting tag:", error);
    return NextResponse.json(
      { error: "Failed to insert tag" },
      { status: 500 }
    );
  }
}
