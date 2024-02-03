import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get('page') ?? '1';

    if (page === '0')
      return new NextResponse('post가 없습니다!', { status: 400 });

    const popular = searchParams.get('popular') ?? 'false';

    const pageNumber = Number(page);

    if (popular === 'false') {
      const twitchPosts = await db.twitchPost.findMany({
        skip: (pageNumber - 1) * 6,
        take: 6,
        orderBy: {
          id: 'desc',
        },
        include: {
          likes: true,
          tags: true,
          author: {
            select: {
              username: true,
            },
          },
        },
      });

      return NextResponse.json(twitchPosts);
    } else if (popular === 'true') {
      const twitchPosts = await db.twitchPost.findMany({
        skip: (pageNumber - 1) * 6,
        take: 6,
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
          author: {
            select: {
              username: true,
            },
          },
        },
      });

      return NextResponse.json(twitchPosts);
    }
  } catch (error) {
    console.log('[Twitch_Posts_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
