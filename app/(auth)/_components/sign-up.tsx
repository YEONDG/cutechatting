'use client';

import Link from 'next/link';
import UserAuthForm from './user-auth-form';

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center '>
        <h1 className='text-2xl font-semibold tracking-tighter'>회원가입</h1>
        <UserAuthForm text='회원가입' />
        <p className='px-8 text-center text-sm text-zinc-700'>
          로그인하시겠습니까?
          <Link
            href='/sign-in'
            className='text-sm underline underline-offset-4 hover:text-zinc-800'
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
