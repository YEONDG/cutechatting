"use client"

import { TwChatItem } from "./tw-chat-item"

interface TwChatItemsProps {
  chatList: { id: number; message: string }[]
}

export const TwChatItems = ({ chatList }: TwChatItemsProps) => {
  return (
    <div className="flex h-full w-full flex-col-reverse justify-start overflow-y-auto overflow-x-hidden py-2">
      {chatList.map((chat) => (
        <TwChatItem key={chat.id} message={chat.message} />
      ))}
    </div>
  )
}
