import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '../_components/sidebar-nav';

const sidebarNavItems = [
  {
    title: '나의 좋아요 목록',
    href: '/dashboard',
  },
  {
    title: '프로필 수정',
    href: '/dashboard/profile',
  },
];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='container w-full px-2'>
      <h2 className='text-3xl'>대시보드</h2>
      <Separator className='my-4' />
      <div className='flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0'>
        <aside className='-mx-4 lg:w-1/5'>
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className='flex-1 lg:w-4/5'>{children}</div>
      </div>
    </section>
  );
}
