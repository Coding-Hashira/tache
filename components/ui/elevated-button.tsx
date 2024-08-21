"use client";

import { Button } from "./button";

type Props = {
  children: React.ReactNode;
};

export const ElevatedButton = ({ children }: Props) => {
  return (
    <div className="relative cursor-pointer group">
      <div className="absolute group-active:translate-y-2 group-hover:translate-y-1 transition-all duration-200 w-full overflow-hidden rounded-lg h-full z-20">
        <div className="w-full -top-[55%] -left-[55%] rounded-lg z-20 h-full -rotate-45 absolute bg-primaryHover " />
      </div>
      <Button
        variant="noEffect"
        size="lg"
        className="relative text-lg group-active:translate-y-2 group-hover:translate-y-1 transition-all duration-200 z-10"
      >
        {children}
      </Button>
      <div className="w-full rounded-lg -bottom-2 h-full absolute bg-secondary " />
    </div>
  );
};
