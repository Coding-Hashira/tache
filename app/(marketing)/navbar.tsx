"use client";

import Image from "next/image";
import { Button } from "../../components/ui/button";
import { FaChevronDown } from "react-icons/fa6";
import { ResourcesHoverCard } from "@/components/ui/resources-hover-card";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

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
              Tâche
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

          <ClerkLoading>
            <Loader className="w-6 h-6 animate-spin text-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Button variant="ghost">
                <Link href="/dashboard">Continue to app</Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <Link href="sign-in">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="sign-up">
                <Button variant="ghost">Start for free</Button>
              </Link>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </nav>
  );
};
