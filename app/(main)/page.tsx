'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

const MainPage = () => {
  const { data } = useSession();
  console.log(data, 'data입니당');
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <p className='text-3xl font-semibold'>악질</p>
        <p className='text-lg'>반가워용</p>
      </div>
    </div>
  );
};

export default MainPage;
