'use client';

import React from 'react';
import { Check, ClipboardCopy } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import type { Like, Tag, UserRole } from '@prisma/client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { CardHeader } from '@/components/card/card-header';
import { LikeButton } from '@/components/like-button';
import { CardContent } from '@/components/card/card-content';
import { TagDisplay } from '@/components/tag-display';
import { CardEditBtn } from '@/components/card/card-edit-btn';
import { CardDeleteBtn } from '@/components/card/card-delete-btn';
import useLike from '@/hooks/useLike';

interface TwMainCardProps {
  id: number;
  title: string;
  content: string;
  authorId: string;
  userId?: string;
  createdAt: Date;
  likes?: Like[];
  tags?: Tag[];
  username?: string;
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

  const { isLiked, likeCount, toggleLike } = useLike(id, likes, userId);

  const createdDate = new Date(createdAt).toLocaleDateString();
  const IsAuthor = authorId === userId;
  const IsAdmin = role === 'ADMIN';

  return (
    <section className='relative flex flex-col justify-between border max-w-[350px] mx-auto border-black text-xs  dark:border-white'>
      <CardHeader
        id={id}
        title={title}
        username={username ?? ''}
        createdDate={createdDate}
        approved={approved}
      />
      <div className='absolute top-2 right-0'>
        <LikeButton
          isLiked={isLiked}
          likeCount={likeCount}
          onLikeClick={toggleLike}
        />
      </div>
      <Separator className='mb-2' />
      <CardContent content={content} />
      <TagDisplay tags={tags} />
      <Separator />
      <div className='flex justify-between items-center mx-2 my-2 gap-2'>
        <div className='flex'>
          <CopyToClipboard text={content ?? ''} onCopy={onCopySuccess}>
            <Button variant='default' className='w-24 h-8'>
              <ClipboardCopy />
              Copy
            </Button>
          </CopyToClipboard>
          {copy && (
            <p className='flex text-xl'>
              <Check className='text-green-500 w-8 h-8' />
              복사완료
            </p>
          )}
        </div>

        {(IsAuthor || IsAdmin) && (
          <div className='flex gap-2'>
            <CardEditBtn
              postId={id}
              title={title}
              content={content}
              tags={tags}
              userId={userId}
            />

            <CardDeleteBtn postId={id} />
          </div>
        )}
      </div>
    </section>
  );
};
