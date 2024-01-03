import { Like, Tag, TwitchPost } from '@prisma/client';

export type TwitchPostWithLikes = TwitchPost & { likes?: Like[] };
export type TwitchPostWithLikesWithTags = TwitchPost & { likes?: Like[] } & {
  tags?: Tag[];
};

export type TwitchTagWithPostsWithPostCount = Tag & {
  posts: TwitchPost[];
  postCount: number;
};
