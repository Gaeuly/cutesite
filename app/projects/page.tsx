'use client';

import ProjectCard from "../components/ProjectCard";

const ProjectsFull = () => {
    return (  
        <div className="min-h-screen max-w-6xl mx-auto px-4 flex flex-col items-center py-24">
            <h1 className="font-jersey font-bold text-5xl pb-6">Projects</h1>
            <p className="max-w-2xl leading-relaxed text-center font-pixelify">
                Just a few of my favorite builds! Some are experiments, some are full projects, but all of them show how I love exploring ideas and creating things that work (and hopefully look a little cute too!). 🌸✨💫
            </p>
        
            {/*Project Cards*/}
            <div className="mt-12 flex flex-wrap gap-8 justify-center">
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
                <div
                onClick={() => window.open("/dashboard")}
                className="cursor-pointer"
                >
                    <ProjectCard
                    title="Portfolio Dashboard"
                    description="Portfolio dashboard powered by Next.js and Supabase, using a database to manage and present information in an interactive interface."
                    skills={["Next.js", "Supabase", "Tailwind", "Typescript"]}
                    image="/persona.png"
                    git="https://github.com/phasuk15/Sye-Phasuk"
                    className="object-top"
                    />
                </div>
                <div
                onClick={() => window.open("https://github.com/phasuk15/Herb-and-Spice", "_blank")}
                className="cursor-pointer"
                >
                    <ProjectCard
                    title="Herb and Spice Thai Restaurant"
                    description="A website for my family restaurant with a booking system using Calendly. "
                    skills={["Next.js", "Typescript", "Tailwind", "Calendly"]}
                    image="/herbandspice.jpg"
                    git="https://github.com/phasuk15/Herb-and-Spice"
                    />
                </div>
                <div
                onClick={() => window.open("/lovelace_poster_final.png", "_blank")}
                className="cursor-pointer"
                >
                    <ProjectCard
                    title="Lovelace Colloquium"
                    description="Presented a poster at a competition for women and non-binary students in
                    Computing in Liverpool 2024 exploring the use of AI and technology in the Chinese art community (I drew everything myself :0)."
                    skills={["Procreate"]}
                    image="/lovelace_liverpool.jpg"
                    yt="https://www.youtube.com/watch?v=3-qxv5WFke4"
                    />
                </div>
                <div
                onClick={() => window.open("https://www.canva.com/design/DAF-2sI0oL8/YFMzvymPyv-KfGSXrw6FAw/view?utm_content=DAF-2sI0oL8&utm_campaign=designshare&utm_medium=link&utm_source=editor", "_blank")}
                className="cursor-pointer"
                >
                    <ProjectCard
                    title="SportMate"
                    description="Designed and implemented a Flutter app to connect users with nearby sports partners, incorporating intuitive UI
                    and efficient local storage with SQLite"
                    skills={["Next.js", "MongoDB", "Tailwind", "Raspberry Pico"]}
                    image="/sportmate.png"
                    git="https://github.com/stasnowaczyk/sportmate_flutter"
                    />
                </div>
            </div>

        </div>
    );
}
 
export default ProjectsFull;