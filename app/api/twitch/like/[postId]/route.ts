import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;

    const postIdNumber = Number(postId);

    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }
    const existingLike = await db.like.findFirst({
      where: {
        userId: session?.user.id,
        postId: postIdNumber,
      },
    });

    const post = await db.twitchPost.findUnique({
      where: {
        id: postIdNumber,
      },
      include: {
        author: true,
        likes: true,
      },
    });

    if (!post) {
      return new Response('Post not found', { status: 404 });
    }

    if (existingLike) {
      await db.like.delete({
        where: {
          id: existingLike.id,
        },
      });

      const likeCount = await db.like.findMany({
        where: {
          postId: postIdNumber,
        },
      });

      return new Response(JSON.stringify({ isLiked: false, likeCount }), {
        status: 200,
      });
    }

    await db.like.create({
      data: {
        userId: session?.user.id,
        postId: postIdNumber,
      },
    });

    const likeCount = await db.like.findMany({
      where: {
        postId: postIdNumber,
      },
    });
    return new Response(JSON.stringify({ isLiked: true, likeCount }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Internal Error', { status: 500 });
  }
}
