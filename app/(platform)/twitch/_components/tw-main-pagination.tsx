'use client';
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
import { redirect, useRouter, useSearchParams } from 'next/navigation';

interface TwMainPagenationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  postsCount: number;
}

export const TwMainPagenation = ({
  hasPrevPage,
  hasNextPage,
  postsCount,
}: TwMainPagenationProps) => {
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';

  const numPage = Number(page);

  const totalPage = Math.ceil(postsCount / 6);

  if (numPage > totalPage) {
    redirect('/twitch?page=1');
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant='ghost' disabled={!hasPrevPage}>
            <PaginationPrevious href={`/twitch/?page=${numPage - 1}`} />
          </Button>
        </PaginationItem>
        <PageNumbers totalPage={totalPage} currentPage={numPage} />

        <PaginationItem>
          <Button variant='ghost' disabled={!hasNextPage}>
            <PaginationNext href={`/twitch/?page=${numPage + 1}`} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
const PageNumber = ({
  page,
  isActive,
}: {
  page: number;
  isActive: boolean;
}) => (
  <PaginationLink href={`/twitch/?page=${page}`} isActive={isActive}>
    {page}
  </PaginationLink>
);

const PageNumbers = ({
  totalPage,
  currentPage,
}: {
  totalPage: number;
  currentPage: number;
}) => {
  const firstPage = (
    <PageNumber key={1} page={1} isActive={currentPage === 1} />
  );
  const lastPage = (
    <PageNumber
      key={totalPage}
      page={totalPage}
      isActive={currentPage === totalPage}
    />
  );
  const pages = [];

  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPage - 1, currentPage + 1);

  const firstDots = startPage > 2 ? <PaginationEllipsis key='dots' /> : null;
  const lastDots =
    endPage < totalPage - 1 ? <PaginationEllipsis key='dots2' /> : null;

  for (let i = startPage; i <= endPage; i++) {
    pages.push(<PageNumber key={i} page={i} isActive={i === currentPage} />);
  }

  return [firstPage, firstDots, ...pages, lastDots, lastPage];
};
