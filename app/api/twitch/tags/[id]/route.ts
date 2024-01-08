import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,

  { params }: { params: { id: string } }
) {
  try {
    const tagId = Number(params.id);

    const twitchTag = await db.twitchPost.findMany({
      where: {
        tags: {
          some: {
            id: tagId,
          },
        },
      },
      include: {
        likes: true,
        tags: true,
      },
    });

    return NextResponse.json(twitchTag);
  } catch (error) {
    console.log('[Twitch_Tags_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
