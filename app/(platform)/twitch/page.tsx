import React from 'react';
import { TwChatComponent } from './_components/tw-chat-component';
import { TwMain } from './_components/tw-main';
import { TwHeader } from './_components/tw-header';

const TwitchPage = () => {
  return (
    <div className='flex flex-col h-full gap-10'>
      <TwHeader />
      <TwMain />
    </div>
  );
};

export default TwitchPage;
