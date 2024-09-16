"use client";

import React, { useEffect, useState, useCallback } from "react";
import ProjectNavButton from "./project-nav-button";

import { Button } from "../ui/button";
import ShortcutTooltip from "../shortcut-tooltip";
import { IoAdd } from "react-icons/io5";
import { useAddProjectModal } from "@/store/use-add-project-modal";
import { useKey } from "react-use";
import { Skeleton } from "../ui/skeleton";
import { useProjectStore } from "@/store/use-projects";
import { canTriggerShortcut } from "@/lib/utils";

type Props = {};

const Projects = ({}: Props) => {
  const { projects, setProjects } = useProjectStore();
  const { isOpen, open, isLoading, setLoading } = useAddProjectModal();

  const handleShortcut = useCallback(
    (event: KeyboardEvent) => {
      if (canTriggerShortcut()) {
        event.preventDefault();
        !isOpen && open();
      }
    },
    [open, isOpen]
  );

  // setOpen -> true on p/P key press
  useKey("p", handleShortcut, {}, [handleShortcut]);
  useKey("P", handleShortcut, {}, [handleShortcut]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, [setProjects]);

  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex pb-4 items-center w-full justify-between">
        <h3 className="font-inter text-foreground/70 font-semibold text-sm">
          My Projects
        </h3>
        <ShortcutTooltip text="Add project" shortcut="P">
          <Button variant={"ghost"} size={"icon"} onClick={open}>
            <IoAdd className="h-5 w-5 text-foreground" />
          </Button>
        </ShortcutTooltip>
      </div>
      <div className="flex flex-col h-[17rem] overflow-scroll w-full">
        {!isLoading ? (
          projects.map((project) => (
            <ProjectNavButton
              icon={project.icon}
              key={project.id}
              themeColor={project.color}
              id={project.id}
              text={project.name}
            />
          ))
        ) : (
          <>
            <div className="w-full flex gap-3 py-2 items-center px-1.5 rounded-md">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="w-14 h-3 rounded-md" />
            </div>
            <div className="w-full flex gap-3 py-2 items-center px-1.5 rounded-md">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="w-14 h-3 rounded-md" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
