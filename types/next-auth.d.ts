import NextAuth, { DefaultSession } from "next-auth"
import type { JWT } from "next-auth/jwt"
import type { User } from "next-auth/next"

type UserId = string

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
    username: string
    role: UserRole
    picture?: string | null
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: UserId
      username: string
      role: UserRole
    } & DefaultSession["user"]
  }
}
