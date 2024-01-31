import { Input } from '@/components/ui/input';
import { TwForm } from './_components/tw-form';
import { getAuthSession } from '@/lib/auth';

const ContributePage = async () => {
  const session = await getAuthSession();
  return (
    <div className='flex flex-col container'>
      <div className='flex flex-col pb-10'>
        <h1 className='text-2xl font-bold py-2'>게시판에 기여하기</h1>
        <p className='text-slate-500 text-sm'>
          게시글 작성해주시면 검토 후에 게시판에 올려드립니다.!
        </p>
      </div>
      <div className='max-w-2xl'>
        <TwForm userId={session?.user.id} />
      </div>
    </div>
  );
};

export default ContributePage;
