import Link from 'next/link';
import Image from 'next/image';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 z-10 mx-auto flex h-14 w-full items-center justify-center border-b bg-white px-4 shadow-sm dark:bg-black'>
      <div className='flex w-full items-center justify-between md:max-w-screen-2xl'>
        <div>
          <Link href='/' className='flex items-center'>
            <Image src='/pepe.webp' width={50} height={50} alt='logo' />
            <p className='text-xl font-bold'>큐트채팅</p>
          </Link>
        </div>
        <MainNav />
        <MobileNav />
      </div>
    </nav>
  );
};
