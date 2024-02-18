import { NextResponse } from "next/server"
import { z } from "zod"

import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"
import { UsernameValidator } from "@/lib/validators/username"

export async function PATCH(req: Request) {
  try {
    const session = await getAuthSession()
    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { username } = UsernameValidator.parse(body)
    const name = await db.user.findFirst({
      where: {
        username,
      },
    })

    if (name) {
      return NextResponse.json("이미 존재하는 별명입니다.", { status: 409 })
    }

    await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        username,
      },
    })

    return NextResponse.json("변경 성공")
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json("Invalid request data passed", { status: 422 })
    }

    return NextResponse.json(
      "Could not update username, please try again later",
      {
        status: 500,
      }
    )
  }
}
