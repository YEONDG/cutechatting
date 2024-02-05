'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { TagInput } from './tag-input';

interface TwFormProps {
  userId?: string;
}
// let renderCount = 0;
export const TwForm = ({ userId }: TwFormProps) => {
  const form = useForm<SubmissionRequest>({
    resolver: zodResolver(SubmissionValidator),
    defaultValues: {
      title: '',
      content: '',
      tags: [],
    },
    // mode: 'onChange',
  });

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

  console.log(form.formState.errors);
  // renderCount++;
  return (
    <Form {...form}>
      {/* <span className='counter'>Render Count: {renderCount}</span> */}
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
        <FormField
          control={form.control}
          name='tags'
          render={() => (
            <FormItem>
              <FormLabel>태그</FormLabel>
              <FormControl>
                <TagInput />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>제출하기</Button>
      </form>
    </Form>
  );
};
