import { db } from '@/lib/db';
import { absoluteUrl } from '@/lib/utils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const twitchApprovedPageCount = Math.ceil(
    (await db.twitchPost.count({
      where: {
        approved: true,
      },
    })) / 6
  );
  const twitchPageCount = Math.ceil((await db.twitchPost.count()) / 6);

  const twitchApprovedRoutes = Array.from(
    { length: twitchApprovedPageCount },
    (_, index) => index + 1
  ).map((page) => ({
    url: absoluteUrl(`/twitch?page=${page}`),
    lastModified: new Date().toISOString(),
  }));

  const twitchRoutes = Array.from(
    { length: twitchPageCount },
    (_, index) => index + 1
  ).map((page) => ({
    url: absoluteUrl(`/twitch/all?page=${page}`),
    lastModified: new Date().toISOString(),
  }));

  const routes = [
    '',
    '/twitch',
    '/twitch/tags',
    '/twitch/contribute',
    '/twitch/all',
    '/chzzk',
    '/afreeca',
    '/dashboard',
    '/sign-in',
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString(),
    priority: 1,
  }));
  return [...routes, ...twitchRoutes, ...twitchApprovedRoutes];
}
