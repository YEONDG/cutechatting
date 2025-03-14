import { MetadataRoute } from "next"

import { db } from "@/lib/db"
import { absoluteUrl } from "@/lib/utils"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const boardApprovedPageCount = Math.ceil(
    (await db.twitchPost.count({
      where: {
        approved: true,
      },
    })) / 6
  )
  const boardPageCount = Math.ceil((await db.twitchPost.count()) / 6)

  const boardApprovedRoutes = Array.from(
    { length: boardApprovedPageCount },
    (_, index) => index + 1
  ).map((page) => ({
    url: absoluteUrl(`/board?page=${page}`),
    lastModified: new Date().toISOString(),
  }))

  const boardRoutes = Array.from(
    { length: boardPageCount },
    (_, index) => index + 1
  ).map((page) => ({
    url: absoluteUrl(`/board/all?page=${page}`),
    lastModified: new Date().toISOString(),
  }))

  const routes = [
    "",
    "/board",
    "/board/tags",
    "/board/contribute",
    "/board/all",
    "/dashboard",
    "/sign-in",
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString(),
    priority: 1,
  }))
  return [...routes, ...boardRoutes, ...boardApprovedRoutes]
}
