'use client';
import { Button } from '@/components/ui/button';
import { ClipboardCopy } from 'lucide-react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TwMainCardProps {
  id: number;
  title: string;
  content: string | null;
}

export const TwMainCard = ({ id, title, content }: TwMainCardProps) => {
  const [copy, setCopy] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const onCopySuccess = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className='flex flex-col justify-between border-2 text-xs max-w-80'>
      <div className='flex justify-between items-center pl-4'>
        <p className='text-xl'>{id}</p>
        <div className='text-xl'>{title}</div>
        <Button
          onClick={handleBookmarkToggle}
          variant='ghost'
          className={cn('flex items-center hover:bg-red-500', {
            'bg-red-500': isBookmarked,
          })}
        >
          0
          <Heart className='w-6 h-6' />
          좋아요
        </Button>
      </div>
      <div className='flex gap-4'>
        <div>asdf1234</div>
        <div>23-12-28 11:09</div>
      </div>
      <p className='text-xs text-center'>{content}</p>
      <div className='py-1 text-md'>태그</div>
      <div className='flex items-center'>
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
