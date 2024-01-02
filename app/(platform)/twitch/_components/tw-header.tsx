'use client';
import React from 'react';
import { TwChatComponent } from './tw-chat-component';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const TwHeader = () => {
  const router = useRouter();

  const handlePopularClick = () => {
    router.push('?popular=true');
  };
  return (
    <div className='flex gap-4'>
      <TwChatComponent />

      <Button asChild>
        <Link href={'/twitch'}>최신순</Link>
      </Button>
      <Button>
        <Link href={'/twitch?popular=true'}>인기순</Link>
      </Button>
      <Button asChild>
        <Link href={'/twitch/tags'}>태그</Link>
      </Button>
      <div>검색바</div>
    </div>
  );
};
