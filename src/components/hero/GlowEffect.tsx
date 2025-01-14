import { cn } from "@/lib/utils";

interface GlowEffectProps {
  isActive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const GlowEffect = ({
  isActive = true,
  className,
  children = "Welcome!",
}: GlowEffectProps) => {
  return (
    <div
      className={cn(
        "relative min-h-[60px] flex items-center justify-start",
        "transition-all duration-1000",
        isActive && [
          'before:content-[""] before:absolute before:inset-0',
          "before:bg-gradient-to-r before:from-purple-600 before:via-blue-600 before:to-purple-600",
          "before:blur-lg before:opacity-50",
          'after:content-[""] after:absolute after:inset-0',
          "after:bg-gradient-to-r after:from-purple-500 after:via-blue-500 after:to-purple-500",
          "after:blur-xl after:opacity-30",
        ],
        className,
      )}
    >
      <span
        className={cn(
          "relative z-10 text-7xl md:text-8xl lg:text-9xl font-bold",
          "bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent",
          "font-sans tracking-tight",
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default GlowEffect;
