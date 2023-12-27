'use client';

import { ArrowRightFromLine, Users } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export const TwChatHeader = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className='h-[50px] flex justify-between items-center px-2.5  border-y border-black '>
      {mounted && (
        <>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className='flex items-center justify-center hover:bg-slate-200 rounded-md h-[30px] w-[30px]'>
                  <ArrowRightFromLine className='h-[15px] w-[15px]' />
                </div>
              </TooltipTrigger>
              <TooltipContent className='p-1' side='right'>
                <p className='text-xs'>접기</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className='text-xs font-semibold'>생방송 채팅</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className='flex items-center justify-center hover:bg-slate-200 rounded-md h-[30px] w-[30px]'>
                  <Users className='h-[15px] w-[15px]' />
                </div>
              </TooltipTrigger>
              <TooltipContent className='p-1' side='left'>
                <p className='tex-xs'>커뮤니티</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      )}
    </div>
  );
};
