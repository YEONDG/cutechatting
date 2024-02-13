import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='flex flex-wrap gap-4'>
        <Skeleton className='aspect-video h-[40px] w-[110px] rounded-xl' />
        <Skeleton className='aspect-video h-[40px] w-[110px] rounded-xl' />
        <Skeleton className='aspect-video h-[40px] w-[110px] rounded-xl' />
        <Skeleton className='aspect-video h-[40px] w-[110px] rounded-xl' />
        <Skeleton className='aspect-video h-[40px] w-[110px] rounded-xl' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-0 h-full lg:gap-4'>
        <Skeleton className='aspect-video h-[506px] w-[350px]' />
        <Skeleton className='aspect-video h-[506px] w-[350px]' />
        <Skeleton className='aspect-video h-[506px] w-[350px]' />
        <Skeleton className='aspect-video h-[506px] w-[350px]' />
        <Skeleton className='aspect-video h-[506px] w-[350px]' />
        <Skeleton className='aspect-video h-[506px] w-[350px]' />
      </div>
    </div>
  );
};

export default Loading;
