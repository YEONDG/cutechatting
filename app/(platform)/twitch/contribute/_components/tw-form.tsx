'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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

interface TwFormProps {
  userId?: string;
}

export const TwForm = ({ userId }: TwFormProps) => {
  const form = useForm<SubmissionRequest>({
    resolver: zodResolver(SubmissionValidator),
    defaultValues: {
      title: '',
      content: '',
      tag: '',
    },
  });

  const onSubmit = async (values: SubmissionRequest) => {
    if (!userId) {
      return toast.error('로그인이 필요합니다.');
    }
    try {
      const response = await fetch('/api/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData, '뭐넘어옴?');
      toast.success('게시글 작성 완료');
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error('게시글 작성 실패');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input placeholder='제목' {...field} />
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
                  className='max-w-2xl text-xs'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tag'
          render={({ field }) => (
            <FormItem>
              <FormLabel>태그</FormLabel>
              <FormControl>
                <Input placeholder='ex) 동물, 포켓몬' {...field} />
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
