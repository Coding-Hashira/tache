import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[hsla(0,0%,65.9%,0.1)]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
