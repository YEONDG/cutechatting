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
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface TwMainPagenationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const TwMainPagenation = ({
  hasPrevPage,
  hasNextPage,
}: TwMainPagenationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const per_page = searchParams.get('per_page') ?? '6';

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button variant='ghost' disabled={!hasPrevPage}>
            <PaginationPrevious
              href={`/twitch/?page=${Number(page) - 1}&per_page=${per_page}`}
            />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/twitch/?page=${page}&per_page=${per_page}`}
            isActive
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button variant='ghost' disabled={!hasNextPage}>
            <PaginationNext
              href={`/twitch/?page=${Number(page) + 1}&per_page=${per_page}`}
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
