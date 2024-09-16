import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useProjectStore } from "@/store/use-projects";
import Icon from "./icon";
import { IoFileTrayOutline } from "react-icons/io5";
import { Check, ChevronDown, Hash } from "lucide-react";
import { Input } from "./ui/input";

type ProjectSelectProps = {
  projectId: number | null;
  setProjectId: (projectId: number | null) => void;
};

export const ProjectSelect = ({
  projectId,
  setProjectId,
}: ProjectSelectProps) => {
  const { projects } = useProjectStore();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setSearch("");
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className="rounded-md text-foreground/70 hover:text-foreground/90 flex items-center justify-between px-1.5"
          variant="ghost"
        >
          <div className="flex items-center mr-1.5 gap-1">
            {projectId ? (
              <Hash
                className="text-foreground/70 w-4 h-4"
                style={{
                  color: projects.find((p) => p.id === projectId)?.color,
                }}
              />
            ) : (
              <IoFileTrayOutline className="text-foreground/70" />
            )}
            <span className="text-[13px] font-medium">
              {projectId
                ? projects.find((p) => p.id === projectId)?.name
                : "Inbox"}
            </span>
          </div>
          <ChevronDown className="w-3 h-3 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] text-foreground p-0">
        <div className="p-1.5">
          <Input
            placeholder="Type a project name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent"
          />
        </div>

        <div className="flex flex-col max-h-[250px] overflow-y-auto">
          {!search ||
          search === "" ||
          search.toLowerCase().includes("inbox") ? (
            <Button
              variant="ghost"
              className="w-full rounded-none text-sm font-inter font-light justify-between"
              onClick={() => {
                setProjectId(null);
                close();
              }}
            >
              <div className="flex items-center">
                <IoFileTrayOutline className="w-4 h-4 mr-2" />
                Inbox
              </div>
              {projectId === null ? (
                <Check className="w-4 h-4 text-foreground" />
              ) : null}
            </Button>
          ) : null}
          <h3 className="text-sm font-semibold font-inter px-4 py-2 text-foreground sticky top-0 bg-popover">
            My Projects
          </h3>
          <div>
            {projects
              .filter((p) =>
                p.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((p) => (
                <Button
                  variant="ghost"
                  key={p.id}
                  onClick={() => {
                    setProjectId(p.id);
                    close();
                  }}
                  className="w-full pl-6 rounded-none text-sm font-inter font-light justify-between"
                >
                  <div className="flex items-center">
                    <Hash className="w-4 h-4 mr-2" style={{ color: p.color }} />
                    {p.name}
                  </div>
                  {projectId === p.id ? (
                    <Check className="w-3 h-3 text-foreground" />
                  ) : null}
                </Button>
              ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
