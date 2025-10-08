"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  answer: z
    .string()
    .min(1, "Enter your answer")
    .refine((val) => val === "16", {
      message: "Oops! That’s not correct. Try again 😅",
    }),
})

export default function Level2MathForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { answer: "" },
  })

  const playerName = typeof window !== "undefined" ? localStorage.getItem("playerName") : ""

  const onSubmit = () => onNext()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 text-center"
      >
        <h1 className="text-2xl font-bold text-indigo-600">
          🧮 Math Challenge
        </h1>
        <p className="text-gray-500">
          {playerName ? `${playerName}, can you solve this?` : "Can you solve this?"}
        </p>

        <div className="bg-indigo-50 rounded-lg p-4 font-medium text-indigo-700">
          What is <strong>8%2(2+2+) = ?</strong>
        </div>

        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Answer</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your answer..."
                  {...field}
                  className="text-center"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600"
        >
          Submit Answer
        </Button>
      </form>
    </Form>
  )
}
