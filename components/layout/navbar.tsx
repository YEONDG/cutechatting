import Link from 'next/link';

import { getAuthSession } from '@/lib/auth';
import { SignOutButton } from './sign-out-button';
import { ModeToggle } from '../mode-toggle';

export const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center dark:bg-black'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <div>
          <Link href='/'>큐트채팅</Link>
        </div>
        <div className='flex gap-4 items-center'>
          <ModeToggle />
          <Link href='/twitch'>트위치</Link>
          <Link href='/chzzk'>치지직🚧</Link>
          <Link href='/afreeca'>아프리카🚧</Link>
          <Link href='/dashboard'>대시보드</Link>
          {session ? (
            <SignOutButton />
          ) : (
            <>
              <Link href='/sign-in'>로그인</Link>
              <Link href='/sign-up'>회원가입</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
