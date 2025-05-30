import { getTotalPostsCount, getTwitchPosts } from "@/apis/twitch/post"

import { getAuthSession } from "@/lib/auth"
import { Skeleton } from "@/components/ui/skeleton"
import { BoardMainCard } from "@/app/(platform)/board/_components/board-main-card"
import { BoardMainPagination } from "@/app/(platform)/board/_components/board-main-pagination"

interface BoardAllMainProps {
  page: string
}

export const BoardAllMain = async ({ page }: BoardAllMainProps) => {
  const session = await getAuthSession()
  const userId = session?.user.id

  const postsCount = getTotalPostsCount()
  const postsData = getTwitchPosts(page, false, false)

  const [totalPostsCount, posts] = await Promise.all([postsCount, postsData])
  return (
    <div className="flex flex-col justify-center">
      <div className="grid h-full w-full grid-cols-1 gap-4 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
        {posts?.map((post) => (
          <BoardMainCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorId={post.userId}
            userId={userId}
            createdAt={post.createdAt}
            likes={post.likes}
            tags={post.tags}
            username={post.author.username}
            approved={post.approved}
            role={session?.user.role}
          />
        ))}
      </div>
      <div className="p-10">
        <BoardMainPagination
          postsCount={totalPostsCount}
          url={"/board/all"}
          page={page}
        />
      </div>
    </div>
  )
}

BoardAllMain.Skeleton = function BoardMainSkeleton() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
      <Skeleton className="aspect-video h-[506px] w-[350px]" />
    </div>
  )
}
