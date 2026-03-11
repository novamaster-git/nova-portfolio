import { useEffect, useState } from "react"

export function CountupComponent() {
  const [mounted, setMounted] = useState(false)
  const [elapsed, setElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setMounted(true)
    // Start date: 17 Oct 2021 9:30 AM (IST offset +05:30)
    const startDate = new Date("2021-10-17T09:30:00+05:30")

    const updateCounter = () => {
      const now = new Date()
      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()
      let hours = now.getHours() - startDate.getHours()
      let minutes = now.getMinutes() - startDate.getMinutes()
      let seconds = now.getSeconds() - startDate.getSeconds()

      if (seconds < 0) {
        seconds += 60
        minutes--
      }
      if (minutes < 0) {
        minutes += 60
        hours--
      }
      if (hours < 0) {
        hours += 24
        days--
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
        days += prevMonth.getDate()
        months--
      }
      if (months < 0) {
        months += 12
        years--
      }

      setElapsed({ years, months, days, hours, minutes, seconds })
    }

    updateCounter()
    const intervalId = setInterval(updateCounter, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const pad = (num: number) => String(num).padStart(2, "0")

  const Unit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex min-w-[60px] flex-col items-center justify-center p-2 uppercase sm:min-w-[80px] sm:p-4">
      <span className="text-4xl font-light tracking-tighter text-foreground/80 tabular-nums sm:text-6xl">
        {mounted ? pad(value) : "00"}
      </span>
      <span className="mt-4 text-[10px] font-medium tracking-[0.2em] text-muted-foreground/50 uppercase sm:text-xs">
        {label}
      </span>
    </div>
  )

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-4">
      <Unit value={elapsed.years} label="Years" />
      <Unit value={elapsed.months} label="Months" />
      <Unit value={elapsed.days} label="Days" />
      <div className="my-auto hidden text-3xl font-light text-muted-foreground/30 sm:block">
        :
      </div>
      <Unit value={elapsed.hours} label="Hours" />
      <Unit value={elapsed.minutes} label="Mins" />
      <Unit value={elapsed.seconds} label="Secs" />
    </div>
  )
}
