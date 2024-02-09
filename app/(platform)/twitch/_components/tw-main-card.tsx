'use client';

import { useEffect, useState } from 'react';
import { ClipboardCopy, Edit, Trash2 } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';
import type { Like, Tag, UserRole } from '@prisma/client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { CardHeader } from '@/components/card/card-header';
import { LikeButton } from '@/components/like-button';
import { CardContent } from '@/components/card/card-content';
import { TagDisplay } from '@/components/tag-display';

interface TwMainCardProps {
  id: number;
  title: string;
  content: string;
  authorId: string;
  userId?: string;
  createdAt: Date;
  likes?: Like[];
  tags?: Tag[];
  username: string;
  approved: boolean;
  role?: UserRole;
}

export const TwMainCard = ({
  id,
  title,
  content,
  authorId,
  userId,
  createdAt,
  likes = [],
  tags = [],
  username,
  approved,
  role = 'USER',
}: TwMainCardProps) => {
  const { copy, onCopySuccess } = useCopyToClipboard();
  const [isLiked, setIsLiked] = useState(
    likes.some((item) => item.userId === userId)
  );
  const [likeCount, setLikeCount] = useState(likes.length);

  const createdDate = new Date(createdAt).toLocaleDateString();
  const IsAuthor = authorId === userId;
  const IsAdmin = role === 'ADMIN';

  useEffect(() => {
    setIsLiked(likes.some((item) => item.userId === userId));
  }, [likes, userId]);

  const handleLikeClick = async (postId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/twitch/like/${postId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      setIsLiked(data['isLiked']);
      setLikeCount(data['likeCount'].length);
      toast.success('좋아요 성공');
    } catch (error) {
      console.error('Error while processing like:', (error as Error).message);
      toast.error('로그인이 필요합니다.');
    }
  };

  return (
    <section className='relative flex flex-col justify-between border border-black text-xs w-auto dark:border-white'>
      <CardHeader
        id={id}
        title={title}
        username={username}
        createdDate={createdDate}
        approved={approved}
      />
      <div className='absolute top-2 right-0'>
        <LikeButton
          isLiked={isLiked}
          likeCount={likeCount}
          onLikeClick={() => handleLikeClick(id)}
        />
      </div>
      <Separator className='mb-2' />
      <CardContent content={content} />
      <TagDisplay tags={tags} />
      <Separator />
      <div className='flex justify-between items-center mx-4 my-2 gap-4'>
        <CopyToClipboard text={content ?? ''} onCopy={onCopySuccess}>
          <Button variant='default' className='w-24 h-8'>
            <ClipboardCopy />
            Copy
          </Button>
        </CopyToClipboard>
        {copy && <div className='text-lg'>복사 완료</div>}
        {(IsAuthor || IsAdmin) && (
          <div className='flex gap-2'>
            <Edit
              className='w-6 h-6 hover:scale-125 cursor-pointer'
              onClick={() => {}}
            />
            <Trash2
              className='w-6 h-6 hover:scale-125 cursor-pointer'
              onClick={() => {}}
            />
          </div>
        )}
      </div>
    </section>
  );
};
