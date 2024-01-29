import { z } from 'zod';
export const UsernameValidator = z.object({
  username: z
    .string()
    .min(2, {
      message: '최소한 2글자 이상이어야 합니다.',
    })
    .max(12, {
      message: '최대한 12글자 이하여야 합니다.',
    }),
});

export type UsernameRequest = z.infer<typeof UsernameValidator>;
