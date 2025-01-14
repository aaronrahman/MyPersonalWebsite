import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text?: string;
  typingSpeed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({
  text = "Welcome!",
  typingSpeed = 300,
  className,
  onComplete = () => {},
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, typingSpeed, isComplete, onComplete]);

  return (
    <div
      className={cn("min-h-[60px] flex items-center justify-start", className)}
    >
      <span
        className={cn(
          "text-7xl md:text-8xl lg:text-9xl font-bold text-white",
          "font-sans tracking-tight",
        )}
      >
        {displayText}
        <span className="inline-block w-[4px] h-[1em] bg-white animate-pulse ml-2"></span>
      </span>
    </div>
  );
};

export default TypewriterText;
