"use client"

import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  getDay,
  isBefore,
  isAfter,
  startOfDay
} from 'date-fns';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  excludeDates?: Date[];
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  name?: string;
}

export function DatePicker({
  value,
  onChange,
  label,
  placeholder = 'Select date',
  minDate,
  maxDate,
  excludeDates = [],
  required = false,
  disabled = false,
  errorMessage,
  name,
}: DatePickerProps) {
  const [month, setMonth] = useState(value || new Date());
  const [open, setOpen] = useState(false);

  const days = eachDayOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  });

  // Add empty slots for the days of the week before the first day of the month
  const firstDayOfMonth = getDay(startOfMonth(month));
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleDateSelect = (date: Date) => {
    onChange(date);
    setOpen(false);
  };

  const isDateDisabled = (date: Date) => {
    const day = startOfDay(date);
    
    if (minDate && isBefore(day, startOfDay(minDate))) {
      return true;
    }

    if (maxDate && isAfter(day, startOfDay(maxDate))) {
      return true;
    }

    return excludeDates.some(excludeDate => 
      isSameDay(day, excludeDate)
    );
  };

  return (
    <div className="flex flex-col space-y-1.5">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild disabled={disabled}>
          <button
            id={name}
            type="button"
            className={`w-full px-3 py-2 flex items-center justify-between rounded-md border
              ${errorMessage ? 'border-red-500' : 'border-gray-300'} 
              ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}
              text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
          >
            {value ? (
              <span>{format(value, 'PPP')}</span>
            ) : (
              <span className="text-gray-400">{placeholder}</span>
            )}
            <Calendar className="h-4 w-4 text-gray-500" />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content 
            className="bg-white p-4 rounded-md shadow-lg border border-gray-200 w-auto z-50"
            align="start"
            sideOffset={5}
          >
            <div className="w-[280px]">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setMonth(subMonths(month, 1))}
                  className="p-1 rounded-full hover:bg-gray-100"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <h2 className="text-sm font-medium">
                  {format(month, 'MMMM yyyy')}
                </h2>
                <button
                  onClick={() => setMonth(addMonths(month, 1))}
                  className="p-1 rounded-full hover:bg-gray-100"
                  aria-label="Next month"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div 
                    key={day} 
                    className="text-center text-xs font-medium text-gray-500 py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {emptyDays.map((_, index) => (
                  <div key={`empty-${index}`} className="h-8 w-8"></div>
                ))}

                {days.map((day) => {
                  const isToday = isSameDay(day, new Date());
                  const isSelected = value && isSameDay(day, value);
                  const isDisabled = isDateDisabled(day);
                  
                  return (
                    <button
                      key={day.toString()}
                      type="button"
                      onClick={() => !isDisabled && handleDateSelect(day)}
                      disabled={isDisabled}
                      className={`
                        h-8 w-8 rounded-md flex items-center justify-center text-sm
                        ${isToday && !isSelected ? 'border border-amber-500' : ''}
                        ${isSelected ? 'bg-amber-500 text-white font-semibold' : ''}
                        ${!isSelected && !isDisabled ? 'hover:bg-gray-100' : ''}
                        ${isDisabled ? 'text-gray-300 cursor-not-allowed' : ''}
                      `}
                    >
                      {format(day, 'd')}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    const today = new Date();
                    if (!isDateDisabled(today)) {
                      handleDateSelect(today);
                    }
                  }}
                  className="text-xs text-amber-600 hover:text-amber-800 font-medium"
                >
                  Today
                </button>
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      {errorMessage && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
} 