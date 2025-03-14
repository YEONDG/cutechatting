import { BoardHeader } from "../_components/board-header"
import { TwTagList } from "./_components/tw-tag-list"

const TagsPage = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5">
      <BoardHeader />
      <TwTagList />
    </div>
  )
}

export default TagsPage
