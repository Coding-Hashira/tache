import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn, formatDueDate } from "@/lib/utils";
import { CgCalendarToday } from "react-icons/cg";
import { DueDateCombobox } from "./due-date-combobox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateTagProps {
  date: Date | null;
  setDate: (date: Date) => void;
}

export const DateTag: React.FC<DateTagProps> = ({ date, setDate }) => {
  const [open, setOpen] = useState(false);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghostOutline"
          className={cn(
            "flex text-sm ring-0 font-light bg-transparent text-foreground/70 justify-center p-1 pr-2 items-center  rounded-md gap-1.5 w-fit",
            date?.toDateString() === today.toDateString() && "text-green-600 ",
            date?.toDateString() === tomorrow.toDateString() &&
              "text-orange-500",
            date &&
              date.getTime() - today.getTime() < 7 * 24 * 60 * 60 * 1000 &&
              date.getTime() - today.getTime() >= 2 * 24 * 60 * 60 * 1000 &&
              "text-violet-700",
            (date &&
              date.getTime() - today.getTime() >= 7 * 24 * 60 * 60 * 1000) ||
              !date
              ? "text-gray-300"
              : ""
          )}
        >
          <CgCalendarToday className="w-4 h-4" />
          <span className="font-inter font-normal text-[13px]">
            {date ? formatDueDate(date) : "No due date"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent side="left" className="p-0">
        <DueDateCombobox
          close={() => setOpen(false)}
          date={date}
          setDate={setDate}
        />
      </PopoverContent>
    </Popover>
  );
};
