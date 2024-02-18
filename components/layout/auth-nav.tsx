import Link from "next/link"

import { getAuthSession } from "@/lib/auth"

import { SignOutButton } from "./sign-out-button"

export const AuthNav = async () => {
  const session = await getAuthSession()
  return (
    <>
      {!session ? (
        <>
          <Link href="/sign-in">로그인</Link>
        </>
      ) : (
        <SignOutButton />
      )}
    </>
  )
}
