import { getAuthSession } from '@/lib/auth';
import Image from 'next/image';
import React from 'react';

const DashboardPage = async () => {
  const { user } = await getAuthSession();
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>
        <Image src={user?.image} width={400} height={400} alt='avatar' />
      </div>
      <div>{user.username}</div>
    </div>
  );
};

export default DashboardPage;
