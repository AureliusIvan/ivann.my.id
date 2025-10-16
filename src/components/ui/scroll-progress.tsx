'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      setProgress(progress)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress() // Initial call

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-150 ease-out shadow-lg shadow-blue-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
