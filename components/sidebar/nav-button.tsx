import React, { act } from "react";
import { IconType } from "react-icons/lib";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  outlineIcon: IconType;
  fillIcon: IconType;
  active?: boolean;
  onClick?: () => void;
};

const NavButton = ({ text, outlineIcon, fillIcon, active }: Props) => {
  const Icon = active ? fillIcon : outlineIcon;
  return (
    <Button
      variant={"ghost"}
      size={"default"}
      className={cn(
        "flex w-full py-2 px-1.5 font-inter rounded-md text-sm font-normal justify-start gap-2 text-foreground",
        active && "bg-foreground/15 text-foreground"
      )}
    >
      <Icon className={cn("h-5 w-5 text-foreground/70")} />
      {text}
    </Button>
  );
};

export default NavButton;
