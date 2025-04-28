"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center min-w-[120px]">
        <div className="text-4xl md:text-5xl font-bold text-primary">{timeLeft.days}</div>
        <div className="text-gray-600 mt-2">Days</div>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center min-w-[120px]">
        <div className="text-4xl md:text-5xl font-bold text-primary">{timeLeft.hours}</div>
        <div className="text-gray-600 mt-2">Hours</div>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center min-w-[120px]">
        <div className="text-4xl md:text-5xl font-bold text-primary">{timeLeft.minutes}</div>
        <div className="text-gray-600 mt-2">Minutes</div>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-center min-w-[120px]">
        <div className="text-4xl md:text-5xl font-bold text-primary">{timeLeft.seconds}</div>
        <div className="text-gray-600 mt-2">Seconds</div>
      </div>
    </div>
  )
}

