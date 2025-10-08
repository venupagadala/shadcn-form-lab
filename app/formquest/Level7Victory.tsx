"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

export default function Level7Victory({ onRestart }: { onRestart: () => void }) {
  const [playerName, setPlayerName] = useState<string | null>("")

  useEffect(() => {
    setPlayerName(localStorage.getItem("playerName") || "")
    const duration = 2000
    const end = Date.now() + duration
    const colors = ["#6366F1", "#8B5CF6", "#22C55E", "#FACC15"]

    ;(function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    })()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        🎉 Congratulations {playerName || "Player"}!
      </h1>
      <p className="text-gray-500">
        You’ve successfully completed <span className="font-semibold text-indigo-500">FormQuest</span> 🧩
      </p>

      <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 w-full">
        <p className="text-sm text-gray-600">
          All your answers are safely stored in localStorage.  
          You can restart to play again!
        </p>
      </div>

      <Button
        onClick={onRestart}
        className="w-full bg-indigo-500 hover:bg-indigo-600"
      >
        🔁 Play Again
      </Button>
    </div>
  )
}
