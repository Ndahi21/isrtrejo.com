type Experience = {
  company: string;
  startDate: string;
  endDate: string;
  role: string;
  responsibilities: string[];
  image: string;
  link: string;
}

type ExperienceCardProps = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-[#13151c] border-2 border-[#4ECDC4]/30 rounded-lg p-6 hover:border-[#4ECDC4] transition-all 
      duration-300 w-full max-w-xl cursor-pointer flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{experience.role}</h3>
        <h4 className="text-lg text-gray-300 mb-1">{experience.company}</h4>
        <p className="text-sm text-gray-400 mb-4">
          {experience.startDate} - {experience.endDate}
        </p>
        <ul className="list-disc list-inside text-gray-300">
          {experience.responsibilities.map((responsibility, index) => (   
            <p key={index} className="mb-1">{responsibility}</p>
          ))}
        </ul>
      </div>
      <a href={experience.link} target="_blank" rel="noopener noreferrer" className="mb-2 block">
        <img src={experience.image} 
        alt={`${experience.company} logo`} 
        className="mt-4 w-36 h-auto rounded-full mx-auto" />
      </a>
    </div>
  );
}