"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { BsFillFlagFill, BsFlag } from "react-icons/bs";
import {
  IoAttachOutline,
  IoLinkOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { UpgradeTag } from "./upgrade-tag";
import { Task } from "@/store/use-tasks";

interface TaskOptionsPopoverProps {
  children: React.ReactNode;
  taskData: Task;
  setTaskData: React.Dispatch<React.SetStateAction<Task>>;
}

export const TaskOptionsPopover: React.FC<TaskOptionsPopoverProps> = ({
  children,
  taskData,
  setTaskData,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-56 p-0 text-foreground">
        {/* Add your popover content here */}
        <div className="space-y-2">
          {taskData.priority === 3 && (
            <section className="flex flex-col p-3 pb-0 gap-3">
              <h3 className=" text-xs font-normal font-inter">Priority</h3>
              <div className="flex w-full px-1.5 items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setTaskData({ ...taskData, priority: 0 });
                    setOpen(false);
                  }}
                  className="p-1.5"
                  size="icon"
                >
                  <BsFillFlagFill className="w-5 h-5 text-red-500" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setTaskData({ ...taskData, priority: 1 });
                    setOpen(false);
                  }}
                  className="p-1.5"
                  size="icon"
                >
                  <BsFillFlagFill className="w-5 h-5 text-orange-500" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setTaskData({ ...taskData, priority: 2 });
                    setOpen(false);
                  }}
                  className="p-1.5"
                  size="icon"
                >
                  <BsFillFlagFill className="w-5 h-5 text-blue-500" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setTaskData({ ...taskData, priority: 3 });
                    setOpen(false);
                  }}
                  className="p-1.5 border border-foreground/10"
                  size="icon"
                >
                  <BsFlag className="w-5 h-5 text-foreground/50" />
                </Button>
              </div>
            </section>
          )}
          <div className="h-px w-full bg-foreground/10" />
          <div className="p-2 pt-0">
            <Button
              variant="ghost"
              onClick={() => {
                // TODO: Implement tags feature
                setOpen(false);
              }}
              className="w-full font-inter text-sm font-light px-1 text-foreground justify-start gap-3"
            >
              <IoPricetagOutline className="w-6 text-foreground/50 h-6" />
              Tags
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                // TODO: Implement link feature
                setOpen(false);
              }}
              className="w-full font-inter text-sm font-light px-1 text-foreground justify-start gap-3"
            >
              <IoLinkOutline className="w-6 text-foreground/50 h-6" />
              Link
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                // TODO: Implement attachment feature
                // TODO: Implement premium
                setOpen(false);
              }}
              className="w-full font-inter text-sm font-light px-1 text-foreground justify-start gap-3"
            >
              <IoAttachOutline className="w-6 text-foreground/50 h-6" />
              Attachments
              <UpgradeTag />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
