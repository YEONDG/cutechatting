"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

const UserAuthForm = ({ text }: { text: string }) => {
  const [isLoading, setIsLoading] = useState<{
    kakao: boolean
    google: boolean
    naver: boolean
  }>({
    kakao: false,
    google: false,
    naver: false,
  })

  const loginWithKakao = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, kakao: true }))
      await signIn("kakao", { callbackUrl: "/dashboard" })
    } catch (error) {
      toast.error("로그인 실패")
    } finally {
      setIsLoading((prev) => ({ ...prev, kakao: false }))
    }
  }

  const loginWithGoogle = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, google: true }))
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      toast.error("로그인 실패")
    } finally {
      setIsLoading((prev) => ({ ...prev, google: false }))
    }
  }

  const loginWithNaver = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, naver: true }))
      await signIn("naver", { callbackUrl: "/dashboard" })
    } catch (error) {
      toast.error("로그인 실패")
    } finally {
      setIsLoading((prev) => ({ ...prev, naver: false }))
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={loginWithKakao}
        disabled={isLoading.kakao}
        className="bg-yellow-400 hover:bg-yellow-500 text-black"
      >
        카카오 {text}
      </Button>
      <Button
        onClick={loginWithGoogle}
        disabled={isLoading.google}
        className="bg-white hover:bg-gray-100 text-black border border-gray-300"
      >
        구글 {text}
      </Button>
      <Button
        onClick={loginWithNaver}
        disabled={isLoading.naver}
        className="bg-green-600 hover:bg-green-700"
      >
        네이버 {text}
      </Button>
    </div>
  )
}

export default UserAuthForm
