import React from 'react';
import { ModeToggle } from '../mode-toggle';
import NavList from './nav-list';
import { AuthNav } from './auth-nav';

export const MainNav = () => {
  return (
    <div className='hidden sm:flex gap-2 items-center text-xl'>
      <ModeToggle />
      <NavList />
      <AuthNav />
    </div>
  );
};
