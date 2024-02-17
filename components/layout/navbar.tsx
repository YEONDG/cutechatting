import Link from 'next/link';
import Image from 'next/image';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex justify-center items-center z-10 mx-auto dark:bg-black'>
      <div className='w-full md:max-w-screen-2xl flex items-center justify-between'>
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
