import { NextResponse } from "next/server"

import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"

export async function DELETE(req: Request) {
  try {
    const session = await getAuthSession()
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "인증되지 않은 사용자입니다." },
        { status: 401 }
      )
    }

    // 사용자 관련 데이터 삭제
    // 1. 좋아요 삭제
    await db.like.deleteMany({
      where: {
        userId: session.user.id,
      },
    })

    // 2. 사용자가 작성한 게시글 삭제
    await db.twitchPost.deleteMany({
      where: {
        userId: session.user.id,
      },
    })

    // 3. 사용자 계정 삭제
    await db.user.delete({
      where: {
        id: session.user.id,
      },
    })

    return NextResponse.json(
      { message: "계정이 성공적으로 삭제되었습니다." },
      { status: 200 }
    )
  } catch (error) {
    console.error("계정 삭제 중 오류 발생:", error)
    return NextResponse.json(
      { error: "계정 삭제 중 오류가 발생했습니다." },
      { status: 500 }
    )
  }
}