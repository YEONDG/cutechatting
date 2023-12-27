'use client';

import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center '>
        <h1 className='text-2xl font-semibold tracking-tighter'>Sign Up</h1>

        {/* form */}

        <p className='px-8 text-center text-sm text-zinc-700'>
          Already a Breadittor?{' '}
          <Link
            href='/sign-in'
            className='hover:text-zinc-800 text-sm underline underline-offset-4'
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
