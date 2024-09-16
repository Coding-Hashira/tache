"use client";

import { SignUp, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Page() {
  const { user } = useUser();

  if (!!user) {
    return redirect("/app");
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <SignUp fallbackRedirectUrl="/app/" />;
    </div>
  );
}
