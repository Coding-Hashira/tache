import Sidebar from "@/components/sidebar";
import React from "react";
import { AddTaskModal } from "@/components/modals/add-task-modal";
import { AddProjectModal } from "@/components/modals/add-project-modal";
import { AddTagsModal } from "@/components/modals/add-tags-modal";

type Props = {
  children: React.ReactNode;
};

const WorkspaceLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex w-screen">
      <Sidebar />
      <AddTaskModal />
      <AddTagsModal />
      <AddProjectModal />
      <div className="w-full flex overflow-y-auto p-4 justify-center text-foreground">
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
