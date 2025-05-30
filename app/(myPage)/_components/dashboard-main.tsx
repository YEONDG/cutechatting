import { getLikePosts } from "@/apis/dashboard/dashboard"

import { TwitchPostWithLikesWithTags } from "@/types/types"
import { Skeleton } from "@/components/ui/skeleton"
import { BoardMainCard } from "@/app/(platform)/board/_components/board-main-card"

interface DashboardMainProps {
  userId: string
  page: string
}

export const DashboardMain = async ({ userId }: DashboardMainProps) => {
  const posts: TwitchPostWithLikesWithTags[] = await getLikePosts(userId)

  return (
    <div className="grid grid-cols-1 gap-4 px-4 pb-10 lg:grid-cols-2 xl:grid-cols-3">
      {posts?.map((post) => (
        <BoardMainCard
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
