import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-full gap-5'>
      <h2 className='text-3xl font-bold'>잘못된 경로입니다.</h2>
      <p>요청한 리소스를 찾을 수 없습니다.</p>
      <Button>
        <Link href='/'>홈으로 돌아가기</Link>
      </Button>
    </div>
  );
}
