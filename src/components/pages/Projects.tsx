import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainNav from "../navigation/MainNav";
import ProjectCard from "../sections/ProjectCard";
import { Button } from "../ui/button";

interface ProjectsProps {}

const Projects = ({}: ProjectsProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const allProjects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "https://dummyimage.com/600x400/8A2BE2/ffffff&text=Project+1",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      image: "https://dummyimage.com/600x400/8A2BE2/ffffff&text=Project+2",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of project 3",
      image: "https://dummyimage.com/600x400/8A2BE2/ffffff&text=Project+3",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      title: "Project 4",
      description: "A brief description of project 4",
      image: "https://dummyimage.com/600x400/8A2BE2/ffffff&text=Project+4",
      tags: ["Vue.js", "GraphQL", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-x-hidden">
      <nav className="bg-black/80 backdrop-blur-sm w-full h-[60px] flex items-center justify-between fixed top-0 left-0 z-50 px-4 md:px-6 lg:px-8">
        <Link
          to="/"
          className="text-white hover:text-purple-400 transition-colors font-medium"
        >
          ← Back to Home
        </Link>
        <div className="flex gap-6">
          <button
            onClick={() => handleSectionClick("about")}
            className="text-white hover:text-purple-400 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => handleSectionClick("skills")}
            className="text-white hover:text-purple-400 transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => handleSectionClick("contact")}
            className="text-white hover:text-purple-400 transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </nav>

      <main className="container mx-auto pt-24 px-4 pb-20">
        <h1 className="text-6xl font-bold text-white mb-16">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
