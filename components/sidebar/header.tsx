"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Bell, ChevronDown } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const Header = ({}: Props) => {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex w-full items-center justify-between">
      {isLoaded ? (
        <Button
          variant={"ghost"}
          size={"sm"}
          className="flex gap-3 items-center justify-center"
        >
          <Image
            src={user?.imageUrl || ""}
            alt="User"
            height={26}
            width={26}
            className="rounded-full"
          />
          <div className="flex items-center justify-center gap-0.5">
            <h3 className="font-medium text-sm">{user?.firstName || "User"}</h3>
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      ) : (
        <div className="flex items-center gap-3">
          <Skeleton className="h-[26px] w-[26px] rounded-full" />
          <Skeleton className="w-14 h-2.5 rounded-md" />
        </div>
      )}
      <Button variant={"ghost"} size={"icon"}>
        <Bell className="h-5 font-light text-foreground/70 w-5" />
      </Button>
    </div>
  );
};

export default Header;
