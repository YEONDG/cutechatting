'use client';

import { TwChatHeader } from './tw-chat-header';
import { TwChatItems } from './tw-chat-items';
import { TwChatBottom } from './tw-chat-bottom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

export const TwChatComponent = () => {
  const [message, setMessage] = useState('');

  const onSendMessage = (message) => {
    console.log(`Sending message: ${message}`);
    // 실제로는 여기서 서버로 메시지를 보내거나 다른 작업을 수행할 수 있습니다.
  };
  console.log(message);
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
        <div className='flex flex-col h-full'>
          <div className='flex flex-col w-[340px] border-x border-x-black h-full'>
            {/* 헤더 */}
            <TwChatHeader />
            {/* 채팅스크롤 */}
            <TwChatItems />
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
