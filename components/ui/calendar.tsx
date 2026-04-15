"use client"

import * as React from "react"
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type CalendarProps = {
  className?: string
  disabled?: (date: Date) => boolean
  month?: Date
  onMonthChange?: (month: Date) => void
  onSelect?: (date: Date) => void
  selected?: Date
  showOutsideDays?: boolean
}

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

function Calendar({
  className,
  disabled,
  month,
  onMonthChange,
  onSelect,
  selected,
  showOutsideDays = true,
}: CalendarProps) {
  const [internalMonth, setInternalMonth] = React.useState(month ?? selected ?? new Date())
  const activeMonth = month ?? internalMonth

  React.useEffect(() => {
    if (month) {
      setInternalMonth(month)
    }
  }, [month])

  const handleMonthChange = (nextMonth: Date) => {
    setInternalMonth(nextMonth)
    onMonthChange?.(nextMonth)
  }

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(activeMonth)),
    end: endOfWeek(endOfMonth(activeMonth)),
  })

  return (
    <div className={cn("p-3", className)}>
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0")}
          onClick={() => handleMonthChange(subMonths(activeMonth, 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-sm font-medium">{format(activeMonth, "MMMM yyyy")}</div>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7 bg-transparent p-0")}
          onClick={() => handleMonthChange(addMonths(activeMonth, 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="flex h-9 items-center justify-center text-[0.8rem] text-muted-foreground"
          >
            {day}
          </div>
        ))}

        {days.map((day) => {
          const isSelected = selected ? isSameDay(day, selected) : false
          const isOutside = !isSameMonth(day, activeMonth)
          const isDisabled = disabled?.(day) ?? false

          if (isOutside && !showOutsideDays) {
            return <div key={day.toISOString()} className="h-9 w-9" />
          }

          return (
            <button
              key={day.toISOString()}
              type="button"
              disabled={isDisabled}
              onClick={() => onSelect?.(day)}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-9 w-9 p-0 font-normal",
                isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                isOutside && "text-muted-foreground opacity-50",
                isDisabled && "cursor-not-allowed opacity-40"
              )}
            >
              {format(day, "d")}
            </button>
          )
        })}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
