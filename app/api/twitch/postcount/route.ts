import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const approved = searchParams.get('approved') ?? 'true';

    const whereCondition = approved === 'true' ? { approved: true } : {};

    const postsCount = await db.twitchPost.count({
      where: whereCondition,
    });

    return NextResponse.json(postsCount);
  } catch (error) {
    console.error('Error while counting posts:', (error as Error).message);
    throw new Error('Failed to fetch total posts count.');
  }
}
