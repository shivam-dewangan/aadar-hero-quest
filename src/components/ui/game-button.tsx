import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gameButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-lg hover:shadow-xl",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90 shadow-lg hover:shadow-xl",
        fun: "bg-fun text-fun-foreground hover:bg-fun/90 shadow-lg hover:shadow-xl animate-bounce-gentle",
        ghost: "hover:bg-accent hover:text-accent-foreground border-2 border-transparent hover:border-primary/20",
        hero: "bg-gradient-to-r from-primary to-fun text-primary-foreground hover:from-primary/90 hover:to-fun/90 shadow-2xl hover:shadow-3xl border-2 border-white/20",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-16 rounded-2xl px-8 text-lg",
        xl: "h-20 rounded-2xl px-12 text-xl",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface GameButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gameButtonVariants> {
  asChild?: boolean;
}

const GameButton = React.forwardRef<HTMLButtonElement, GameButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gameButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GameButton.displayName = "GameButton";

export { GameButton, gameButtonVariants };