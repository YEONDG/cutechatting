import NextAuth, { DefaultSession } from 'next-auth';
import type { User } from 'next-auth/next';
import type { JWT } from 'next-auth/jwt';

type UserId = string;

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    username: string;
    role: UserRole;
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: UserId;
      username: string;
      role: UserRole;
    } & DefaultSession['user'];
  }
}
