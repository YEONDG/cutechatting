"use client"

import { cn } from "@/lib/utils"

interface CardContentProps {
  content: string
  className?: string
}

export const CardContent = ({ content, className }: CardContentProps) => {
  return (
    <div className={cn("px-2 pb-2", className)}>
      <div className="max-h-[300px] overflow-auto whitespace-pre-wrap font-mono text-xs">
        {content}
      </div>
    </div>
  )
}
