import { getAuthSession } from '@/lib/auth';
import React from 'react';

const GoodbyePage = async () => {
  const session = await getAuthSession();

  console.log(session);
  return <div>GoodbyePage</div>;
};

export default GoodbyePage;
