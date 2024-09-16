"use client";

import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useKey } from "react-use";
import ShortcutTooltip from "../shortcut-tooltip";
import { useAddTaskModal } from "@/store/use-add-task-modal";
import { canTriggerShortcut } from "@/lib/utils";

type Props = {};

const AddTaskButton = ({}: Props) => {
  const { open, isOpen } = useAddTaskModal();

  const handleShortcut = useCallback(
    (event: KeyboardEvent) => {
      if (canTriggerShortcut()) {
        event.preventDefault();
        !isOpen && open();
      }
    },
    [open, isOpen]
  );

  useKey("n", handleShortcut, {}, [handleShortcut]);
  useKey("N", handleShortcut, {}, [handleShortcut]);

  return (
    <ShortcutTooltip text="Add task" shortcut="N">
      <Button
        className="w-full group rounded-md justify-start gap-2 px-1"
        variant="ghost"
        onClick={open}
        size="sm"
      >
        <BsFillPlusCircleFill className="box-content h-6 w-6 rounded-full transition-all duration-200 text-primary" />
        <span className="font-inter text-sm text-[rgb(130,84,220)]">
          Add task
        </span>
      </Button>
    </ShortcutTooltip>
  );
};

export default AddTaskButton;
