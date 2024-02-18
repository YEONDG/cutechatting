"use client"

import { ArrowRightFromLine, Users } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const TwChatHeader = () => {
  return (
    <div className="flex h-[50px] items-center justify-between border-y  border-black px-2.5 ">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-slate-200">
              <ArrowRightFromLine className="h-[15px] w-[15px]" />
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-1" side="right">
            <p className="text-xs">접기</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p className="text-xs font-semibold">생방송 채팅</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-slate-200">
              <Users className="h-[15px] w-[15px]" />
            </div>
          </TooltipTrigger>
          <TooltipContent className="p-1" side="left">
            <p className="tex-xs">커뮤니티</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
