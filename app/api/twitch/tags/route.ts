import { NextResponse } from "next/server"
import { Tag } from "@prisma/client"

import { TwitchTagWithPostsWithPostCount } from "@/types/types"
import { db } from "@/lib/db"

export async function GET(req: Request) {
  try {
    const twitchTags = await db.tag.findMany({
      include: {
        posts: true,
      },
    })

    const twitchTagsWithPostCount: TwitchTagWithPostsWithPostCount[] =
      twitchTags.map((tag) => ({
        ...tag,
        postCount: tag.posts?.length,
      }))

    return NextResponse.json(twitchTagsWithPostCount)
  } catch (error) {
    console.log("[Twitch_Tags_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
