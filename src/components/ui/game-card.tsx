import * as React from "react";
import { cn } from "@/lib/utils";

const GameCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "interactive" | "quiz" | "achievement";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-card text-card-foreground shadow-lg transition-all duration-300",
      {
        "hover:shadow-xl hover:scale-105 cursor-pointer border-primary/20": variant === "interactive",
        "border-fun/30 shadow-[var(--fun-glow)] hover:shadow-[var(--fun-glow)]": variant === "quiz",
        "border-success/30 shadow-[var(--success-glow)] hover:shadow-[var(--success-glow)] animate-bounce-gentle": variant === "achievement",
        "hover:shadow-[var(--card-glow)]": variant === "default",
      },
      className
    )}
    {...props}
  />
));
GameCard.displayName = "GameCard";

const GameCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
GameCardHeader.displayName = "GameCardHeader";

const GameCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-none tracking-tight text-primary",
      className
    )}
    {...props}
  />
));
GameCardTitle.displayName = "GameCardTitle";

const GameCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
GameCardDescription.displayName = "GameCardDescription";

const GameCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
GameCardContent.displayName = "GameCardContent";

const GameCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
GameCardFooter.displayName = "GameCardFooter";

export { GameCard, GameCardHeader, GameCardFooter, GameCardTitle, GameCardDescription, GameCardContent };