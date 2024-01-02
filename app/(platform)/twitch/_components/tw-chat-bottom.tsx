import { ChangeEvent, KeyboardEvent } from 'react';
import { AnnoyedIcon, Circle, Settings, SparkleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TwChatBottomProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  onSendMessage: (message: string) => void;
}

export const TwChatBottom = ({
  message,
  setMessage,
  onSendMessage,
}: TwChatBottomProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className='h-[90px] w-full'>
      <div className='flex flex-col px-2.5 pb-2.5 gap-2'>
        <div className='relative'>
          <Input
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='pl-10 h-[40px] outline outline-1 outline-slate-300 hover:outline-2 rounded-sm focus-visible:outline-fuchsia-400 focus-visible:outline-4 focus-visible:outline-offset-0'
            placeholder='메시지 보내기'
          />
          <div className='absolute flex items-center justify-center top-1 left-2 h-[30px] w-[30px] hover:bg-slate-200 rounded-sm '>
            <SparkleIcon className='h-5 w-5 bg-slate-300' />
          </div>
          <AnnoyedIcon className='absolute top-3 right-3 h-[20px] w-[20px]' />
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center pl-4 gap-2'>
            <Circle className='h-5 w-5' />
            <div>320</div>
          </div>
          <div className='flex items-center gap-2'>
            <Settings className='h-5 w-5' />
            <Button
              onClick={() => {
                onSendMessage(message);
                setMessage('');
              }}
              className='h-[30px] w-[46px] text-sm bg-fuchsia-400'
            >
              채팅
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
