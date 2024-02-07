'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  SubmissionRequest,
  SubmissionValidator,
} from '@/lib/validators/submission';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TwFormProps {
  userId?: string;
}
export const TwForm = ({ userId }: TwFormProps) => {
  const defaultFormValues = {
    title: '',
    content: '',
    tags: [{ tag: '' }],
  };

  const form = useForm<SubmissionRequest>({
    resolver: zodResolver(SubmissionValidator),
    defaultValues: defaultFormValues,
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'tags',
  });
  console.log(form.formState.errors, '이것은?');

  console.log(form.formState.errors, '??');
  const onSubmit = async (values: SubmissionRequest) => {
    if (!userId) {
      return toast.error('로그인이 필요합니다.');
    }
    try {
      console.log(values);
      //   const response = await fetch('/api/contribute', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(values),
      //   });

      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }
      //   const responseData = await response.json();
      // console.log(responseData, '뭐넘어옴?');
      toast.success('게시글 작성 완료');
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error('게시글 작성 실패');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'
        onKeyDown={onKeyDown}
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input
                  placeholder='제목'
                  {...field}
                  className='bg-slate-300 dark:bg-slate-700 '
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>내용</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='내용'
                  className='max-w-2xl text-xs bg-slate-300 dark:bg-slate-700'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className=''>
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`tags.${index}.tag`}
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    태그
                  </FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        placeholder='태그'
                        {...field}
                        className='w-40 rounded-xl bg-slate-300 dark:bg-slate-700'
                      />
                      <X
                        onClick={() => remove(index)}
                        className='absolute left-32 top-2'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          {form.formState.errors.tags?.message && (
            <p className='text-sm font-medium text-destructive'>
              {form.formState.errors.tags.message}
            </p>
          )}
          <Button
            type='button'
            onClick={() => append({ tag: '' })}
            className='flex gap-2 mt-4'
          >
            태그 추가
            <Plus />
          </Button>
        </div>
        <Button type='submit' disabled={!form.formState.isValid}>
          제출하기
        </Button>
      </form>
    </Form>
  );
};
