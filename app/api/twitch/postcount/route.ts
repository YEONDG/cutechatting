import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const postsCount = await db.twitchPost.count();

    return NextResponse.json(postsCount);
  } catch (error) {
    console.error('Error while counting posts:', (error as Error).message);
    throw new Error('Failed to fetch total posts count.');
  }
}
