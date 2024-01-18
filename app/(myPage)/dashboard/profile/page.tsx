import { Separator } from '@/components/ui/separator';
import { ProfileForm } from '../../_components/profile-form';

const AccountPage = () => {
  return (
    <section className='space-y-6'>
      <div>
        <h3 className='text-2xl'>프로필 수정</h3>
      </div>
      <Separator />
      <ProfileForm />
    </section>
  );
};

export default AccountPage;
