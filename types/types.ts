import { Like, TwitchPost } from '@prisma/client';

export type TwitchPostWithLikes = TwitchPost & { likes?: Like[] };
