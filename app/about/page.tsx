import Link from "next/link"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">
          아스키채팅 모음 커뮤니티 소개
        </h1>

        <p className="mb-8 text-lg text-muted-foreground">
          아스키 아트 채팅을 모아보고 공유하는 커뮤니티 서비스입니다.
        </p>

        <div className="mb-12 flex justify-center">
          <Link
            href="https://github.com/YEONDG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-white hover:bg-gray-800"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
        </div>

        <div className="mt-12">
          <Button asChild variant="outline">
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
