import { useRouter } from "next/navigation"
import { deleteTwitchPost } from "@/apis/twitch/post"
import { TrashIcon } from "lucide-react"
import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface CardDeleteBtn {
  postId: number
}

export const CardDeleteBtn = ({ postId }: CardDeleteBtn) => {
  const router = useRouter()

  const handleDelete = async (postId: number) => {
    try {
      const response = await deleteTwitchPost(postId)
      toast.success(response)
      router.refresh()
    } catch (err) {
      if (err instanceof Error) {
        toast.error("게시글 작성 실패 " + err.message)
      }
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <TrashIcon className="hover:scale-125 hover:cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(postId)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
