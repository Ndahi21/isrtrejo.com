type Skill = {
  name: string;
  icon: string;
  link: string;
};

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-[#13151c] border-2 border-[#4682B4]/50 rounded-lg overflow-hidden hover:border-[#4682B4] transition-all duration-300 group w-[140px] h-[68px] flex flex-col items-center justify-center cursor-pointer">
      <div className="flex items-center justify-center">
        <a href={skill.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
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
        <span className="ml-2 text-gray-300 transition-colors">
          {skill.name}
        </span>
        </a>
      </div>
    </div>
  );
}