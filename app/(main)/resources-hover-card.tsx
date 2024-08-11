import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  BsLightbulb,
  BsLightningCharge,
  BsPuzzle,
  BsQuestion,
} from "react-icons/bs";
import { FaLightbulb, FaQuestion, FaRegLightbulb } from "react-icons/fa6";
import { FiLifeBuoy } from "react-icons/fi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";

type Props = {
  children: React.ReactNode;
};

export const ResourcesHoverCard = ({ children }: Props) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80 space-y-2.5 p-[5px] border-foreground/10 rounded-lg shadow-[0px_1px_19px_0px_rgba(42,28,49,0.06),0px_0px_36px_0px_hsla(0,0%,0%,0.6)] border-[1px] bg-background">
        {/* TODO: Add links to the resources */}
        {/* TODO: Modularise */}
        <div className="w-full py-2 px-2 cursor-pointer hover:bg-secondary/5 rounded-lg flex items-start">
          <div className="px-2 py-1">
            <IoExtensionPuzzleOutline className="h-4 w-4 text-foreground/60" />
          </div>
          <div className="flex gap-1 flex-col">
            <h4 className="font-inter text-foreground text-sm font-medium">
              Integrations
            </h4>
            <p className="text-foreground/60 text-sm font-inter">
              Connect Tâche with your other tools
            </p>
          </div>
        </div>
        <div className="w-full py-2 px-2 cursor-pointer hover:bg-secondary/5 rounded-lg flex items-start">
          <div className="px-2 py-1">
            <BsLightningCharge className="h-4 w-4 text-foreground/60" />
          </div>
          <div className="flex gap-1 flex-col">
            <h4 className="font-inter text-foreground text-sm font-medium">
              Getting Started
            </h4>
            <p className="text-foreground/60 text-sm font-inter">
              Get up and running in minutes
            </p>
          </div>
        </div>
        <div className="w-full py-2 px-1 cursor-pointer hover:bg-secondary/5 rounded-lg flex items-start">
          <div className="px-2 py-1">
            <FiLifeBuoy className="h-4 w-4 text-foreground/60" />
          </div>
          <div className="flex gap-1 flex-col">
            <h4 className="font-inter text-foreground text-sm font-medium">
              Help Center
            </h4>
            <p className="text-foreground/60 text-sm font-inter">
              Find answers to all your questions
            </p>
          </div>
        </div>
        <div className="w-full py-2 px-1 cursor-pointer hover:bg-secondary/5 rounded-lg flex items-start">
          <div className="px-2 py-1">
            <FaQuestion className="h-4 w-4 text-foreground/60" />
          </div>
          <div className="flex gap-1 flex-col">
            <h4 className="font-inter text-foreground text-sm font-medium">
              Productivity Quiz
            </h4>
            <p className="text-foreground/60 text-sm font-inter">
              Discover what works best for you
            </p>
          </div>
        </div>
        <div className="w-full py-2 px-1 cursor-pointer hover:bg-secondary/5 rounded-lg flex items-start">
          <div className="px-2 py-1">
            <FaRegLightbulb className="h-4 w-4 text-foreground/60" />
          </div>
          <div className="flex gap-1 flex-col">
            <h4 className="font-inter text-foreground text-sm font-medium">
              Inspiration Hub
            </h4>
            <p className="text-foreground/60 text-sm font-inter">
              Productivity advice and Bramble tips
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
