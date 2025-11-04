import ProjectGithub from "./icons/ProjGit";
import Youtube from "./icons/Youtube";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
  git?: string;
  yt?: string;
  className?: string;

}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, image, git, yt, className = "", }) => {
  return (
    <div className="w-72 h-[27rem] bg-light-pink border-4 border-rosewood rounded-none shadow-[4px_4px_0px_#412722] hover:shadow-[6px_6px_0px_#412722] transition-all duration-200 font-pixelify">
      <div className="bg-rosewood text-light-pink px-3 py-1 flex items-center justify-between text-xs">
        <span className="font-bold">project.html</span>
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-raspberry border border-plum-brown"></span>
          <span className="w-3 h-3 bg-mauve-brown border border-plum-brown"></span>
          <span className="w-3 h-3 bg-light-pink border border-plum-brown"></span>
        </div>
      </div>

      {/* Image */}
      <div className="h-44 overflow-hidden border-b-4 border-rosewood">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className={`w-full h-full object-cover image-pixelated ${className}`}
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h2 className="text-lg text-raspberry font-bold">{title}</h2>
        <p className="text-xs text-plum-brown mt-2">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1 mt-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[10px] bg-rosewood text-light-pink border border-plum-brown"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="flex flex-row gap-3 items-start mt-4">
            {git && (
                <ProjectGithub url={git}/>
              )}
            {yt && (
                <Youtube url={yt}/>
              )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;