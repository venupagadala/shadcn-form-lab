"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const schema = z.object({
  color: z.enum(["red", "blue", "green"], {
    error: "Please pick your favorite color",
  }),
})

export default function Level3ColorForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { color: undefined },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    if (values.color === "blue") {
      onNext()
    } else {
      alert("💡 Hint: The sky’s favorite color might be the answer 😄")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 text-center"
      >
        <h1 className="text-2xl font-bold text-indigo-600">
          🎨 Color Challenge
        </h1>
        <p className="text-gray-500">
          Choose your favorite color to unlock the next level
        </p>

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a color</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">❤️ Red</SelectItem>
                    <SelectItem value="green">💚 Green</SelectItem>
                    <SelectItem value="blue">💙 Blue</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600"
        >
          Continue
        </Button>
      </form>
    </Form>
  )
}
