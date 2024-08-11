import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      default:
        "font-inter active:bg-[rgb(100,66,168)] text-foreground hover:bg-primaryHover transition-all font-semibold bg-primary rounded-lg",
      ghost:
        "hover:bg-white/10 active:bg-[rgba(255,255,255,0.07)] font-semibold font-inter text-foreground transition-all rounded-lg",

      noEffect:
        "font-inter text-foreground font-semibold bg-primary rounded-lg",
    },
    size: {
      default: "px-4 py-1.5",
      sm: "",
      lg: "px-4 py-3.5",
      icon: "",
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
