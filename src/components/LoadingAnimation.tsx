import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface LoadingAnimationProps {
  onComplete?: () => void;
}

const LoadingAnimation = ({ onComplete = () => {} }: LoadingAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isWriting, setIsWriting] = useState(true);
  const [isGlowing, setIsGlowing] = useState(false);

  const handleInteraction = useCallback(() => {
    if (!isFading) {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000);
    }
  }, [isFading, onComplete]);

  useEffect(() => {
    if (isWriting) {
      setTimeout(() => {
        setIsGlowing(true);
      }, 2000);
    }
  }, [isWriting]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => handleInteraction();
    const handleClick = () => handleInteraction();
    const handleTouch = () => handleInteraction();
    const handleScroll = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 5) {
        handleInteraction();
      }
    };

    if (isVisible) {
      window.addEventListener("keydown", handleKey);
      window.addEventListener("click", handleClick);
      window.addEventListener("touchstart", handleTouch);
      window.addEventListener("wheel", handleScroll);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isVisible, handleInteraction]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center",
        "bg-black transition-opacity duration-1000",
        isFading ? "fade-out" : "",
      )}
    >
      <div className="text-center">
        <div className="relative h-48 flex items-center justify-center overflow-hidden">
          <div
            className={cn("writing-container", isGlowing ? "glow-effect" : "")}
          >
            <span
              className={cn(
                "writing-animation text-8xl",
                "tracking-wider text-white",
                isGlowing && "animate-glow",
              )}
            >
              Welcome!
            </span>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Click, scroll, or press any key to continue
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
