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
import { updateLiked } from '@/apis/twitch/post';
import { CardEditBtn } from '@/components/card/card-edit-btn';
import { CardDeleteBtn } from '@/components/card/card-delete-btn';

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
      const data = await updateLiked(postId);
      setIsLiked(data['isLiked']);
      setLikeCount(data['likeCount'].length);
      toast.success('좋아요 성공');
    } catch (error) {
      console.error('Error while processing like:', (error as Error).message);
      toast.error('로그인이 필요합니다.');
    }
  };

  return (
    <section className='relative flex flex-col justify-between border max-w-[360px] mx-auto border-black text-xs  dark:border-white'>
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
