"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className="max-h-screen min-w-[275px] overflow-hidden relative z-20 text-foreground p-3 max-w-[275px] w-1/4 bg-[#262626]">
      <Header />
      <div className="px-1">
        <div className="py-4">
          <AddTaskButton />
        </div>
        <div className="space-y-1 pb-12">
          <NavButton
            active={currentPath === "/app/inbox"}
            fillIcon={IoFileTrayFull}
            outlineIcon={IoFileTrayOutline}
            text="Inbox"
            href="/app/inbox"
          />
          <NavButton
            active={currentPath === "/app/today"}
            fillIcon={BsCalendarDateFill}
            outlineIcon={BsCalendarDate}
            text="Today"
            href="/app/today"
          />
          <NavButton
            active={currentPath === "/app/upcoming"}
            fillIcon={IoCalendarClear}
            outlineIcon={IoCalendarClearOutline}
            text="Upcoming"
            href="/app/upcoming"
          />
          <NavButton
            active={currentPath === "/app/tags"}
            fillIcon={IoPricetag}
            outlineIcon={IoPricetagOutline}
            text="Tags"
            href="/app/tags"
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
