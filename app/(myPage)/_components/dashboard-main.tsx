import { getLikePosts } from "@/apis/dashboard/dashboard"

import { TwitchPostWithLikesWithTags } from "@/types/types"
import { Skeleton } from "@/components/ui/skeleton"
import { TwMainCard } from "@/app/(platform)/twitch/_components/tw-main-card"

interface DashboardMainProps {
  userId: string
  page: string
}

export const DashboardMain = async ({ userId }: DashboardMainProps) => {
  const posts: TwitchPostWithLikesWithTags[] = await getLikePosts(userId)

  return (
    <div className="flex flex-wrap gap-4">
      {posts?.map((post) => (
        <TwMainCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorId={post.userId}
          createdAt={post.createdAt}
          userId={userId}
          likes={post.likes}
          tags={post.tags}
          approved={post.approved}
        />
      ))}
    </div>
  )
}

DashboardMain.Skeleton = function DashboardMainSkeleton() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-20">
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
    </div>
  )
}
