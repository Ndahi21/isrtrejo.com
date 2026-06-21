import { GithubIcon, ExternalLink } from "lucide-react";

import { skills as allSkills } from "../../server/data/skills";

type Project = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  skills: string[];
  liveLink: string;
};

type ProjectCardProps = {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectSkills = project.skills.map(skillName => 
    allSkills.find(s => s.name === skillName)
  ).filter(Boolean);

  return (
    <div className="bg-[#13151c] border-2 relative border-[#4682B4]/50 rounded-lg p-6 hover:border-[#4682B4] transition-all duration-300 w-full max-w-xl cursor-pointer">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <div className="absolute top-6 right-6 flex gap-6">
        <div className="flex flex-col items-center gap-1">
          {project.liveLink && (
            <>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 text-gray-400 hover:text-[#4682B4] transition-colors" />
              </a>
              <p className="text-sm">Live</p>
            </>
          )}
        </div>
        <div className="flex flex-col items-center gap-1">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
          <GithubIcon className="w-6 h-6 text-gray-400 hover:text-[#4682B4] transition-colors" />
          </a>
          <p className="text-sm">Code</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        {project.startDate} - {project.endDate}
      </p>
      <p className="text-gray-300 mb-6 h-24 overflow-hidden">{project.description}</p>
      <div className="flex flex-wrap gap-3 mt-4">
        {projectSkills.map((skill) => skill && (
          <div key={skill.name} className="relative bg-[#1a1d28] px-1 py-1 hr-1 rounded-lg group hover:bg-[#4682B4]/20 transition-colors">
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                }}
              />
            </a>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-200 whitespace-nowrap bg-[#1a1d28] px-2 py-1 rounded">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}