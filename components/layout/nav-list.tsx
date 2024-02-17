'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const navLinks = [
  { name: '트위치', href: '/twitch' },
  { name: '치지직', href: '/chzzk' },
  { name: '아프리카', href: '/afreeca' },
  { name: '대시보드', href: '/dashboard' },
];

const NavList = () => {
  const pathname = usePathname();
  return (
    <ul className='flex gap-2 justify-center items-center text-xl'>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <li key={link.name}>
            <Link className={isActive ? 'font-bold' : ''} href={link.href}>
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
