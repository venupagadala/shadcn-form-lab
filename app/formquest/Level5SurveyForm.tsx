"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
  FormControl,
} from "@/components/ui/form"

const schema = z.object({
  hobbies: z
    .array(z.string())
    .min(2, "Pick at least two hobbies to continue 😄"),
})

const hobbiesList = [
  "Reading",
  "Coding",
  "Gaming",
  "Cooking",
  "Music",
  "Traveling",
]

export default function Level5SurveyForm({ onNext }: { onNext: () => void }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { hobbies: [] },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values)
    onNext()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-center">
        <h1 className="text-2xl font-bold text-indigo-600">💬 Fun Survey</h1>
        <p className="text-gray-500">Pick your favorite hobbies</p>

        <FormField
          control={form.control}
          name="hobbies"
          render={() => (
            <FormItem className="space-y-4">
              {hobbiesList.map((hobby) => (
                <FormField
                  key={hobby}
                  control={form.control}
                  name="hobbies"
                  render={({ field }) => {
                    const checked = field.value?.includes(hobby)
                    return (
                      <FormItem
                        key={hobby}
                        className="flex flex-row items-center justify-between rounded-lg border p-3 hover:bg-gray-50 transition"
                      >
                        <div className="space-y-0.5 text-left">
                          <FormLabel>{hobby}</FormLabel>
                          <FormDescription>
                            {checked ? "✅ Selected" : "Tap to select"}
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(isChecked) => {
                              if (isChecked) {
                                field.onChange([...field.value, hobby])
                              } else {
                                field.onChange(
                                  field.value.filter((v: string) => v !== hobby)
                                )
                              }
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600"
        >
          Continue ➡️
        </Button>
      </form>
    </Form>
  )
}
