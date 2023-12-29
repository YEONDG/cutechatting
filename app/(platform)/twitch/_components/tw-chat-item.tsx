interface TwChatItemProps {
  message: string;
}

export const TwChatItem = ({ message }: TwChatItemProps) => {
  return (
    <div className='flex flex-col justify-start  w-[320px] mx-auto  hover:bg-slate-700/40 rounded-md '>
      <div className='flex px-2.5'>
        <p className='text-xs leading-5 w-full font-medium'>
          <span className='rounded-sm font-bold hover:bg-slate-200 cursor-pointer'>
            도리도리 <span className='font-normal'>(dodory123):</span>
          </span>
          {message}
        </p>
      </div>
    </div>
  );
};
