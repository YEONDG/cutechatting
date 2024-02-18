"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { TwChatBottom } from "./tw-chat-bottom"
import { TwChatHeader } from "./tw-chat-header"
import { TwChatItems } from "./tw-chat-items"

interface ChatItem {
  id: number
  message: string
}

export const TwChatComponent = () => {
  const [message, setMessage] = useState<string>("")
  const [chatList, setChatList] = useState<ChatItem[]>([])

  const lastChat = chatList.length > 0 ? chatList[0] : null

  const onSendMessage = (message: string) => {
    if (message.trim() === "") return

    const newChat: ChatItem = {
      id: lastChat ? lastChat.id + 1 : 1,
      message,
    }
    setChatList([newChat, ...chatList])
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className="w-32">
          채팅창 열기
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>트위치 채팅창</SheetTitle>
        </SheetHeader>
        <div className="-ml-7 flex h-full flex-col sm:ml-0">
          <div className="flex h-full w-[300px] flex-col border-x border-x-black sm:w-[340px]">
            {/* 헤더 */}
            <TwChatHeader />
            {/* 채팅스크롤 */}
            <TwChatItems chatList={chatList} />
            {/* 채팅 input */}
            <TwChatBottom
              message={message}
              setMessage={setMessage}
              onSendMessage={onSendMessage}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
    //
  )
}
