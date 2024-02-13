'use client';
import { ModeToggle } from '../mode-toggle';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { SignOutButton } from './sign-out-button';
import Link from 'next/link';

const NavList = () => {
  const pathname = usePathname();
  const session = useSession();
  return (
    <div className='flex gap-2 items-center'>
      <ModeToggle />
      <Link
        className={`${pathname === '/twitch' ? 'font-bold' : ''}`}
        href='/twitch'
      >
        트위치
      </Link>
      <Link
        className={`hidden sm:block ${
          pathname === '/chzzk' ? 'font-bold' : ''
        }`}
        href='/chzzk'
      >
        치지직
      </Link>
      <Link
        className={`hidden sm:block ${
          pathname === '/afreeca' ? 'font-bold' : ''
        }`}
        href='/afreeca'
      >
        아프리카
      </Link>
      <Link
        className={`${pathname === '/dashboard' ? 'font-bold' : ''}`}
        href='/dashboard'
      >
        대시보드
      </Link>
      {!session ? (
        <>
          <Link href='/sign-in'>로그인</Link>
          <Link href='/sign-up'>회원가입</Link>
        </>
      ) : (
        <SignOutButton />
      )}
    </div>
  );
};

export default NavList;
