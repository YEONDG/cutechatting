"use client"

interface CardContentProps {
  content: string
}

export const CardContent = ({ content }: CardContentProps) => {
  return (
    <p className="flex h-full max-w-sm items-center overflow-hidden whitespace-pre text-xxs sm:text-xs ">
      {content}
    </p>
  )
}
