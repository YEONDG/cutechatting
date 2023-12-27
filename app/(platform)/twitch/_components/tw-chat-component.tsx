'use client';
import { TwChatHeader } from './tw-chat-header';
import { TwChatItems } from './tw-chat-items';
import { TwChatBottom } from './tw-chat-bottom';

export const TwChatComponent = () => {
  return (
    <div className='flex flex-col w-[340px] border-x border-x-black h-full'>
      {/* 헤더 */}
      <TwChatHeader />
      {/* 채팅스크롤 */}
      <TwChatItems />
      {/* 채팅 input */}
      <TwChatBottom />
    </div>
  );
};
