import React from "react";
import { IconType } from "react-icons/lib";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Icon from "../icon";

type Props = {
  text: string;
  id: number;
  themeColor: string;
  icon: number;
  active?: boolean;
  onClick?: () => void;
};

const ProjectNavButton = ({ active, id, text, themeColor, icon }: Props) => {
  return (
    <Button
      variant={"ghost"}
      size={"default"}
      className={cn(
        "flex w-full py-2 active:bg-foreground/15 hover:bg-foreground/10 px-1.5 font-inter rounded-md text-sm font-normal justify-between text-foreground",
        active && "bg-primary/15"
      )}
    >
      <div className="flex items-center justify-center gap-3">
        <Icon
          className={cn("h-6 w-6 text-foreground p-2 box-content rounded-md")}
          style={{ backgroundColor: themeColor }}
          id={icon}
        />
        {text}
      </div>
      <ChevronRight className="w-4 h-4 text-foreground/70" />
    </Button>
  );
};

export default ProjectNavButton;
