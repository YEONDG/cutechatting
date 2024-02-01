import { z } from 'zod';

export const SubmissionValidator = z.object({
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

export type SubmissionRequest = z.infer<typeof SubmissionValidator>;
