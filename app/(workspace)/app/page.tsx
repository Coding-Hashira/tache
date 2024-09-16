"use client";

import { SignOutButton } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// import { signOut } from "next-auth/react";

const DashboardPage = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div transition={{ duration: 0.4 }} layout="position" className="">
        Waheguru
      </motion.div>
    </AnimatePresence>
  );
};

export default DashboardPage;
