import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export const TwAllHeader = () => {
  return (
    <div>
      <Button>
        <Link href={'/twitch'}>인증게시판 돌아가기</Link>
      </Button>
    </div>
  );
};
