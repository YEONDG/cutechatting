import { NextResponse } from 'next/server';
import { SubmissionValidator } from '@/lib/validators/submission';
import { db } from '@/lib/db';
import { getAuthSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    const body = await req.json();
    const safeBody = SubmissionValidator.safeParse(body);
    if (safeBody.success === false) {
      return new NextResponse('Invalid Body', { status: 400 });
    }
    const { title, content, tags } = safeBody.data;

    const createdPost = await db.twitchPost.create({
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

    return NextResponse.json({ createdPost });
  } catch (error) {
    console.log('[Twitch_Posts_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
