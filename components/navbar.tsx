import Image from "next/image";
import { Button } from "./ui/button";
import { FaChevronDown } from "react-icons/fa6";
import { ResourcesHoverCard } from "@/app/(main)/resources-hover-card";

type Props = {};

export const Navbar = ({}: Props) => {
  return (
    <nav className="py-4 flex items-center justify-center w-full px-12">
      <div className="w-4/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            height={50}
            width={50}
            className="rounded-lg"
            src="/logo.svg"
            alt="Tache"
          />
          <div className=" flex flex-col">
            <h2 className="font-balooBhai font-semibold text-3xl text-secondary">
              tâche
            </h2>
            <p className="font-balooBhai text-sm font-medium text-light">
              by Bramble
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Button variant="ghost">Features</Button>
          <ResourcesHoverCard>
            <Button variant="ghost" className="gap-1">
              Resources
              <FaChevronDown className="h-3 w-3" />
            </Button>
          </ResourcesHoverCard>
          <Button variant="ghost">Pricing</Button>
          <div className="h-[22px] w-[0.5px] bg-foreground opacity-30" />
          <Button variant="ghost">Log in</Button>
          <Button>Start for free</Button>
        </div>
      </div>
    </nav>
  );
};
