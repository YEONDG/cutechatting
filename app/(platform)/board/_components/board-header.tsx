"use client"

import { useCallback } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"

export const BoardHeader = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const popularQueryString = createQueryString("popular", "true")
  const latestQueryString = createQueryString("popular", "false")

  // '최신순' 활성화 조건: /board 이고 popular 파라미터가 없거나 "false"일 때
  const isActiveLatest =
    pathname === "/board" &&
    (searchParams.get("popular") === "false" || !searchParams.has("popular"))

  // '인기순' 활성화 조건: /board 이고 popular 파라미터가 "true"일 때
  const isActivePopular =
    pathname === "/board" && searchParams.get("popular") === "true"

  const isActiveTags = pathname === "/board/tags"
  const isActiveContribute = pathname === "/board/contribute"
  const isActiveAll = pathname === "/board/all"

  // 공통 링크 스타일
  const linkBaseStyle =
    "text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:bg-gray-300 px-4 py-2 rounded-xl"
  const activeLinkStyle =
    "font-bold text-blue-600 bg-red-300 rounded-xl dark:text-blue-600"

  return (
    <div
      className="sticky top-14 z-20 flex w-full max-w-3xl  border-b
                 border-gray-200 bg-stone-200 px-2 py-2
                 sm:gap-6 sm:px-6 dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="flex w-full flex-wrap items-center sm:gap-2">
        <Link
          href={`/board?${latestQueryString}`}
          className={`${linkBaseStyle} ${isActiveLatest ? activeLinkStyle : ""}`}
        >
          최신순
        </Link>

        <Link href={`${pathname}?${popularQueryString}`}>
          <Button
            variant={isActivePopular ? "secondary" : "ghost"}
            size="sm"
            className={isActivePopular ? activeLinkStyle : linkBaseStyle}
          >
            인기순
          </Button>
        </Link>

        <Link
          href={"/board/tags"}
          className={`${linkBaseStyle} ${isActiveTags ? activeLinkStyle : ""}`}
        >
          태그
        </Link>

        <Link
          href={"/board/contribute"}
          className={`${linkBaseStyle} ${isActiveContribute ? activeLinkStyle : ""}`}
        >
          글쓰기
        </Link>

        <Link
          href={"/board/all"}
          className={`${linkBaseStyle} ${isActiveAll ? activeLinkStyle : ""}`}
        >
          비인증 게시판
        </Link>
      </div>
    </div>
  )
}
