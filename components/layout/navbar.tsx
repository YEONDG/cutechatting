import { getAuthSession } from '@/lib/auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { SignOutButton } from './sign-out-button';

export const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <div>
          <Link href='/'>ganda</Link>
        </div>
        <div>{session?.user?.name}</div>
        <div className='flex gap-4'>
          <Link href='/twitch'>트위치</Link>
          <Link href='/afreeca'>아프리카</Link>
          <Link href='/chzzk'>치지직</Link>
          <Link href='/dashboard'>대시보드</Link>
          {session ? <SignOutButton /> : <Link href='/sign-in'>로그인</Link>}

          <Link href='/sign-up'>회원가입</Link>
        </div>
      </div>
    </div>
  );
};
