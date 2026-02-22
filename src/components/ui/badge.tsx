import { cn } from "#/lib/utils";

const badgeVariants = {
  default:
    "bg-foreground text-background hover:bg-foreground/90",
  secondary:
    "bg-muted text-foreground hover:bg-muted/80",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted",
  lime:
    "bg-lime text-lime-foreground hover:bg-lime/90",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof badgeVariants;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
