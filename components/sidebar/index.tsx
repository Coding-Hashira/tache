import React, { useState } from "react";
import Header from "./header";
import AddTaskButton from "./add-task-button";
import NavButton from "./nav-button";
import {
  IoCalendarClear,
  IoCalendarClearOutline,
  IoFileTrayFull,
  IoFileTrayOutline,
  IoPricetag,
  IoPricetagOutline,
} from "react-icons/io5";
import { BsCalendarDate, BsCalendarDateFill } from "react-icons/bs";
import Projects from "./projects";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <div className="max-h-screen overflow-hidden relative z-20 text-foreground p-3 max-w-[275px] w-1/4 bg-[#262626]">
      <Header />
      <div className="px-1">
        <div className="py-4">
          <AddTaskButton />
        </div>
        <div className="space-y-1 pb-12">
          <NavButton
            fillIcon={IoFileTrayFull}
            outlineIcon={IoFileTrayOutline}
            text="Inbox"
            active
          />
          <NavButton
            fillIcon={BsCalendarDateFill}
            outlineIcon={BsCalendarDate}
            text="Today"
          />
          <NavButton
            fillIcon={IoCalendarClear}
            outlineIcon={IoCalendarClearOutline}
            text="Upcoming"
          />
          <NavButton
            fillIcon={IoPricetag}
            outlineIcon={IoPricetagOutline}
            text="Tags"
          />
        </div>
        <div className="px-0.5">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
