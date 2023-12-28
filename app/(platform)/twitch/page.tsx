import React from 'react';
import { TwChatComponent } from './_components/tw-chat-component';
import { TwMain } from './_components/tw-main';

const TwitchPage = () => {
  return (
    <div className='flex flex-col h-full gap-10'>
      <TwChatComponent />
      <TwMain />
    </div>
  );
};

export default TwitchPage;
