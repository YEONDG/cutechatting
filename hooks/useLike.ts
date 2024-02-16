import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { updateLiked } from '@/apis/twitch/post';
import { Like } from '@prisma/client';

const useLike = (postId: number, initialLikes: Like[], userId?: string) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes.length);

  useEffect(() => {
    setIsLiked(initialLikes.some((like) => like.userId === userId));
  }, [initialLikes, userId]);

  const toggleLike = useCallback(async () => {
    try {
      const data = await updateLiked(postId);
      setIsLiked(data.isLiked);
      setLikeCount(data.likeCount.length);
      toast.success('좋아요 성공!');
    } catch (error) {
      console.error('좋아요 업데이트 중 오류 발생:', error);
      toast.error('로그인이 필요합니다.');
    }
  }, [postId]);

  return { isLiked, likeCount, toggleLike };
};

export default useLike;
