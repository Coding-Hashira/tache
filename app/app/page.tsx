"use client";

import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/app/inbox");
  }, [router]);

  return (
    <div className="w-screen h-screen flex items-center bg-background justify-center">
      <LoaderCircle className="h-8 w-8 text-primary animate-spin" />
    </div>
  );
};

export default DashboardPage;
