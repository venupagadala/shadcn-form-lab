"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
})

export default function Level1IntroForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    localStorage.setItem("playerName", values.name)
    onNext()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-center">
        <h1 className="text-2xl font-bold text-indigo-600">Welcome to FormQuest!</h1>
        <p className="text-gray-500">Enter your name to begin your journey ✨</p>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Type your name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600">Start Adventure</Button>
      </form>
    </Form>
  )
}
