"use client"
interface TwChatItemProps {
  message: string
}

export const TwChatItem = ({ message }: TwChatItemProps) => {
  return (
    <div className="mx-auto flex w-[320px] flex-col justify-start  rounded-md hover:bg-slate-700/40 ">
      <div className="flex px-2.5">
        <p className="w-full text-xs font-medium leading-5">
          <p className="cursor-pointer rounded-sm font-bold hover:bg-slate-200">
            트위치1 <span className="font-normal">(asdf1234):</span>
          </p>
          {message}
        </p>
      </div>
    </div>
  )
}
