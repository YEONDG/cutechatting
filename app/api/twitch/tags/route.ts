import { db } from '@/lib/db';
import { Tag } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const twitchTags = await db.tag.findMany({
      include: {
        posts: true,
      },
    });

    const twitchTagsWithPostCount = twitchTags.map((tag: Tag) => ({
      ...tag,
      postCount: tag.posts.length,
    }));

    return NextResponse.json(twitchTagsWithPostCount);
  } catch (error) {
    console.log('[Twitch_Tags_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
