import { SubmissionRequest } from '@/lib/validators/submission';
import { TwitchPostWithLikesWithTags } from '@/types/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getTwitchPosts = async (
  page: string,
  popular: boolean = false,
  approved: boolean = true
): Promise<TwitchPostWithLikesWithTags[]> => {
  const response = await fetch(
    `${BASE_URL}/api/twitch?page=${page}&popular=${popular.toString()}&approved=${approved.toString()}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getTotalPostsCount = async (): Promise<number> => {
  const response = await fetch(`${BASE_URL}/api/twitch/postcount`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const createTwitchPost = async (values: SubmissionRequest) => {
  const response = await fetch(`${BASE_URL}/api/twitch/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const editTwitchPost = async (values: SubmissionRequest) => {
  const response = await fetch(`${BASE_URL}/api/twitch/posts`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const deleteTwitchPost = async (id: number) => {
  const response = await fetch(`${BASE_URL}/api/twitch/posts`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getTwitchTagList = async () => {
  const response = await fetch(`${BASE_URL}/api/twitch/tags`);
  const data = await response.json();
  return data;
};

export const getTagWithId = async (
  id: string
): Promise<TwitchPostWithLikesWithTags[]> => {
  const response = await fetch(`${BASE_URL}/api/twitch/tags/${id}`);
  const data = await response.json();
  return data;
};

export const updateLiked = async (postId: number) => {
  const response = await fetch(`${BASE_URL}/api/twitch/like/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
