import { z } from 'zod';

export const SubmissionValidator = z.object({
  title: z
    .string({
      required_error: '글제목은 필수입니다.',
    })
    .min(1, {
      message: '최소한 1글자 이상이어야 합니다.',
    })
    .max(12, {
      message: '최대한 12글자 이하여야 합니다.',
    }),
  content: z
    .string({
      required_error: '글 내용은 필수입니다.',
    })
    .min(2, {
      message: '최소한 2글자 이상이어야 합니다.',
    }),
  tags: z
    .array(
      z.object({
        tag: z
          .string()
          .min(1, { message: '최소 1글자 이상이여야 합니다.' })
          .max(7, { message: '최대 7글자 이하여야 합니다.' }),
      })
    )
    .max(3, { message: '태그는 최대 3개까지만 가능합니다.' })
    .optional(),
});

export type SubmissionRequest = z.infer<typeof SubmissionValidator>;
