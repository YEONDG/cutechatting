import { getAuthSession } from '@/lib/auth';
import Image from 'next/image';
import React from 'react';
import DashboardMain from '../_components/dashboard-main';

const DashboardPage = async ({ searchParams }) => {
  const { user } = await getAuthSession();
  const page = searchParams['page'] ?? '1';
  return (
    <div>
      <div>환영합니다. {user.name}님!</div>
      <div>
        <div className='text-3xl'>나의 좋아요 목록</div>
        <DashboardMain userId={user.id} page={page} />
      </div>
    </div>
  );
};

export default DashboardPage;
