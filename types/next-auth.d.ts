import type { User } from 'next-auth/next';
import type { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    username?: string | null;
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId;
      username?: string | null;
    };
  }
}
