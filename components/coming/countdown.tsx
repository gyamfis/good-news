"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export function Countdown({ targetDate, className, ...props }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents: JSX.Element[] = []

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof TimeLeft]
    if (value >= 0) {
      timerComponents.push(
        <div
          key={interval}
          className="flex flex-col items-center p-6 bg-white/10 border border-white/20 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/15"
        >
          <span className="text-5xl md:text-7xl font-extrabold tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base text-gray-300 uppercase tracking-wider mt-2">{interval}</span>
        </div>,
      )
    }
  })

  return (
    <div className={cn("flex justify-center space-x-4 md:space-x-8 my-8", className)} {...props}>
      {timerComponents.length ? timerComponents : <span className="text-xl text-gray-300">Time's up!</span>}
    </div>
  )
}
