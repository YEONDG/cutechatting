import { NextResponse } from 'next/server';
import {
  EditSubmissionValidator,
  SubmissionValidator,
} from '@/lib/validators/submission';
import { db } from '@/lib/db';
import { getAuthSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const body = await req.json();

    if (!session)
      return new NextResponse('로그인이 필요합니다.', { status: 401 });

    const safeBody = SubmissionValidator.safeParse(body);

    if (safeBody.success === false) {
      return new NextResponse('타입에러가 발생했습니다.', { status: 400 });
    }

    const { title, content, tags } = safeBody.data;

    await db.twitchPost.create({
      data: {
        author: {
          connect: {
            id: session?.user.id,
          },
        },
        title,
        content,
        tags: {
          connectOrCreate: tags?.map((tag) => ({
            where: { name: tag.tag },
            create: { name: tag.tag },
          })),
        },
      },
    });

    return NextResponse.json('게시글 작성 성공');
  } catch (error) {
    console.log('[Twitch_Posts_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session)
      return new NextResponse('로그인이 필요합니다.', { status: 401 });

    const body = await req.json();

    const safeBody = EditSubmissionValidator.safeParse(body);

    if (safeBody.success === false) {
      return new NextResponse('타입에러가 발생했습니다.', { status: 400 });
    }
    const { postId, title, content, tags } = safeBody.data;

    await db.twitchPost.update({
      where: { id: postId },
      data: {
        title,
        content,
        tags: {
          connectOrCreate: tags?.map((tag) => ({
            where: { name: tag.tag },
            create: { name: tag.tag },
          })),
        },
      },
    });

    return NextResponse.json('게시글 수정 성공');
  } catch (error) {
    console.log('[Twitch_Posts_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session)
      return new NextResponse('로그인이 필요합니다.', { status: 401 });

    const { id } = await req.json();

    await db.twitchPost.delete({
      where: { id },
    });

    return NextResponse.json('게시글 삭제 성공');
  } catch (error) {
    console.log('[Twitch_Posts_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
