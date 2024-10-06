import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { formatDueDate, parseNaturalDate } from "@/lib/utils";
import { BsCalendarDate, BsSun } from "react-icons/bs";
import { Button } from "./ui/button";
import { daysOfWeek } from "@/constants";
import { CgCalendarNext, CgCalendarToday, CgSun } from "react-icons/cg";
import { MdOutlineWeekend } from "react-icons/md";
import { Calendar } from "./ui/calendar";

type DueDateComboboxProps = {
  date: Date | null;
  setDate: (date: Date) => void;
  close: () => void;
};

export const DueDateCombobox = ({
  date,
  setDate,
  close,
}: DueDateComboboxProps) => {
  const [naturalDate, setNaturalDate] = useState("");
  const [tempDate, setTempDate] = useState<Date | null>(null);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);

  // get next saturday
  const nextSaturday = new Date(today);
  nextSaturday.setDate(
    nextSaturday.getDate() + ((6 - nextSaturday.getDay() + 7) % 7) + 7
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNaturalDate(e.target.value);
    const newDate = parseNaturalDate(e.target.value);
    if (newDate !== null) {
      setTempDate(newDate);
    } else {
      setTempDate(null);
    }
  };

  useEffect(() => {
    console.log(nextWeek);
  }, [nextWeek]);

  return (
    <div className="flex flex-col w-[250px] text-foreground">
      <div className="pb-0.5 p-1.5">
        <Input
          value={naturalDate}
          onChange={handleInputChange}
          placeholder="Type a due date"
          className="w-full text-base placeholder:text-base border-none bg-transparent py-2 ring-0 shadow-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && parseNaturalDate(naturalDate) !== null) {
              setDate(parseNaturalDate(naturalDate) as Date);
              close();
            }
          }}
        />
      </div>
      <div className="w-full h-px bg-foreground/20  mt-1" />
      {tempDate && tempDate > new Date() && (
        <>
          <Button
            variant="ghost"
            size="full"
            onClick={() => {
              setDate(tempDate);
              close();
            }}
            className="flex rounded-none justify-start px-4 py-2 gap-3 items-center my-0.5"
          >
            <CgCalendarToday className="w-6 h-6 text-foreground/80" />
            <span className="font-inter text-sm text-foreground font-medium">
              {`${daysOfWeek[tempDate.getDay()].slice(0, 3)} ${formatDueDate(tempDate, true)}`}
            </span>
          </Button>
          <div className="w-full h-px bg-foreground/20  mt-1" />
        </>
      )}
      <div className="flex flex-col my-0.5">
        {date?.toDateString() !== today.toDateString() && (
          <Button
            variant="ghost"
            size="full"
            onClick={() => {
              setDate(today);
              close();
            }}
            className="flex px-4 rounded-none py-2 items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <BsCalendarDate className="h-[18px] w-[18px] text-green-600" />
              <span className="font-inter text-sm font-light text-foreground">
                Today
              </span>
            </div>
            <span className="text-sm font-light font-inter text-foreground/80">
              {daysOfWeek[today.getDay()].slice(0, 3)}
            </span>
          </Button>
        )}
        {date?.toDateString() !== tomorrow.toDateString() && (
          <Button
            variant="ghost"
            size="full"
            onClick={() => {
              setDate(tomorrow);
              close();
            }}
            className="flex px-4 rounded-none py-2 items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <CgSun className="h-[18px] w-[18px] text-orange-500" />
              <span className="font-inter text-sm font-light text-foreground">
                Tomorrow
              </span>
            </div>
            <span className="text-sm font-light font-inter text-foreground/80">
              {daysOfWeek[tomorrow.getDay()].slice(0, 3)}
            </span>
          </Button>
        )}
        <Button
          variant="ghost"
          size="full"
          onClick={() => {
            setDate(nextWeek);
            close();
          }}
          className="flex px-4 rounded-none py-2 items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <CgCalendarNext className="h-[18px] w-[18px] text-violet-700" />
            <span className="font-inter text-sm font-light text-foreground">
              Next week
            </span>
          </div>
          <span className="text-sm font-light font-inter text-foreground/80">
            {`${daysOfWeek[nextWeek.getDay()].slice(0, 3)} ${formatDueDate(nextWeek)}`}
          </span>
        </Button>
        <Button
          variant="ghost"
          size="full"
          onClick={() => {
            setDate(nextSaturday);
            close();
          }}
          className="flex px-4 rounded-none py-2 items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <MdOutlineWeekend className="h-[18px] w-[18px] text-blue-500" />
            <span className="font-inter text-sm font-light text-foreground">
              Next weekend
            </span>
          </div>
          <span className="text-sm font-light font-inter text-foreground/80">
            {`${daysOfWeek[nextSaturday.getDay()].slice(0, 3)} ${formatDueDate(nextSaturday)}`}
          </span>
        </Button>
      </div>
      <div className="w-full h-px bg-foreground/20  mt-1" />
      <Calendar
        mode="single"
        onSelect={(date: Date | undefined) => date && setDate(date)}
      />
    </div>
  );
};
