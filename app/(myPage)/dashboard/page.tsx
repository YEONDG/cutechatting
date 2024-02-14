import { getAuthSession } from '@/lib/auth';
import { DashboardMain } from '../_components/dashboard-main';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

const DashboardPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const session = await getAuthSession();
  const page = searchParams['page'] ?? '1';

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className='flex flex-col'>
      <div>환영합니다. {session.user.username}님!</div>
      <div className='text-3xl mb-4'>나의 좋아요 목록</div>
      <Suspense fallback={<DashboardMain.Skeleton />}>
        <DashboardMain userId={session.user.id} page={page} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
