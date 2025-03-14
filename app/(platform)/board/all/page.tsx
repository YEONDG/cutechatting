import { BoardAllHeader } from "@/app/(platform)/board/all/_components/board-all-header"
import { BoardAllMain } from "@/app/(platform)/board/all/_components/board-all-main"

const BoardAllPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const page = searchParams["page"] ?? "1"
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5">
      <BoardAllHeader />
      <BoardAllMain page={page} />
    </div>
  )
}

export default BoardAllPage
