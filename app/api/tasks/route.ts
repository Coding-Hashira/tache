import db from "@/db/drizzle";
import { tasks } from "@/db/schema";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await db.query.tasks.findMany({
    where: eq(tasks.userId, userId),
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Convert ISO strings to Date objects
  const formattedBody = {
    ...body,
    dueDate: body.dueDate ? new Date(body.dueDate) : null,
    createdAt: new Date(body.createdAt),
    updatedAt: new Date(body.updatedAt),
    userId,
  };

  try {
    const data = await db.insert(tasks).values(formattedBody).returning();
    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error inserting task:", error);
    return NextResponse.json(
      { error: "Failed to insert task" },
      { status: 500 }
    );
  }
}
