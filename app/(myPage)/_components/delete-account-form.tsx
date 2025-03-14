"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { deleteAccount } from "@/apis/dashboard/dashboard"
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DeleteAccountFormProps {
  user: Pick<User, "id" | "username">
}

export const DeleteAccountForm = ({ user }: DeleteAccountFormProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [confirmation, setConfirmation] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteAccount = async () => {
    if (confirmation !== user.username) {
      toast.error("닉네임이 일치하지 않습니다.")
      return
    }

    try {
      setIsLoading(true)
      await deleteAccount()
      toast.success("계정이 성공적으로 삭제되었습니다.")
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("계정 삭제 실패:", error)
      toast.error("계정 삭제에 실패했습니다.")
    } finally {
      setIsLoading(false)
      setIsOpen(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-md border border-destructive p-4">
        <h4 className="text-lg font-medium text-destructive">위험 구역</h4>
        <p className="mt-2 text-sm text-muted-foreground">
          계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다. 이 작업은 되돌릴
          수 없습니다.
        </p>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" className="mt-4">
              계정 삭제
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>정말로 계정을 삭제하시겠습니까?</DialogTitle>
              <DialogDescription>
                이 작업은 되돌릴 수 없습니다. 모든 데이터가 영구적으로
                삭제됩니다. 계속하려면 아래에 닉네임 &quot;{user.username}
                &quot;을 입력하세요.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="confirmation">닉네임 확인</Label>
                <Input
                  id="confirmation"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  placeholder={`${user.username}`}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
              >
                취소
              </Button>
              <Button
                variant="destructive"
                onClick={handleDeleteAccount}
                disabled={isLoading || confirmation !== user.username}
              >
                {isLoading ? "처리 중..." : "계정 삭제"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
