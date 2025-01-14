import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href?: string;
  label?: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({
  href = "/",
  label = "Link",
  isActive = false,
  className,
  onClick = () => {},
}: NavLinkProps) => {
  const isHashLink = href.startsWith("#");

  const handleClick = (e: React.MouseEvent) => {
    if (isHashLink) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClick();
  };

  const Component = isHashLink ? "a" : Link;
  const linkProps = isHashLink ? { href } : { to: href };

  return (
    <Component
      {...linkProps}
      onClick={handleClick}
      className={cn(
        "px-4 py-2 rounded-md transition-all duration-300",
        "text-white hover:text-[#8A2BE2] font-medium",
        "hover:bg-black/80",
        isActive && [
          "text-[#8A2BE2]",
          'before:content-[""] before:absolute before:-bottom-1 before:left-0',
          "before:w-full before:h-0.5 before:bg-[#8A2BE2]",
          "before:rounded-full before:opacity-75",
        ],
        className,
      )}
    >
      {label}
    </Component>
  );
};

export default NavLink;
