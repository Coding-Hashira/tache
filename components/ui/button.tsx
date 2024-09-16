import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    // TODO: Manage variants
    variant: {
      default:
        "font-inter active:bg-[rgb(100,66,168)] text-foreground hover:bg-primaryHover transition-all font-semibold bg-primary rounded-lg",
      ghost:
        "hover:bg-foreground/10 active:bg-foreground/15 font-semibold font-inter text-foreground transition-all rounded-lg",
      regular:
        "transition-all hover:bg-foreground/10 font-medium border-foreground/30 rounded-md font-inter active:bg-foreground/5 border",
      noEffect:
        "font-inter text-foreground font-semibold bg-primary rounded-lg",
      icon: "p-1",
      ghostOutline:
        "hover:border-foreground/25 active:border-foreground/30 hover:bg-foreground/10 active:bg-foreground/15 font-semibold font-inter text-foreground transition-all rounded-lg border border-foreground/15",
    },
    size: {
      default: "px-4 py-1.5",
      sm: "px-1.5 py-1",
      lg: "px-4 py-3.5",
      icon: "p-1",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
