import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Props = {
  children: React.ReactNode;
  text: string;
  shortcut: string;
  secondaryShortcut?: string;
};

const ShortcutTooltip = ({
  children,
  text,
  shortcut,
  secondaryShortcut,
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="flex font-inter items-center justify-center gap-2"
          side="right"
        >
          <p className="font-inter pr-1.5">{text}</p>
          <kbd className="bg-foreground/40 rounded-sm flex items-center justify-center h-4 w-4 font-inter font-medium">
            {shortcut}
          </kbd>
          {secondaryShortcut && (
            <>
              <p>then</p>
              <kbd className="bg-foreground/40 rounded-sm flex items-center justify-center h-4 w-4 font-inter font-medium">
                {secondaryShortcut}
              </kbd>
            </>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ShortcutTooltip;
