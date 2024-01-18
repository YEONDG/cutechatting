'use client';

import { useEffect, useState } from 'react';
import { ClipboardCopy, ThumbsUp } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TagItem } from '@/components/tag-item';
import type { Like, Tag } from '@prisma/client';
import { Separator } from '@/components/ui/separator';

interface TwMainCardProps {
  id: number;
  title: string;
  content: string | null;
  userId?: string;
  createdAt: Date;
  likes?: Like[];
  tags?: Tag[];
}

export const TwMainCard = ({
  id,
  title,
  content,
  userId,
  createdAt,
  likes = [],
  tags = [],
}: TwMainCardProps) => {
  const [copy, setCopy] = useState(false);
  const [isLiked, setIsLiked] = useState(
    likes.some((item) => item.userId === userId)
  );
  const [likeCount, setLikeCount] = useState(likes.length ?? 0);

  const createdDate = new Date(createdAt).toLocaleDateString();

  useEffect(() => {
    setIsLiked(likes.some((item) => item.userId === userId));
  }, [likes, userId]);

  const onCopySuccess = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

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
    <div className='flex flex-col justify-between border text-xs w-auto'>
      <div className='h-20'>
        <div className='flex justify-between items-center mx-4 mt-2'>
          <div className='text-2xl font-bold'>{title}</div>
          <Button
            onClick={() => handleLikeClick(id)}
            size='sm'
            variant='ghost'
            className={cn(
              'flex items-center gap-2 hover:bg-red-500 rounded-xl',
              {
                'bg-red-500': isLiked,
              }
            )}
          >
            <ThumbsUp className='w-6 h-6' />
            {likeCount}
          </Button>
        </div>
        <div className='flex justify-between mx-4 my-1 text-sm '>
          <div className='text-slate-500'>{createdDate}</div>
          <p className='text-sm'>{id}번</p>
        </div>
      </div>
      <Separator className='mb-2' />
      <p className='flex items-center h-full text-xs text-center overflow-hidden max-w-sm '>
        {content}
      </p>
      <div className='flex m-2'>
        {tags.map((tag) => (
          <TagItem key={tag.id} id={tag.id} name={tag.name} />
        ))}
      </div>
      <Separator />
      <div className='flex items-center mx-4 my-2'>
        <CopyToClipboard text={content ?? ''} onCopy={onCopySuccess}>
          <Button variant='default' className='w-24 h-8'>
            <ClipboardCopy />
            Copy
          </Button>
        </CopyToClipboard>
        {copy && <div className='text-lg'>복사 완료</div>}
      </div>
    </div>
  );
};
