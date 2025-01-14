import { useState } from "react";
import { cn } from "@/lib/utils";
import TypewriterText from "./TypewriterText";
import GlowEffect from "./GlowEffect";

interface AnimatedWelcomeProps {
  text?: string;
  typingSpeed?: number;
  className?: string;
}

const AnimatedWelcome = ({
  text = "Welcome!",
  typingSpeed = 300,
  className,
}: AnimatedWelcomeProps) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <div className={cn("w-full flex items-center justify-start", className)}>
      {!isTypingComplete ? (
        <TypewriterText
          text={text}
          typingSpeed={typingSpeed}
          onComplete={handleTypingComplete}
        />
      ) : (
        <GlowEffect isActive={true}>{text}</GlowEffect>
      )}
    </div>
  );
};

export default AnimatedWelcome;
