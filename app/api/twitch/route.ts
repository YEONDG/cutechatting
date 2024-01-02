import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get('page') ?? '1';

    const pageNumber = Number(page);

    const twitchPosts = await db.twitchPost.findMany({
      skip: (pageNumber - 1) * 6,
      take: 6,
      orderBy: {
        id: 'desc',
      },
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
