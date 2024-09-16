import React from "react";
import { BsFillFlagFill, BsFlag } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PriorityTagProps {
  priority: number;
  setPriority: (priority: number) => void;
}

export const PriorityTag: React.FC<PriorityTagProps> = ({
  priority,
  setPriority,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Select
        open={open}
        onOpenChange={setOpen}
        onValueChange={(value) => setPriority(Number(value))}
      >
        <Button variant="ghost" className="relative p-0">
          <SelectTrigger
            hasIcon={false}
            className="flex font-normal text-[13px] ring-0 bg-transparent text-foreground/70 justify-center p-1 pr-5 items-center border border-foreground/15 hover:border-foreground/25 active:border-foreground/30 peer-hover:bg-foreground/15 rounded-md gap-1.5 w-fit"
          >
            <BsFillFlagFill
              className={cn(
                "w-4 h-4",
                priority === 0 && "text-red-500",
                priority === 1 && "text-orange-500",
                priority === 2 && "text-blue-500"
              )}
            />

            {priority === 0 && "P1"}
            {priority === 1 && "P2"}
            {priority === 2 && "P3"}
          </SelectTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 right-0 box-content p-1 z-10 rounded-full hover:bg-transparent active:bg-transparent hover:text-foreground/80 text-foreground/50"
            onClick={(e) => {
              e.stopPropagation();
              setPriority(3);
            }}
          >
            <MdClose className="w-3 h-3" />
          </Button>
        </Button>
        <SelectContent>
          <SelectItem value="0">
            <div className="flex items-center gap-2">
              <BsFillFlagFill className="w-4 h-4 text-red-500" />
              P1
            </div>
          </SelectItem>
          <SelectItem value="1">
            <div className="flex items-center gap-2">
              <BsFillFlagFill className="w-4 h-4 text-orange-500" />
              P2
            </div>
          </SelectItem>
          <SelectItem value="2">
            <div className="flex items-center gap-2">
              <BsFillFlagFill className="w-4 h-4 text-blue-500" />
              P3
            </div>
          </SelectItem>
          <SelectItem value="3">
            <div className="flex items-center gap-2">
              <BsFlag className="w-4 h-4 text-foreground/50" />
              No Priority
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};
