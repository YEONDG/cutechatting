import { getTagWithId } from "@/apis/twitch/post"

import { getAuthSession } from "@/lib/auth"
import { TwHeader } from "@/app/(platform)/twitch/_components/tw-header"

import { TwMainCard } from "../../_components/tw-main-card"

const TagIdPage = async ({ params }: { params: { id: string } }) => {
  const session = await getAuthSession()
  const userId = session?.user.id
  const tag = await getTagWithId(params.id)

  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5">
      <TwHeader />
      <div className="flex flex-col justify-center">
        <div className="grid h-full w-full grid-cols-1 gap-4 px-20 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {tag?.map((post) => (
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
              username={post.author.username}
              approved={post.approved}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TagIdPage
