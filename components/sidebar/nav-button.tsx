import React from "react";
import { IconType } from "react-icons/lib";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  text: string;
  outlineIcon: IconType;
  fillIcon: IconType;
  href: string;
  active: boolean;
};

const NavButton = ({ text, outlineIcon, fillIcon, href, active }: Props) => {
  const Icon = active ? fillIcon : outlineIcon;

  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        variant="ghost"
        size="default"
        className={cn(
          "flex w-full py-2 px-1.5 font-inter rounded-md text-sm font-normal justify-start gap-2 text-foreground",
          active && "bg-foreground/15 text-foreground"
        )}
      >
        <Icon className={cn("h-5 w-5 text-foreground/70")} />
        {text}
      </Button>
    </Link>
  );
};

export default NavButton;
