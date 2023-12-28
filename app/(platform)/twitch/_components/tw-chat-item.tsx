import React from 'react';

const TwChatItem = () => {
  return (
    <div className='flex flex-col justify-start  w-[320px] mx-auto  hover:bg-slate-700/40 rounded-md '>
      <div className='flex px-2.5'>
        <p className='text-xs leading-5 w-full font-medium'>
          <span className='rounded-sm font-bold hover:bg-slate-200 cursor-pointer'>
            도리도리 <span className='font-normal'>(dodory123)</span>
          </span>
          : 안녀아세안오오오오오오오오오오오오하리아리아리
        </p>
      </div>
    </div>
  );
};

export default TwChatItem;
