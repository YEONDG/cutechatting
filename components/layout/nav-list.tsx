'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { name: '트위치', href: '/twitch' },
  { name: '치지직', href: '/chzzk' },
  { name: '아프리카', href: '/afreeca' },
  { name: '대시보드', href: '/dashboard' },
];

const NavList = () => {
  const pathname = usePathname();
  return (
    <div className='flex gap-2 items-center'>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.name}
            className={isActive ? 'font-bold' : ''}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavList;
