import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";

interface MainNavProps {
  links?: Array<{
    href: string;
    label: string;
  }>;
  className?: string;
}

const MainNav = ({
  links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  className,
}: MainNavProps) => {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav
      className={cn(
        "bg-black/80 backdrop-blur-sm w-full h-[60px] flex items-center justify-center",
        "fixed top-0 left-0 z-50",
        "px-4 md:px-6 lg:px-8",
        className,
      )}
    >
      <div className="flex gap-6 relative">
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={activeLink === link.href}
            onClick={() => setActiveLink(link.href)}
          />
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
