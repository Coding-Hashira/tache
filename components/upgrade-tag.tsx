import { cn } from "@/lib/utils";

export const UpgradeTag = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-premium/30 uppercase font-inter text-premium px-1 py-0.5 rounded-md text-xs font-semibold",
        className
      )}
    >
      Upgrade
    </div>
  );
};
