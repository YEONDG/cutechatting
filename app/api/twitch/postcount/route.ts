import { NextRequest, NextResponse } from "next/server"

import { db } from "@/lib/db"

export const dynamic = "force-dynamic"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl

    const approved = searchParams.get("approved") ?? "true"

    const whereCondition = approved === "true" ? { approved: true } : {}

    const postsCount = await db.twitchPost.count({
      where: whereCondition,
    })

    return NextResponse.json(postsCount)
  } catch (error) {
    console.error("Error while counting posts:", (error as Error).message)
    throw new Error("Failed to fetch total posts count.")
  }
}
