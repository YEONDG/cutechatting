"use client"

import { useRouter } from "next/navigation"
import { Tags } from "lucide-react" // 아이콘 임포트

import { Badge } from "./ui/badge" // shadcn/ui Badge 사용

interface TagItemProps {
  id: number
  name: string
  count?: number
  size?: "sm" | "lg" | "xl"
}

export const TagItem = ({ id, name, count, size = "lg" }: TagItemProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/board/tags/${id}`)
  }

  let iconSizeClasses = "h-4 w-4"
  let textSizeClasses = "text-sm"
  let countTextSizeClasses = "text-xs"

  if (size === "sm") {
    iconSizeClasses = "h-3.5 w-3.5"
    textSizeClasses = "text-xs"
    countTextSizeClasses = "text-[10px]"
  } else if (size === "xl") {
    iconSizeClasses = "h-5 w-5"
    textSizeClasses = "text-base"
    countTextSizeClasses = "text-sm"
  }
  // 참고: Badge 컴포넌트의 'size' prop이 내부적으로 padding과 font-size를 조절한다면,
  // 위의 textSizeClasses는 Badge의 스타일에 맞춰 중복되지 않게 조절해야 합니다.
  // 여기서는 Badge의 size prop이 없거나, 있어도 추가적인 미세 조정을 위해 사용한다고 가정합니다.

  return (
    <Badge
      variant="outline"
      onClick={handleClick}
      className={`flex 
        cursor-pointer items-center gap-1.5
        rounded-full bg-red-100 px-3 py-1.5 font-medium
        text-red-700 transition-all hover:opacity-80  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-800/70 dark:text-red-200 dark:hover:bg-red-700/90 dark:focus:ring-offset-slate-900
        ${textSizeClasses} 
      `}
    >
      <Tags className={`${iconSizeClasses}`} />
      <span>{name}</span>
      {count !== undefined && (
        <span
          className={`
            inline-flex items-center justify-center rounded-full 
            bg-white px-2 py-0.5 font-semibold leading-none text-sky-600
            dark:bg-sky-600 dark:text-sky-50
            ${countTextSizeClasses}
          `}
        >
          {count}
          <span className="ml-0.5">개</span>
        </span>
      )}
    </Badge>
  )
}
