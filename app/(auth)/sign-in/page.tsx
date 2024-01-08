import SignIn from '@/app/(auth)/_components/sign-in';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
  return (
    <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
      <SignIn />
    </div>
  );
};
export default SignInPage;
