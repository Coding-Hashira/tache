import db from "@/db/drizzle";
import { projects } from "@/db/schema";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function GET() {
  const { userId }: { userId: string | null } = await auth();
  const user = await currentUser();

  console.log(userId, user);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await db.query.projects.findMany({
    where: eq(projects.userId, userId),
  });

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { userId } = auth();

  console.log(userId);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await db
    .insert(projects)
    .values({ ...body, userId })
    .returning();

  return NextResponse.json(data[0]);
}
