'use client';

import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 flex flex-col items-center">
      <h1 className="font-jersey font-bold text-5xl py-12">Projects</h1>
      <p className="leading-relaxed text-center font-pixelify">
        A little collection of projects I have been building, designing and
        tinkering with ✨💫
      </p>

      <div className="mt-12 flex flex-wrap gap-10 justify-center">
        <div
          onClick={() =>
            window.open("https://moonveil.cyou/", "_blank")
          }
          className="cursor-pointer"
        >
          <ProjectCard
            title="Moonveil"
            description="An advanced all-in-one Discord bot packed with powerful features, designed for both utility and entertainment."
            skills={['Discord.js', 'MongoDB', 'JavaScript', 'Shell', 'Supabase']}
            image="/project/moonveil.webp"
            git="https://github.com/Gaeuly/"
          />
        </div>
        <div
          onClick={() =>
            window.open("https://moonveil.cyou", "_blank")
          }
          className="cursor-pointer"
        >
          <ProjectCard
            title="Discord Website Bot"
            description="A comprehensive Discord bot with advanced moderation, custom commands, and community engagement features."
            skills={['Next.js', 'Node.js', 'MongoDB']}
            image="/project/discord.webp"
            git="https://github.com/Gaeuly"
          />
        </div>
      </div>
      <a href="/projects" className="mt-10">
        <Button text="See more projects" />
      </a>
    </div>
  );
};

export default Projects;