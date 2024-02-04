'use client';

import { redirect, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useIsPopularStore } from '@/store/useIsPopularStore';

interface TwMainPagenationProps {
  postsCount: number;
  url: string;
}

export const TwMainPagenation = ({
  postsCount,
  url,
}: TwMainPagenationProps) => {
  const { isPopular } = useIsPopularStore();

  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const pageNumber = Number(page);
  const totalPage = Math.ceil(postsCount / 6);

  const startIdx = (pageNumber - 1) * 6;
  const endIdx = startIdx + 6;

  const hasNextPage = endIdx < postsCount;
  const hasPrevPage = startIdx > 0;

  if (pageNumber > totalPage) redirect(`${url}?page=${totalPage}`);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant='ghost' disabled={!hasPrevPage}>
            <PaginationPrevious
              href={`${url}?page=${pageNumber - 1}${
                isPopular ? '&popular=true' : ''
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
          <Button variant='ghost' disabled={!hasNextPage}>
            <PaginationNext
              href={`${url}?page=${pageNumber + 1}${
                isPopular ? '&popular=true' : ''
              }`}
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
const PageNumber = ({
  page,
  isActive,
  isPopular,
  url,
}: {
  page: number;
  isActive: boolean;
  isPopular: boolean;
  url: string;
}) => (
  <PaginationLink
    href={`${url}?page=${page}${isPopular ? '&popular=true' : ''}`}
    isActive={isActive}
  >
    {page}
  </PaginationLink>
);

const PageNumbers = ({
  totalPage,
  currentPage,
  isPopular,
  url,
}: {
  totalPage: number;
  currentPage: number;
  isPopular: boolean;
  url: string;
}) => {
  const pages = [];

  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPage - 1, currentPage + 1);

  const firstDots = startPage > 2 ? <PaginationEllipsis key='dots' /> : null;
  const lastDots =
    endPage < totalPage - 1 ? <PaginationEllipsis key='dots2' /> : null;

  const firstPage = (
    <PageNumber
      key={1}
      page={1}
      isActive={currentPage === 1}
      isPopular={isPopular}
      url={url}
    />
  );
  const lastPage =
    totalPage === 1 ? null : (
      <PageNumber
        key={totalPage}
        page={totalPage}
        isActive={currentPage === totalPage}
        isPopular={isPopular}
        url={url}
      />
    );
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

  return [firstPage, firstDots, ...pages, lastDots, lastPage];
};
