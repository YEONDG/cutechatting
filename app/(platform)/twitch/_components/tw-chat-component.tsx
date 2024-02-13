'use client';

import { useState } from 'react';

import { TwChatHeader } from './tw-chat-header';
import { TwChatItems } from './tw-chat-items';
import { TwChatBottom } from './tw-chat-bottom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface ChatItem {
  id: number;
  message: string;
}

export const TwChatComponent = () => {
  const [message, setMessage] = useState<string>('');
  const [chatList, setChatList] = useState<ChatItem[]>([]);

  const lastChat = chatList.length > 0 ? chatList[0] : null;

  const onSendMessage = (message: string) => {
    if (message.trim() === '') return;

    const newChat: ChatItem = {
      id: lastChat ? lastChat.id + 1 : 1,
      message,
    };
    setChatList([newChat, ...chatList]);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='default' className='w-32'>
          채팅창 열기
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>트위치 채팅창</SheetTitle>
        </SheetHeader>
        <div className='flex flex-col h-full -ml-7 sm:ml-0'>
          <div className='flex flex-col w-[300px] sm:w-[340px] border-x border-x-black h-full'>
            {/* 헤더 */}
            <TwChatHeader />
            {/* 채팅스크롤 */}
            <TwChatItems chatList={chatList} />
            {/* 채팅 input */}
            <TwChatBottom
              message={message}
              setMessage={setMessage}
              onSendMessage={onSendMessage}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
    //
  );
};
