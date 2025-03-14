import Link from "next/link"

import { Button } from "@/components/ui/button"

export const BoardAllHeader = () => {
  return (
    <div>
      <Button>
        <Link href={"/board"}>인증게시판 돌아가기</Link>
      </Button>
    </div>
  )
}
