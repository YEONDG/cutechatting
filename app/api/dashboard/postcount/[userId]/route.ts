import { NextResponse } from "next/server"

import { db } from "@/lib/db"

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params
    const postsCount = await db.twitchPost.count({
      where: {
        likes: {
          some: {
            userId: userId,
          },
        },
      },
    })

    return NextResponse.json(postsCount)
  } catch (error) {
    console.error("Error while counting posts:", (error as Error).message)
    throw new Error("Failed to fetch total posts count.")
  }
}
