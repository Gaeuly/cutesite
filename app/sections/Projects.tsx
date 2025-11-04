'use client';

import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 flex flex-col items-center">
        <h1 className="font-jersey font-bold text-5xl py-12">Projects</h1>
        <p className="leading-relaxed text-center font-pixelify">
            A little collection of projects I have been building, designing and tinkering with ✨💫
        </p>
    
        {/*Project Cards*/}
        <div className="mt-12 flex flex-wrap gap-10 justify-center">
          <div
          onClick={() => window.open("https://github.com/Rimichu/Smart-Environment-Toolkit", "_blank")}
          className="cursor-pointer"
          >
              <ProjectCard
                  title="IoT Airport System"
                  description="Implementing the Iot Smart system into an airport environment with environmental monitoring, location tracking and AI security features."
                  skills={["Next.js", "React", "Tailwind CSS", "Arduino", "C", "MQTT"]}
                  image="/silly-pic.jpeg"
                  git="https://github.com/Rimichu/Smart-Environment-Toolkit"
                  yt="https://www.youtube.com/watch?v=fzZrk8lb2D8"
              />
          </div>
          <div
          onClick={() => window.open("https://grp4-smart-system.vercel.app", "_blank")}
          className="cursor-pointer"
          >
            <ProjectCard
              title="IoT Smart System"
              description="A full-stack IoT smart system using Raspberry Pi devices to monitor the environemnt, users, devices and others in the lab."
              skills={["Next.js", "MongoDB", "Tailwind", "Raspberry Pico"]}
              image="/RaspberryPi.jpg"
              git="https://github.com/Colley-A/SCC_330_SLS"
              yt="https://www.youtube.com/watch?v=SPUiCte_qtw"
            />
          </div>
        </div>
        <a href="/projects"
          className="mt-10">
          <Button
            text="See more projects"
          />
        </a>
    </div>
  );
};

export default Projects;