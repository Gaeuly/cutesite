'use client';

import ProjectCard from "../../components/ProjectCard";
import { allProjects } from "../data/projectData";

const ProjectsFull = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-4 flex flex-col items-center py-24">
      <h1 className="font-jersey font-bold text-5xl pb-6">Projects</h1>
      <p className="max-w-2xl leading-relaxed text-center font-pixelify">
        Just a few of my favorite builds! Some are experiments, some are full
        projects, but all of them show how I love exploring ideas and creating
        things that work (and hopefully look a little cute too!). 🌸✨💫
      </p>

      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {allProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="cursor-pointer"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              skills={project.technologies}
              image={project.image}
              git={project.githubUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFull;