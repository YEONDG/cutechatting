import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <div>
          <Link href='/'>ganda</Link>
        </div>
        <div>
          <Link href='/goodbye'>떠나요</Link>
        </div>
      </div>
    </div>
  );
};
