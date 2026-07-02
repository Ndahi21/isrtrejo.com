import SkillCard from "../components/SkillsCard";
import { skills } from "../../server/data/skills";

type SkillsProps = {
  language: 'en' | 'es';
}

export function Skills({ language }: SkillsProps) {
  return (
    <section id="skills" className="relative min-h-screen bg-black w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-20 text-white pt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">{language === 'en' ? 'My Skills' : 'Mis Habilidades'}</h2>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 pr-72 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      <img src="/images/golden-disk.png" alt="Decorative" className="absolute gradient top-[210px] right-[150px] w-96 pointer-events-none" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%, black 100%)' }} />
    </section>
  );
}