'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TwChatComponent } from './tw-chat-component';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const TwHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleClick = () => {
    router.push(pathname + '?' + createQueryString('popular', 'true'));
  };

  return (
    <div className='flex flex-wrap gap-2 px-2'>
      <TwChatComponent />
      <Button asChild>
        <Link href={'/twitch'}>최신순</Link>
      </Button>
      <Button onClick={handleClick}>인기순</Button>
      <Button asChild>
        <Link href={'/twitch/tags'}>태그</Link>
      </Button>
      <Button asChild>
        <Link href={'/twitch/contribute'}>글쓰기</Link>
      </Button>
      <Button asChild>
        <Link href={'/twitch/all'}>인증 안된 게시판 가기</Link>
      </Button>
    </div>
  );
};
