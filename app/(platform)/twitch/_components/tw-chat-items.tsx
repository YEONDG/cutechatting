'use client';

import { TwChatItem } from './tw-chat-item';

interface TwChatItemsProps {
  chatList: { id: number; message: string }[];
}

export const TwChatItems = ({ chatList }: TwChatItemsProps) => {
  return (
    <div className='flex flex-col-reverse justify-start w-full h-full py-2 overflow-y-auto'>
      {chatList.map((chat) => (
        <TwChatItem key={chat.id} message={chat.message} />
      ))}
    </div>
  );
};
