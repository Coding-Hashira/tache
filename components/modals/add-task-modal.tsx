"use client";

import { useAddTaskModal } from "@/store/use-add-task-modal";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FiMoreHorizontal } from "react-icons/fi";
import { TaskOptionsPopover } from "../task-options-popover";
import { useState } from "react";
import { PriorityTag } from "../priority-tag";
import { DateTag } from "../date.tag";
import { ProjectSelect } from "../project-select";
import { toast } from "sonner";
import { useCallback } from "react";
import { Task } from "@/store/use-tasks";
import { useTaskStore } from "@/store/use-tasks";

export const AddTaskModal = () => {
  const { isOpen, close, setLoading } = useAddTaskModal();
  const [taskData, setTaskData] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    dueDate: new Date(),
    completed: false,
    createdAt: new Date(),
    projectId: null,
    priority: 3,
    updatedAt: new Date(),
    links: [],
    attachments: [],
  });
  const { addTask } = useTaskStore();

  const handleAddTask = useCallback(() => {
    const { id, ...currentTaskData } = { ...taskData };
    setLoading(true);
    close();
    setTaskData({
      id: 0,
      title: "",
      description: "",
      dueDate: new Date(),
      completed: false,
      createdAt: new Date(),
      projectId: null,
      priority: 3,
      updatedAt: new Date(),
      links: [],
      attachments: [],
    });

    fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(currentTaskData),
    })
      .then((res) => res.json())
      .then((data) => {
        addTask(data);
        toast.success("Task added successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error adding task");
      })
      .finally(() => setLoading(false));
  }, [taskData, close, setLoading, addTask]);

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent closeButton={false} className="p-3.5 sm:max-w-[425px]">
        {/* make it todoist like */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Input
              placeholder="Task name"
              className="text-lg p-0 font-semibold bg-transparent font-inter placeholder:text-lg placeholder:font-semibold rounded-b-none border-0 ring-0"
              value={taskData.title}
              onChange={(e) =>
                setTaskData({ ...taskData, title: e.target.value })
              }
            />
            <Textarea
              placeholder="Description"
              className="border-0 mb-2.5 placeholder:text-sm mt-1.5 text-sm p-0 rounded-t-none bg-transparent ring-0 resize-none overflow-y-auto"
              value={taskData.description || ""}
              onChange={(e) => {
                const textarea = e.target;
                textarea.style.height = "auto";
                const newHeight = textarea.scrollHeight;
                textarea.style.height = `${Math.max(40, Math.min(newHeight, 220))}px`;
                setTaskData({ ...taskData, description: e.target.value });
              }}
              style={{
                minHeight: "40px",
                height: "40px",
                maxHeight: "220px",
              }}
            />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {
                  <DateTag
                    date={taskData.dueDate || new Date()}
                    setDate={(date) =>
                      setTaskData({ ...taskData, dueDate: date })
                    }
                  />
                }
                {taskData.priority !== 3 && (
                  <PriorityTag
                    priority={taskData.priority}
                    setPriority={(priority) =>
                      setTaskData({ ...taskData, priority })
                    }
                  />
                )}
                <TaskOptionsPopover
                  taskData={taskData}
                  setTaskData={setTaskData}
                >
                  <Button
                    variant="ghostOutline"
                    size="icon"
                    className="w-fit h-fit px-1.5 py-1"
                  >
                    <FiMoreHorizontal className="box-content p-0 w-5 h-5 text-foreground/80" />
                  </Button>
                </TaskOptionsPopover>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex items-center sm:justify-between justify-between">
          <ProjectSelect
            projectId={taskData.projectId}
            setProjectId={(projectId: number | null) =>
              setTaskData({ ...taskData, projectId })
            }
          />
          <div className="flex items-center justify-center gap-2">
            <Button
              className="text-sm font-inter font-medium rounded-md"
              onClick={close}
              variant="ghost"
            >
              Cancel
            </Button>
            <Button
              className="text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary disabled:hover:bg-primary disabled:active:bg-primary font-inter font-medium rounded-md"
              disabled={taskData.title === ""}
              onClick={handleAddTask}
            >
              Add
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
