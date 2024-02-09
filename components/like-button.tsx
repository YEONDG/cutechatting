import { ThumbsUp } from 'lucide-react';

interface LikeButtonProps {
  isLiked: boolean;
  likeCount: number;
  onLikeClick: () => void;
}

export const LikeButton = ({
  isLiked,
  likeCount,
  onLikeClick,
}: LikeButtonProps) => {
  return (
    <div className='flex justify-end mr-2'>
      <button
        onClick={onLikeClick}
        className={`flex items-center gap-2 px-2 py-1 rounded-xl ${
          isLiked
            ? 'bg-red-500 text-white'
            : 'bg-gray-200 text-black hover:bg-gray-300'
        }`}
      >
        <ThumbsUp className='w-6 h-6' />
        <span>{likeCount}</span>
      </button>
    </div>
  );
};
