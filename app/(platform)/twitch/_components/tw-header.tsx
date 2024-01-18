'use client';
import React from 'react';
import { TwChatComponent } from './tw-chat-component';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useIsPopularStore } from '@/store/useIsPopularStore';

export const TwHeader = () => {
  const { isPopular, setIsPopular } = useIsPopularStore();

  const toggleIsPopular = () => {
    setIsPopular(!isPopular);
  };

  const popularLink = isPopular ? '/twitch' : '/twitch?popular=true';

  return (
    <div className='flex gap-4'>
      <TwChatComponent />
      <Button asChild>
        <Link href={'/twitch'}>최신순</Link>
      </Button>
      <Button
        variant={isPopular ? 'destructive' : 'default'}
        onClick={toggleIsPopular}
        asChild
      >
        <Link href={popularLink}>인기순</Link>
      </Button>
      <Button asChild>
        <Link href={'/twitch/tags'}>태그</Link>
      </Button>
      <Button>
        <Link href={'/twitch/contribute'}>글쓰기</Link>
      </Button>
    </div>
  );
};
