'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Edit, Plus, X } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Tag } from '@prisma/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  SubmissionRequest,
  SubmissionValidator,
} from '@/lib/validators/submission';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { editTwitchPost } from '@/apis/twitch/post';
import { useRouter } from 'next/navigation';

interface CardEditProps {
  postId: number;
  title: string;
  content: string;
  tags?: Tag[];
  userId?: string;
}

export const CardEditBtn = ({
  postId,
  title: initialTitle,
  content: initialContent,
  tags: initialTags,
  userId,
}: CardEditProps) => {
  const router = useRouter();

  const defaultTags = initialTags?.map((item) => ({
    tag: item.name,
  }));

  const defaultFormValues = {
    title: initialTitle,
    content: initialContent,
    tags: defaultTags,
  };

  const form = useForm<SubmissionRequest>({
    resolver: zodResolver(SubmissionValidator),
    defaultValues: defaultFormValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'tags',
  });

  const onSubmit = async (values: SubmissionRequest) => {
    if (!userId) {
      return toast.error('로그인이 필요합니다.');
    }
    try {
      const valuesWithId = { postId, ...values };
      const response = await editTwitchPost(valuesWithId);
      toast.success(response);
      router.refresh();
    } catch (err) {
      if (err instanceof Error) {
        toast.error('게시글 작성 실패 ' + err.message);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Edit className='w-6 h-6 hover:scale-125 cursor-pointer' />
      </DialogTrigger>
      <DialogContent className='sm:max-w-3xl'>
        <DialogHeader>
          <DialogTitle>수정하기</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='flex flex-col gap-4 py-4'>
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
                        {...field}
                        className='min-h-96 bg-slate-300 dark:bg-slate-700 '
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                {fields.map((field, index) => (
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`tags.${index}.tag`}
                    render={({ field }) => (
                      <FormItem>
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
            </div>
            <DialogFooter>
              <Button type='submit'>수정하기</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
