import React from 'react';
import { ModeToggle } from '../mode-toggle';
import NavList from './nav-list';
import { AuthNav } from './auth-nav';

export const MainNav = () => {
  return (
    <div className='hidden items-center gap-2 text-xl sm:flex'>
      <ModeToggle />
      <NavList />
      <AuthNav />
    </div>
  );
};
