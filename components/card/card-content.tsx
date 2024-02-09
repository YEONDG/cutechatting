'use client';

interface CardContentProps {
  content: string;
}

export const CardContent = ({ content }: CardContentProps) => {
  return (
    <p className='flex items-center h-full text-xs text-center overflow-hidden max-w-sm '>
      {content}
    </p>
  );
};
