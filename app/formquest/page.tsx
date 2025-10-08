"use client"

import { useState } from "react"
import Level1IntroForm from "./Level1IntroForm"
import Level2MathForm from "./Level2MathForm"
import Level3ColorForm from "./Level3ColorForm"
import Level4SecretWordForm from "./Level4SecretWordForm"
import Level5SurveyForm from "./Level5SurveyForm"
import Level6ProfileForm from "./Level6ProfileForm"
import Level7Victory from "./Level7Victory"

export default function FormQuest() {
  // current level state
  const [level, setLevel] = useState(1)

  // move to next level
  const nextLevel = () => setLevel((prev) => prev + 1)
  const restart = () => setLevel(1)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {level === 1 && <Level1IntroForm onNext={nextLevel} />}
        {level === 2 && <Level2MathForm onNext={nextLevel} />}
        {level === 3 && <Level3ColorForm onNext={nextLevel} />}
        {level === 4 && <Level4SecretWordForm onNext={nextLevel} />}
        {level === 5 && <Level5SurveyForm onNext={nextLevel} />}
        {level === 6 && <Level6ProfileForm onNext={nextLevel} />}
        {level === 7 && <Level7Victory onRestart={restart} />}
      </div>
    </div>
  )
}
