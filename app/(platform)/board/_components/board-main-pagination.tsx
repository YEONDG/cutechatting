"use client"

import { redirect, useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface BoardMainPaginationProps {
  postsCount: number
  url?: string
}

export const BoardMainPagination = ({
  postsCount,
  url = "/board",
}: BoardMainPaginationProps) => {
  const searchParams = useSearchParams()
  const isPopular = searchParams.get("popular") ? true : false
  const page = searchParams.get("page") ?? "1"
  const pageNumber = Number(page)
  const totalPage = Math.ceil(postsCount / 6)

  const startIdx = (pageNumber - 1) * 6
  const endIdx = startIdx + 6

  const hasNextPage = endIdx < postsCount
  const hasPrevPage = startIdx > 0

  if (pageNumber > totalPage) redirect(`${url}?page=${totalPage}`)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant="ghost" disabled={!hasPrevPage}>
            <PaginationPrevious
              href={`${url}?page=${pageNumber - 1}${
                isPopular ? "&popular=true" : ""
              }`}
            />
          </Button>
        </PaginationItem>
        
        <PageNumbers
          totalPage={totalPage}
          currentPage={pageNumber}
          isPopular={isPopular}
          url={url}
        />

        <PaginationItem>
          <Button variant="ghost" disabled={!hasNextPage}>
            <PaginationNext
              href={`${url}?page=${pageNumber + 1}${
                isPopular ? "&popular=true" : ""
              }`}
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

// 개별 페이지 번호 컴포넌트
const PageNumber = ({
  page,
  isActive,
  isPopular,
  url,
}: {
  page: number
  isActive: boolean
  isPopular: boolean
  url: string
}) => (
  <PaginationItem>
    <PaginationLink
      href={`${url}?page=${page}${isPopular ? "&popular=true" : ""}`}
      isActive={isActive}
    >
      {page}
    </PaginationLink>
  </PaginationItem>
)

// 페이지 번호 목록 컴포넌트
const PageNumbers = ({
  totalPage,
  currentPage,
  isPopular,
  url,
}: {
  totalPage: number
  currentPage: number
  isPopular: boolean
  url: string
}) => {
  // 페이지가 없는 경우 빈 배열 반환
  if (totalPage <= 0) return null;
  
  const pages = [];

  // 현재 페이지 주변 페이지 계산
  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPage - 1, currentPage + 1);

  // 첫 페이지 추가
  pages.push(
    <PageNumber
      key={1}
      page={1}
      isActive={currentPage === 1}
      isPopular={isPopular}
      url={url}
    />
  );

  // 시작 페이지가 3 이상이면 줄임표 추가
  if (startPage > 2) {
    pages.push(
      <PaginationItem key="ellipsis-1">
        <PaginationEllipsis />
      </PaginationItem>
    );
  }

  // 중간 페이지들 추가
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <PageNumber
        key={i}
        page={i}
        isActive={i === currentPage}
        isPopular={isPopular}
        url={url}
      />
    );
  }

  // 끝 페이지가 totalPage-1보다 작으면 줄임표 추가
  if (endPage < totalPage - 1) {
    pages.push(
      <PaginationItem key="ellipsis-2">
        <PaginationEllipsis />
      </PaginationItem>
    );
  }

  // 마지막 페이지가 1이 아니면 추가
  if (totalPage > 1) {
    pages.push(
      <PageNumber
        key={totalPage}
        page={totalPage}
        isActive={currentPage === totalPage}
        isPopular={isPopular}
        url={url}
      />
    );
  }

  return pages;
}
