"use client"

import { BadgeCheck } from "lucide-react"

import { cn } from "@/lib/utils"

interface CardHeaderProps {
  id: number
  title: string
  username: string
  createdDate: string
  approved: boolean
}

export const CardHeader = ({
  id,
  title,
  username,
  createdDate,
  approved,
}: CardHeaderProps) => {
  return (
    <header className="h-20">
      <div className="mx-4 mt-2 flex items-center gap-2">
        <BadgeCheck
          className={cn(`hidden`, { "block text-green-500": approved })}
        />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="mx-4 my-1 flex justify-between text-sm ">
        <div className="text-slate-500">
          {createdDate} / {username}
        </div>
        <p className="text-sm">{id}번</p>
      </div>
    </header>
  )
}
