'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TwChatComponent } from './tw-chat-component';
import { useIsPopularStore } from '@/store/useIsPopularStore';

export const TwHeader = () => {
  const { isPopular, setIsPopular } = useIsPopularStore();

  const toggleIsPopular = () => {
    setIsPopular(!isPopular);
    setTimeout(() => {
      setIsPopular(false);
    }, 1000);
  };

  const popularLink = isPopular ? '/twitch' : '/twitch?popular=true';

  return (
    <div className='flex flex-wrap gap-2 mx-2'>
      <TwChatComponent />
      <Button asChild>
        <Link href={'/twitch'}>최신순</Link>
      </Button>
      <Button
        variant={isPopular ? 'outline' : 'default'}
        onClick={toggleIsPopular}
        asChild
      >
        <Link href={popularLink}>인기순</Link>
      </Button>
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
