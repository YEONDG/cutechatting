'use client';

import { signOut } from 'next-auth/react';

export const SignOutButton = () => {
  return (
    <button type='button' onClick={() => signOut()}>
      로그아웃
    </button>
  );
};

SignOutButton;
