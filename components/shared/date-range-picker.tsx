"use client";

import React, { useState } from "react";
import { DateTime } from "luxon";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { DEFAULT_DATE_FORMAT } from "@/constants";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DateRangeParams = {
  start?: number;
  end?: number;
};

type DateRangePickerProps = {
  onDateRangeSelected: (dateRange: DateRangeParams) => void;
};

const DateRangePicker = ({ onDateRangeSelected }: DateRangePickerProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>(undefined);

  const onClearDateSelection = () => {
    setDate(undefined);
  };

  const onCancelDateSelection = () => {
    setDate(undefined);
    setOpen(false);
  };

  const onApplyDateSelection = () => {
    if (!date?.from || !date?.to) {
      return toast.error("Please select a date range", { duration: 5000 });
    }

    onDateRangeSelected({
      start: DateTime.fromJSDate(date.from).toUnixInteger(),
      end: DateTime.fromJSDate(date.to).toUnixInteger(),
    });
    setOpen(false);
  };

  return (
    <div className="flex gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "justify-start h-12 w-full",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 size-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {DateTime.fromJSDate(date.from).toFormat(DEFAULT_DATE_FORMAT)}{" "}
                  - {DateTime.fromJSDate(date.to).toFormat(DEFAULT_DATE_FORMAT)}
                </>
              ) : (
                DateTime.fromJSDate(date.from).toFormat(DEFAULT_DATE_FORMAT)
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
          <div className="flex gap-6 px-8 pb-6 pt-4 justify-stretch">
            <Button className="bg-red-400" onClick={onCancelDateSelection}>
              Cancel
            </Button>
            <Button variant="outline" onClick={onClearDateSelection}>
              Clear
            </Button>
            <Button className="bg-brand" onClick={onApplyDateSelection}>
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangePicker;
