import Sidebar from "@/components/sidebar";
import React from "react";
import { AddTaskModal } from "@/components/modals/add-task-modal";
import { AddProjectModal } from "@/components/modals/add-project-modal";

type Props = {
  children: React.ReactNode;
};

const WorkspaceLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex w-screen">
      <Sidebar />
      <AddTaskModal />
      <AddProjectModal />
      {children}
    </div>
  );
};

export default WorkspaceLayout;
