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

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: '최소한 2글자 이상이어야 합니다.',
    })
    .max(12, {
      message: '최대한 12글자 이하여야 합니다.',
    }),
  content: z.string().min(2, {
    message: '최소한 2글자 이상이어야 합니다.',
  }),
  tag: z
    .string()

    .max(30, {
      message: '최대한 30글자 이하여야 합니다.',
    })
    .optional(),
});

interface TwFormProps {
  userId?: string;
}

export const TwForm = ({ userId }: TwFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      tag: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!userId) {
      return toast.error('로그인이 필요합니다.');
    }
    const data = { ...values, userId };
    toast.success('게시글 작성 완료');
    form.reset();
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
