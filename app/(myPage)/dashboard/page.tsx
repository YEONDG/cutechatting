import { getAuthSession } from '@/lib/auth';
import { DashboardMain } from '../_components/dashboard-main';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';

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
      <div>환영합니다. {session.user.name}님!</div>
      <div className='flex flex-col gap-4'>
        <div className='text-3xl'>나의 좋아요 목록</div>
        <DashboardMain userId={session.user.id} page={page} />
      </div>
    </div>
  );
};

export default DashboardPage;
