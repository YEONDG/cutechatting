import { redirect } from "next/navigation"

import { getAuthSession } from "@/lib/auth"
import { Separator } from "@/components/ui/separator"

import { DeleteAccountForm } from "../../_components/delete-account-form"

const DeleteAccountPage = async () => {
  const session = await getAuthSession()

  if (!session) {
    redirect("/sign-in")
  }
  
  return (
    <section className="w-full">
      <div>
        <h3 className="text-2xl">회원 탈퇴</h3>
        <p className="text-muted-foreground mt-2">
          계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.
        </p>
      </div>
      <Separator className="my-4" />
      <DeleteAccountForm user={session.user} />
    </section>
  )
}

export default DeleteAccountPage