"use client";

import React from "react";
import Icon, { icons } from "./icon";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

const IconPicker = ({ selected, setSelected }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <div className="box-content w-fit p-1.5 rounded-md cursor-pointer hover:bg-white/10 active:bg-white/15">
            <Icon className="h-8 w-8" id={selected} />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="grid grid-cols-3 gap-x-6 gap-y-4 text-foreground"
        >
          {icons.map((icon) => (
            <div
              key={icon.id}
              onClick={() => {
                setSelected(icon.id);
                setOpen(false);
              }}
              className={cn(
                "box-content w-fit p-1.5 rounded-md cursor-pointer hover:bg-white/10 active:bg-white/15",
                selected === icon.id && "bg-white/10"
              )}
            >
              <Icon className="h-8 w-8" id={icon.id} />
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default IconPicker;
