import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Skeleton className="aspect-video h-[40px] w-[80px] rounded-lg" />
      <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-0">
        <Skeleton className="aspect-video h-[506px] w-[350px]" />
        <Skeleton className="aspect-video h-[506px] w-[350px]" />
        <Skeleton className="aspect-video h-[506px] w-[350px]" />
        <Skeleton className="aspect-video h-[506px] w-[350px]" />
        <Skeleton className="aspect-video h-[506px] w-[350px]" />
        <Skeleton className="aspect-video h-[506px] w-[350px]" />
      </div>
    </div>
  )
}

export default Loading
