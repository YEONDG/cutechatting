"use client"

import { createTwitchPost } from "@/apis/twitch/post"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, X } from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import {
  SubmissionRequest,
  SubmissionValidator,
} from "@/lib/validators/submission"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BoardFormProps {
  userId?: string
}
export const BoardForm = ({ userId }: BoardFormProps) => {
  const defaultFormValues = {
    title: "",
    content: "",
    tags: [{ tag: "" }],
  }

  const form = useForm<SubmissionRequest>({
    resolver: zodResolver(SubmissionValidator),
    defaultValues: defaultFormValues,
    mode: "onChange",
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "tags",
  })

  const onSubmit = async (values: SubmissionRequest) => {
    if (!userId) {
      return toast.error("로그인이 필요합니다.")
    }
    try {
      const response = await createTwitchPost(values)
      toast.success(response)
      form.reset()
    } catch (err) {
      if (err instanceof Error) {
        toast.error("게시글 작성 실패" + err.message)
      }
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        onKeyDown={onKeyDown}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input
                  placeholder="제목"
                  {...field}
                  className="bg-slate-300 dark:bg-slate-700 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>내용</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="내용"
                  className="min-h-96 max-w-2xl whitespace-pre bg-slate-300 text-xs dark:bg-slate-700"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`tags.${index}.tag`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    태그
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="태그"
                        {...field}
                        className="w-40 rounded-xl bg-slate-300 dark:bg-slate-700"
                      />
                      <X
                        onClick={() => remove(index)}
                        className="absolute left-32 top-2"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          {form.formState.errors.tags?.message && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.tags.message}
            </p>
          )}
          <Button
            type="button"
            onClick={() => append({ tag: "" })}
            className="mt-2 flex gap-2"
          >
            태그 추가
            <Plus />
          </Button>
        </div>
        <Button type="submit" disabled={!form.formState.isValid}>
          제출하기
        </Button>
      </form>
    </Form>
  )
}
