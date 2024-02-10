import { UsernameRequest } from '@/lib/validators/username';
import { BASE_URL } from '..';

export const updateUsername = async (values: UsernameRequest) => {
  const response = await fetch('/api/dashboard/profile', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getLikePosts = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/api/dashboard/posts/${userId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getTotalLikePostsCount = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/api/dashboard/postcount/${userId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
