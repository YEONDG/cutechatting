'use client';
import { Button } from '@/components/ui/button';
import { ClipboardCopy } from 'lucide-react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const TwMainCard = () => {
  const [copy, setCopy] = useState(false);

  const onCopySuccess = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div className='flex flex-col border-2 text-xs max-w-80'>
      <div className='text-xl'>빅딕맨</div>
      <div className='flex gap-4'>
        <div>asdf1234</div>
        <div>23-12-28 11:09</div>
      </div>
      <p>
        ———————————————─ ───────▄▀▀▀▀▀▀▀▄─────── ───────█▒▒▒▒▒▒▒▒▒█──────
        ──────█▒▒▒▒▒▒▒▒▒▒█────── ──────█▒▒▀▄▄▒▄▄▀▒█──────
        ─▄▄▄──█▒▒─▀─▒─▀─▒█────── █░░░▀▄█▒▒▒▒▒▒▒▒▒▒█──────
        ▀▄░░░▄▀▀▄▒▀▀▀▀▀▒▒▒▒▀▀▄─── ─▀▄▄▀░░░░▀▄▒▒▒▒▒▒▒▒▒▒▀▄─
        ─█▒▀▄░░░░░░▀▄▒▒▒▒▒▒█▒▒█─ ─▀▄▀▒▀▄░░░░░░▀▄▄▒▒▒▒▀▄▀─
        ───█▌▌▄▀░░░░░░░░░▀▄▌▌█─── ───▀█▌█░░░░░▄░░░░░██▀───
        ─────██▀▄▄▄▄▀▄▄▄▄▀██───
      </p>
      <div className='flex items-center'>
        <CopyToClipboard text={'복사하기'} onCopy={onCopySuccess}>
          <Button variant='default' className='w-1/2'>
            <ClipboardCopy />
            Copy
          </Button>
        </CopyToClipboard>
        {copy && <div className='text-lg'>복사 완료</div>}
      </div>
    </div>
  );
};
