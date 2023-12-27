'use client';

import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import UserAuthForm from './user-auth-form';

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center '>
        {/* form */}
        <h1 className='text-2xl font-semibold tracking-tighter'>로그인</h1>
        <UserAuthForm />
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
