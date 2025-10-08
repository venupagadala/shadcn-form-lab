"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-center p-6">
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-md bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl shadow-lg p-8 space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          🧩 Welcome to FormQuest
        </h1>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Play through a series of fun, interactive forms that test your logic,
          creativity, and patience — all built with <b>shadcn/ui</b> and <b>React Hook Form</b>.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => router.push("/formquest")}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-lg py-3 rounded-xl"
          >
            🎮 Start Game
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer note */}
      <p className="text-gray-500 text-sm mt-8">
        Built with ❤️ using <b>Next.js</b>, <b>shadcn/ui</b>, and <b>Zod</b>.
      </p>
    </main>
  )
}
