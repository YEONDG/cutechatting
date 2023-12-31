import React from 'react';

const TwitchLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='h-screen'>{children}</div>;
};

export default TwitchLayout;
