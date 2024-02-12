import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '../../_components/profile-form';
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

const AccountPage = async () => {
  const session = await getAuthSession();

  if (!session) {
    redirect('/sign-in');
  }
  return (
    <section className='w-full'>
      <div>
        <h3 className='text-2xl'>프로필 수정</h3>
      </div>
      <Separator />
      <ProfileForm user={session.user} />
    </section>
  );
};

export default AccountPage;
