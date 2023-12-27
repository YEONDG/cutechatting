'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';

const SignIn = () => {
  const loginWithKakao = async () => {
    try {
      await signIn('kakao');
      toast.success('로그인 성공');
    } catch (error) {
      toast.error('로그인 실패');
    }
  };
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center '>
        {/* form */}
        <h1 className='text-2xl font-semibold tracking-tighter'>로그인</h1>
        <Button onClick={loginWithKakao}>카카오로그인</Button>
        <Button onClick={loginWithKakao}>네이버로그인</Button>
        <Button onClick={loginWithKakao}>구글로그인</Button>
        <p className='px-8 text-center text-sm text-zinc-700'>
          회원가입?{' '}
          <Link
            href='/sign-up'
            className='hover:text-zinc-800 text-sm underline underline-offset-4'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
