import NextAuth, { DefaultSession } from 'next-auth';
import type { User } from 'next-auth/next';
import type { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    username: string;
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession['user'];
  }
}
