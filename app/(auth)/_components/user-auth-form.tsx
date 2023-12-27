import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

const UserAuthForm = () => {
  const loginWithKakao = async () => {
    try {
      await signIn('kakao');
    } catch (error) {
      toast.error('로그인 실패');
    }
  };
  return (
    <div className='flex flex-col gap-2'>
      <Button onClick={loginWithKakao}>카카오로그인</Button>
      <Button onClick={loginWithKakao}>네이버로그인</Button>
      <Button onClick={loginWithKakao}>구글로그인</Button>
    </div>
  );
};

export default UserAuthForm;
