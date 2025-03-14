import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* 히어로 섹션 */}
      <section className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 py-12 text-white md:py-24 lg:py-32 dark:from-purple-700 dark:to-indigo-800">
        <div className="container mx-auto flex flex-col items-center space-y-4 px-4 text-center md:px-6 ">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
            아스키채팅 모음 커뮤니티
          </h1>
          <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
            재미있는 아스키 아트 채팅을 한 곳에서 모아보고 공유하세요. 창의적인
            아스키 아트를 발견하고 즐겨보세요!
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-white text-indigo-600 hover:bg-white/90 dark:bg-indigo-200 dark:text-indigo-800 dark:hover:bg-indigo-300"
            >
              <Link href="/board">
                아스키 구경하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl border-white text-black hover:bg-white/20 dark:border-indigo-300 dark:text-indigo-100"
            >
              <Link href="/sign-in">로그인하기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 주요 기능 소개 */}
      <section className="w-full rounded-xl bg-white py-12 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl dark:text-white">
              주요 기능
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-300">
              아스키 아트 채팅을 더 쉽게 발견하고 공유할 수 있는 다양한 기능을
              제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-xl bg-gray-50 p-6 dark:bg-gray-800 ">
              <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900">
                <Heart className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold dark:text-white">좋아요 기능</h3>
              <p className="text-center text-gray-500 dark:text-gray-300">
                마음에 드는 아스키 아트에 좋아요를 누르고 나중에 다시 볼 수
                있어요.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
              <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900">
                <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold dark:text-white">커뮤니티</h3>
              <p className="text-center text-gray-500 dark:text-gray-300">
                다른 사용자들과 함께 인기 있는 아스키 아트를 공유하고
                소통하세요.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
              <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900">
                <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold dark:text-white">태그 기능</h3>
              <p className="text-center text-gray-500 dark:text-gray-300">
                태그를 통해 원하는 주제의 아스키 아트를 쉽게 찾을 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="w-full rounded-xl bg-gray-50 py-12 md:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 ">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold dark:text-white">100+</h3>
              <p className="text-gray-500 dark:text-gray-300">
                등록된 아스키 아트
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold dark:text-white">5+</h3>
              <p className="text-gray-500 dark:text-gray-300">활성 사용자</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold dark:text-white">5+</h3>
              <p className="text-gray-500 dark:text-gray-300">태그 카테고리</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="w-full rounded-xl bg-indigo-600 py-12 text-white md:py-24 dark:bg-indigo-800">
        <div className="container mx-auto flex flex-col items-center space-y-4 px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
            회원가입하고 다양한 아스키 아트를 즐겨보세요.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-white text-indigo-600 hover:bg-white/90 dark:bg-indigo-200 dark:text-indigo-800 dark:hover:bg-indigo-300"
            >
              <Link href="/sign-up">회원가입</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-xl border-white text-black hover:bg-white/20 dark:border-indigo-300 dark:text-indigo-100"
            >
              <Link href="/board">둘러보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="w-full rounded-xl bg-gray-900 py-6 text-gray-300 dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © 2024 아스키채팅 모음. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="/about" className="text-sm hover:text-white">
                소개
              </Link>
              <Link href="/privacy" className="text-sm hover:text-white">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-sm hover:text-white">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
