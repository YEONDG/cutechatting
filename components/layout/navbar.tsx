'use client';
import Link from 'next/link';

import { SignOutButton } from './sign-out-button';
import { ModeToggle } from '../mode-toggle';
import { Session } from 'next-auth';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavBarProps {
  session: Session | null;
}

export const Navbar = ({ session }: NavBarProps) => {
  const pathname = usePathname();

  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center z-10 dark:bg-black'>
      <div className='w-full md:max-w-screen-2xl flex items-center justify-between '>
        <div>
          <Link href='/' className='flex items-center'>
            <Image src='/pepe.png' width={50} height={50} alt='logo' />
            <p className='hidden sm:block text-xl font-bold'>큐트채팅</p>
          </Link>
        </div>
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
      </div>
    </div>
  );
};
