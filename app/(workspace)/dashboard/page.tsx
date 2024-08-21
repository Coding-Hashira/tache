"use client";

import { SignOutButton } from "@clerk/nextjs";

// import { signOut } from "next-auth/react";

const DashboardPage = () => {
  return (
    <div>
      <SignOutButton>
        <button onClick={() => {}}>sign out</button>
      </SignOutButton>
    </div>
  );
};

export default DashboardPage;
