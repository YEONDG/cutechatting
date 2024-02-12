import { getAuthSession } from '@/lib/auth';
import { DashboardMain } from '../_components/dashboard-main';
import { redirect } from 'next/navigation';

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
    <div className='w-full'>
      <div>환영합니다. {session.user.username}님!</div>
      <div className='text-3xl mb-4'>나의 좋아요 목록</div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <DashboardMain userId={session.user.id} page={page} />
      </div>
    </div>
  );
};

export default DashboardPage;
