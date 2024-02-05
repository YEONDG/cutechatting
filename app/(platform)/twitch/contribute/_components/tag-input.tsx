import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Plus, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const TagInput = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
    rules: { maxLength: 3 },
  });

  return (
    <div className='flex'>
      <ul className='flex flex-wrap gap-2 mr-2'>
        {fields.map((field, index) => (
          <li key={field.id} className='relative'>
            <Input
              {...register(`tags.${index}` as const)}
              className='rounded-xl w-32 bg-slate-300 dark:bg-slate-700'
            />
            <X
              type='button'
              onClick={() => remove(index)}
              className='absolute right-2 top-2'
            >
              제거
            </X>
          </li>
        ))}
      </ul>
      <Button type='button' onClick={() => append('')} className='flex gap-2'>
        태그 추가
        <Plus />
      </Button>
    </div>
  );
};
