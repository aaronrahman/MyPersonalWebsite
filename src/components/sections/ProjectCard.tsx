import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  link?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "Project description goes here",
  image = "https://dummyimage.com/600x400/8A2BE2/ffffff&text=Project",
  tags = ["React", "TypeScript"],
  link = "#",
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group bg-black/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-purple-500/20 hover:bg-purple-500/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-purple-400 hover:text-purple-300 transition-colors"
        >
          View Project →
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
