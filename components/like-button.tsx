import { ThumbsUp } from "lucide-react"

import { Button } from "./ui/button"

interface LikeButtonProps {
  isLiked: boolean
  likeCount: number
  onLikeClick: () => void
}

export const LikeButton = ({
  isLiked,
  likeCount,
  onLikeClick,
}: LikeButtonProps) => {
  return (
    <Button
      onClick={onLikeClick}
      className={`flex items-center gap-2 rounded-xl px-3 ${
        isLiked
          ? "bg-primary text-white"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
    >
      <ThumbsUp className="h-6 w-6" />
      <span>{likeCount}</span>
    </Button>
  )
}
