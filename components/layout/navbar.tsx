import Link from 'next/link';

import Image from 'next/image';
import NavList from './nav-list';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex justify-center items-center z-10 mx-auto dark:bg-black'>
      <div className='w-full md:max-w-screen-2xl flex items-center justify-between '>
        <div>
          <Link href='/' className='flex items-center'>
            <Image src='/pepe.webp' width={50} height={50} alt='logo' />
            <p className='hidden sm:block text-xl font-bold'>큐트채팅</p>
          </Link>
        </div>
        <NavList />
      </div>
    </div>
  );
};
