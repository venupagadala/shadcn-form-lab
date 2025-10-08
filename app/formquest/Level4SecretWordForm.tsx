"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  secret: z
    .string()
    .min(1, "Enter the secret word")
    .refine((val) => val.toLowerCase() === "react", {
      message: "❌ Nope! That’s not the secret word.",
    }),
})

export default function Level4SecretWordForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { secret: "" },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    if (values.secret.toLowerCase() === "react") {
      onNext()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-center">
        <h1 className="text-2xl font-bold text-indigo-600">🔐 Secret Word</h1>
        <p className="text-gray-500">
          Hint: It powers this entire app 😉
        </p>

        <FormField
          control={form.control}
          name="secret"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type the Secret Word</FormLabel>
              <FormControl>
                <Input
                  placeholder="What's the secret?"
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
          Unlock Next Level
        </Button>
      </form>
    </Form>
  )
}
