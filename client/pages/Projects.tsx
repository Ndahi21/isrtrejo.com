import ProjectCard from "../components/ProjectCard";
import { projects, proyectos } from "../../server/data/projects";

type ProjectsProps = {
  language: 'en' | 'es';
}

export function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="relative min-h-screen bg-black w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-20 text-white pt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 z-0">
        {language === 'en' ? 'My Projects' : 'Mis Proyectos'}
      </h2>
      <div className="container mx-auto px-6 relative z-50 pr-36">
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {(language === 'en' ? projects : proyectos).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <div>
        <img src="/images/rocket-launch.png" alt="Decorative" className="absolute z-100 bottom-36 right-[200px] w-[500px] pointer-events-none" />
      </div>
    </section>
  )
}