type Experience = {
  company: string;
  startDate: string;
  endDate: string;
  role: string;
  responsibilities: string[];
  image: string;
  banner: string;
  link: string;
}

type ExperienceCardProps = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-[#13151c] border-2 border-[#4682B4]/50 rounded-lg p-6 hover:border-[#4682B4] transition-all 
      duration-300 pb-4 w-full max-w-xl cursor-pointer flex flex-col h-full">
      <div className="flex-grow">
        <div className="ml-1">
          <h3 className="text-xl font-semibold text-white mb-2">{experience.role}</h3>
          <h4 className="text-lg text-gray-300 mb-1">{experience.company}</h4>
          <p className="text-sm text-gray-400 mb-4">
            {experience.startDate} - {experience.endDate}
          </p>
        </div>
        <ul className="list-disc list-outside ml-6 text-gray-300">
          {experience.responsibilities.map((responsibility, index) => (   
            <li key={index} className="mb-1 pb-2 pl-2">{responsibility}</li>
          ))}
        </ul>
      </div>
      <div className="relative mb-4 h-[120px]">
        <img src={experience.banner} 
        alt={`${experience.company} banner`} 
        className="w-full h-full rounded-lg object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13151c] via-[#13151c]/50 to-transparent rounded-lg"></div>
        <a href={experience.link} target="_blank" rel="noopener noreferrer" className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <img src={experience.image} 
          alt={`${experience.company} logo`} 
          className="w-24 h-24 rounded-full" />
        </a>
      </div>
    </div>
  );
}