import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  inView?: boolean;
  inViewMargin?: string;
  once?: boolean;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 6,
  blur = "6px",
  inView = true,
  inViewMargin = "-50px",
  once = true,
}: BlurFadeProps) {
  const variants: Variants = {
    hidden: {
      y: -yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={!inView ? "visible" : undefined}
      viewport={{ once, margin: inViewMargin }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface BlurFadeStaggerProps {
  children: React.ReactNode[];
  className?: string;
  childClassName?: string;
  staggerDelay?: number;
  baseDelay?: number;
  yOffset?: number;
  blur?: string;
}

export function BlurFadeStagger({
  children,
  className,
  childClassName,
  staggerDelay = 0.04,
  baseDelay = 0,
  yOffset = 6,
  blur = "6px",
}: BlurFadeStaggerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <BlurFade
          key={index}
          className={childClassName}
          delay={baseDelay + staggerDelay * index}
          yOffset={yOffset}
          blur={blur}
        >
          {child}
        </BlurFade>
      ))}
    </div>
  );
}
