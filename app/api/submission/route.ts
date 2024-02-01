import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { SubmissionValidator } from '@/lib/validators/submission';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = await req.json();

    const { title, content, tag } = SubmissionValidator.parse(body);

    await db.submissions.create({
      data: {
        userId: session.user.id,
        title,
        content,
        tag,
      },
    });
    return NextResponse.json('완료');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response('Invalid request data passed', { status: 422 });
    }
    return new Response('Error submitting', { status: 500 });
  }
}
