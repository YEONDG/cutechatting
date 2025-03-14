import { getAuthSession } from "@/lib/auth"
import { BoardForm } from "@/app/(platform)/board/contribute/_components/board-form"

const ContributePage = async () => {
  const session = await getAuthSession()

  return (
    <div className="container flex flex-col">
      <div className="flex flex-col pb-10">
        <h1 className="py-2 text-2xl font-bold">게시판에 기여하기</h1>
        <p className="text-sm text-slate-500">
          게시글 작성해주시면 검토 후에 게시판에 올려드립니다.!
        </p>
      </div>

      <div className="max-w-2xl">
        <BoardForm userId={session?.user.id} />
      </div>
    </div>
  )
}

export default ContributePage
