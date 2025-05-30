"use client"

import type { Like, Tag, UserRole } from "@prisma/client"
import { Check, ClipboardCopy } from "lucide-react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import useLike from "@/hooks/useLike"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CardContent } from "@/components/card/card-content"
import { CardDeleteBtn } from "@/components/card/card-delete-btn"
import { CardEditBtn } from "@/components/card/card-edit-btn"
import { CardHeader } from "@/components/card/card-header"
import { LikeButton } from "@/components/like-button"
import { TagDisplay } from "@/components/tag-display"

interface BoardMainCardProps {
  id: number
  title: string
  content: string
  authorId: string
  userId?: string
  createdAt: Date
  likes?: Like[]
  tags?: Tag[]
  username?: string
  approved: boolean
  role?: UserRole
}

export const BoardMainCard = ({
  id,
  title,
  content = "",
  authorId,
  userId,
  createdAt,
  likes = [],
  tags = [],
  username = "",
  approved,
  role = "USER",
}: BoardMainCardProps) => {
  const { copy, onCopySuccess } = useCopyToClipboard()

  const { isLiked, likeCount, toggleLike } = useLike(id, likes, userId)

  const createdDate = new Date(createdAt).toLocaleDateString()
  const IsAuthor = authorId === userId
  const IsAdmin = role === "ADMIN"

  return (
    <li className="relative mx-auto flex w-full min-w-72 max-w-[280px] flex-col justify-between border border-black text-xxs sm:max-w-[350px] sm:text-xs dark:border-white">
      {/* 상단 */}
      <div>
        <CardHeader
          id={id}
          title={title}
          username={username}
          createdDate={createdDate}
          approved={approved}
        />
        <div className="absolute right-2 top-2">
          <LikeButton
            isLiked={isLiked}
            likeCount={likeCount}
            onLikeClick={toggleLike}
          />
        </div>
        <Separator className="mb-2" />
      </div>

      {/* 가운데 컨텐츠 영역 */}
      <div className="flex h-full flex-col justify-between">
        <CardContent content={content} />
        <TagDisplay tags={tags} />
      </div>

      {/* 하단 */}
      <div>
        <Separator />
        <div className="mx-2 my-2 flex items-center justify-between gap-2">
          <div className="flex">
            <CopyToClipboard text={content} onCopy={onCopySuccess}>
              <Button variant="default" className="h-8 w-24">
                <ClipboardCopy />
                Copy
              </Button>
            </CopyToClipboard>
            {copy && (
              <p className="flex items-center gap-1 text-xl">
                <Check className="h-8 w-8 text-green-500" />
                복사완료
              </p>
            )}
          </div>

          {(IsAuthor || IsAdmin) && (
            <div className="flex gap-2">
              <CardEditBtn
                postId={id}
                title={title}
                content={content}
                tags={tags}
                userId={userId}
              />

              <CardDeleteBtn postId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
