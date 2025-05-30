import { BoardHeader } from "../_components/board-header"
import { TagList } from "./_components/tag-list"

const TagsPage = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5">
      <BoardHeader />
      <TagList />
    </div>
  )
}

export default TagsPage
