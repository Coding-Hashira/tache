"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useKey } from "react-use";
import { colors } from "@/constants";
import { useEffect, useState } from "react";
import IconPicker from "../icon-picker";
import { LoaderCircle } from "lucide-react";
import { IoAdd } from "react-icons/io5";
import ShortcutTooltip from "../shortcut-tooltip";
import { useProjectStore } from "@/store/use-projects";
import { toast } from "sonner";
import { useAddProjectModal } from "@/store/use-add-project-modal";
import { useCallback } from "react";

export function AddProjectModal() {
  const [icon, setIcon] = useState(0);
  const [name, setName] = useState("");
  const [color, setColor] = useState(1);
  const { isOpen, close, setLoading } = useAddProjectModal();
  const { addProject } = useProjectStore();

  const handleAddProject = useCallback(() => {
    setLoading(true);
    const projectData = {
      name: name,
      color: colors[color].color,
      icon: icon,
    };

    // Close the modal immediately
    close();

    // Reset the form
    setName("");
    setColor(1);
    setIcon(0);

    // Perform the API call in the background
    fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then(async (response) => {
        if (response.ok) {
          const project = await response.json();
          addProject(project);
          toast.success("Project added successfully!");
        } else {
          throw new Error("Failed to add project");
        }
      })
      .catch((error) => {
        console.error("Error adding project:", error);
        toast.error("Error adding project!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name, color, icon, close, addProject, setLoading]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="border-b pb-2 border-b-foreground/10">
          <DialogTitle>Add project</DialogTitle>
        </DialogHeader>

        <div className=" space-y-2">
          <Label htmlFor="name" className="font-inter font-semibold">
            Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="color" className="font-inter font-semibold">
            Color
          </Label>
          <Select
            defaultValue={colors[color]?.color ?? "#d62b6f"}
            onValueChange={(value) => {
              setColor(colors.findIndex((color) => color.color === value));
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup id="color">
                {colors.map((color) => (
                  <SelectItem key={color.id} defaultChecked value={color.color}>
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className="rounded-full h-3 w-3 "
                        style={{ background: color.color }}
                      />
                      {color.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 pb-3 ">
          <Label className="font-inter font-semibold">Icon</Label>
          <IconPicker selected={icon} setSelected={setIcon} />
        </div>

        <DialogFooter>
          <Button
            onClick={close}
            className="text-sm rounded-md font-medium"
            variant="ghost"
          >
            Cancel
          </Button>
          <Button
            className="text-sm rounded-md font-medium"
            onClick={handleAddProject}
            disabled={!name.trim()}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
