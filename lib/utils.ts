import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { parse } from "chrono-node";
import { daysOfWeek } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const canTriggerShortcut = () => {
  const activeElement = document.activeElement;
  const isInputFocused =
    activeElement instanceof HTMLInputElement ||
    activeElement instanceof HTMLTextAreaElement;
  const isAnotherModalOpen = document.querySelector(".dialog") !== null;

  return !isInputFocused && !isAnotherModalOpen;
};

export const formatDueDate = (date: Date, full = false) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (full) {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });
  }

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  } else {
    const dayDifference = Math.floor(
      (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (dayDifference < 7) {
      return daysOfWeek[date.getDay()];
    } else {
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      });
    }
  }
};

export function parseNaturalDate(input: string): Date | null {
  const parsedDate = parse(input, new Date(), { forwardDate: true });
  return parsedDate.length > 0 ? parsedDate[0].start.date() : null;
}
