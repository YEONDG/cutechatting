import React from 'react';
import TwChatItem from './tw-chat-item';

export const TwChatItems = () => {
  return (
    <div className='flex flex-col-reverse justify-start w-full h-full py-2'>
      <TwChatItem />
      <TwChatItem />
      <TwChatItem />
      <TwChatItem />
      <TwChatItem />
    </div>
  );
};
