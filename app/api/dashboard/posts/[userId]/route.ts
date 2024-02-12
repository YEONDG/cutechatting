import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;

    if (!userId) return new NextResponse('userId가 없습니다!', { status: 400 });

    const twitchPosts = await db.twitchPost.findMany({
      where: {
        likes: {
          some: {
            userId,
          },
        },
      },
      orderBy: [
        {
          likes: {
            _count: 'desc',
          },
        },
        {
          id: 'desc',
        },
      ],
      include: {
        likes: true,
        tags: true,
      },
    });

    return NextResponse.json(twitchPosts);
  } catch (error) {
    console.log('[Twitch_Posts_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
