import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfilePhoto from "./hero/ProfilePhoto";
import AnimatedWelcome from "./hero/AnimatedWelcome";
import MainNav from "./navigation/MainNav";
import ProjectCard from "./sections/ProjectCard";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface HomeProps {
  profilePhotoSrc?: string;
  welcomeText?: string;
  typingSpeed?: number;
}

function Home({
  profilePhotoSrc = "src/profilePicture.jpeg",
  welcomeText = "Welcome!",
  typingSpeed = 150,
}: HomeProps) {
  const projects = [
    {
      title: "Harmony AI",
      description: "Harmony AI is a therapeutic speech-to-text chatbot that replies to you using text-to-speech. Mental Health is a big issue in today's world, and we believe that Harmony is a step towards more to come.",
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
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Git"
  ];

  // Create a map of skills to projects
  const skillToProjects = projects.reduce(
    (acc, project) => {
      project.tags.forEach((tag) => {
        if (!acc[tag]) {
          acc[tag] = [];
        }
        acc[tag].push(project);
      });
      return acc;
    },
    {} as Record<string, typeof projects>,
  );

  return (
    <div className="relative w-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-x-hidden">
      <MainNav />

      {/* Hero Section */}
      <section id="home" className="w-full min-h-screen pt-[60px] px-4">
        <div className="container mx-auto h-[calc(100vh-60px)] flex items-center justify-between gap-8">
          <div className="flex-1">
            <AnimatedWelcome text={welcomeText} typingSpeed={typingSpeed} />
          </div>
          <div className="flex-1 flex justify-center">
            <ProfilePhoto src={profilePhotoSrc} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-5xl font-bold text-white">Projects</h2>
            <Link to="/projects">
              <Button
                variant="ghost"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
              >
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">About Me</h2>
          <Card className="p-8 bg-black/50 backdrop-blur-sm border-purple-500/20">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate developer with a love for creating beautiful and
              functional web applications. With experience in modern web
              technologies, I focus on delivering high-quality solutions that
              make a difference.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">Skills</h2>
          <div className="flex flex-wrap gap-4">
            <TooltipProvider>
              {skills.map((skill, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Badge className="text-lg py-2 px-4 bg-purple-500/20 hover:bg-purple-500/30 transition-colors cursor-pointer">
                      {skill}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent
                    className="bg-black/90 border-purple-500/20 p-4 max-w-sm"
                    side="bottom"
                  >
                    {skillToProjects[skill]?.length ? (
                      <div className="space-y-2">
                        <p className="font-medium text-purple-300">
                          Projects using {skill}:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          {skillToProjects[skill].map((project, idx) => (
                            <li key={idx} className="text-gray-300">
                              {project.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-gray-300">
                        No projects yet using {skill}
                      </p>
                    )}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">Contact</h2>
          <Card className="p-8 bg-black/50 backdrop-blur-sm border-purple-500/20">
            <div className="space-y-6 text-center">
              <p className="text-xl text-gray-300">
                Let's work together! You can reach me at:
              </p>
              <div className="flex justify-center gap-8">
                <a
                  href="mailto:aaronsrahman@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  aaronsrahman@gmail.com
                </a>
                <a
                  href="https://github.com/aaronrahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/aaronrahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Home;
