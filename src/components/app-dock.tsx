import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  FolderGit2,
  Github,
  FileText,
  Mail,
  type LucideIcon,
} from "lucide-react";

interface DockItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const dockItems: DockItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: FolderGit2, label: "Projects", href: "#projects" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: FileText, label: "Blog", href: "#blog" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const DOCK_SIZE = 40;
const MAGNIFIED_SIZE = 50;
const MAGNIFY_RANGE = 120;

function DockIcon({
  item,
  mouseX,
  containerRef,
}: {
  item: DockItem;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    if (!containerRef.current || !itemRef.current) return 0;
    const containerRect = containerRef.current.getBoundingClientRect();
    const itemRect = itemRef.current.getBoundingClientRect();
    const itemCenterX = itemRect.left - containerRect.left + itemRect.width / 2;
    return val - itemCenterX;
  });

  const size = useTransform(distance, [-MAGNIFY_RANGE, 0, MAGNIFY_RANGE], [DOCK_SIZE, MAGNIFIED_SIZE, DOCK_SIZE]);

  const springSize = useSpring(size, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const Icon = item.icon;

  const handleClick = (e: React.MouseEvent) => {
    if (item.href.startsWith("#")) {
      e.preventDefault();
      if (typeof document !== "undefined") {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <motion.a
      ref={itemRef}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: springSize,
        height: springSize,
      }}
      className={cn(
        "relative flex items-center justify-center rounded-xl",
        "bg-muted/50 backdrop-blur-md border border-border/50",
        "transition-colors duration-200",
        "hover:bg-muted hover:border-foreground/20",
        "group"
      )}
    >
      <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
        className={cn(
          "absolute -top-9 left-1/2 -translate-x-1/2",
          "px-2.5 py-1 rounded-md",
          "bg-foreground text-background text-xs font-medium",
          "whitespace-nowrap pointer-events-none",
          "shadow-lg"
        )}
      >
        {item.label}
        {/* Arrow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
      </motion.div>
    </motion.a>
  );
}

export function AppDock() {
  const mouseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "flex items-end gap-2 p-2",
        "glass-card rounded-2xl",
        "shadow-xl shadow-black/20"
      )}
      style={{ height: MAGNIFIED_SIZE + 16 }}
      onMouseMove={(e) => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
        }
      }}
      onMouseLeave={() => mouseX.set(-1000)}
    >
      {dockItems.map((item, index) => (
        <DockIcon 
          key={item.label} 
          item={item} 
          mouseX={mouseX} 
          containerRef={containerRef}
          index={index}
        />
      ))}
    </motion.div>
  );
}
