"use client";

import { Navbar } from "@/app/(marketing)/navbar";
import { ElevatedButton } from "@/components/ui/elevated-button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col font-inter text-foreground text-center  items-center justify-between p-24">
        <section className="flex max-w-[575px] flex-col items-center gap-7 w-4/5  justify-between">
          <h1 className="text-7xl font-semibold">Get things done your way.</h1>
          <h3 className="text-xl opacity-50  font-medium">
            Your workflow, your rules. Shape your day with tools designed to fit
            your unique style.
          </h3>
          <ClerkLoading>
            <Loader className="w-6 h-6 animate-spin text-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Link href="/dashboard">
                <ElevatedButton>Continue to app</ElevatedButton>
              </Link>
            </SignedIn>
            <SignedOut>
              <Link href="/sign-up">
                <ElevatedButton>Start for free</ElevatedButton>
              </Link>
            </SignedOut>
          </ClerkLoaded>
        </section>
      </main>
    </>
  );
};

export default Home;
