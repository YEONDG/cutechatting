import { Like, Tag, TwitchPost } from '@prisma/client';

export type TwitchPostWithLikes = TwitchPost & { likes?: Like[] };
export type TwitchPostWithLikesTags = TwitchPost & { likes?: Like[] } & {
  tags?: Tag[];
};
