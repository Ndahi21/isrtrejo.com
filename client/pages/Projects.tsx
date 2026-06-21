import ProjectCard from "../components/ProjectCard";
import { projects, proyectos } from "../../server/data/projects";

type ProjectsProps = {
  language: 'en' | 'es';
}

export function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="relative min-h-screen bg-black w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-20 text-white pt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        {language === 'en' ? 'My Projects' : 'Mis Proyectos'}
      </h2>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {(language === 'en' ? projects : proyectos).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <img src="/images/golden-disk.png" alt="Decorative" className="absolute top-[210px] right-[300px] w-72 pointer-events-none" />
    </section>
  )
}