import { getTwitchTagList } from "@/apis/twitch/post"

import { TwitchTagWithPostsWithPostCount } from "@/types/types"
import { TagItem } from "@/components/tag-item"

export const TagList = async () => {
  const tags: TwitchTagWithPostsWithPostCount[] = await getTwitchTagList()
  return (
    <div className="mx-2 flex max-w-3xl flex-wrap gap-2 sm:gap-4">
      {tags.map((tag) => (
        <TagItem
          key={tag.id}
          id={tag.id}
          name={tag.name}
          count={tag.postCount}
          size="lg"
        />
      ))}
    </div>
  )
}
