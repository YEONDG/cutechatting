import { BoardHeader } from "./_components/board-header"
import { BoardMain } from "./_components/board-main"

export const dynamic = "force-dynamic"
const BoardPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const page = searchParams["page"] ?? "1"
  const popular = searchParams["popular"] === "true"

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <BoardHeader />
      <BoardMain page={page} popular={popular} />
    </div>
  )
}

export default BoardPage
