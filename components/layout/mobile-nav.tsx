'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { navLinks } from './nav-list';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SignOutButton } from './sign-out-button';
import { useSession } from 'next-auth/react';

export const MobileNav = () => {
  const session = useSession();
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className='flex sm:hidden hover:cursor-pointer p-2'>
          <Menu />
          <span className='sr-only'>메뉴</span>
        </div>
      </SheetTrigger>
      <SheetContent side='right' className='pl-0'>
        <div className='flex flex-col justify-center items-end h-full text-5xl gap-10 mr-5'>
          {navLinks.map((link) => (
            <MobileLink key={link.href} href={link.href} onOpenChange={setOpen}>
              {link.name}
            </MobileLink>
          ))}
          {session?.status === 'authenticated' ? (
            <SignOutButton />
          ) : (
            <MobileLink href='/sign-in' onOpenChange={setOpen}>
              로그인
            </MobileLink>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

const MobileLink = ({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
};
