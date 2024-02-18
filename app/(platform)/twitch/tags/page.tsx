import { TwHeader } from "../_components/tw-header"
import { TwTagList } from "./_components/tw-tag-list"

const TagsPage = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5">
      <TwHeader />
      <TwTagList />
    </div>
  )
}

export default TagsPage
