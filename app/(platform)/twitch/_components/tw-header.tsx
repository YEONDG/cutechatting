import React from 'react';
import { TwChatComponent } from './tw-chat-component';

export const TwHeader = () => {
  return (
    <div className='flex gap-4'>
      <TwChatComponent />
      <div>인기순</div>
      <div>태그</div>
      <div>검색바</div>
    </div>
  );
};
