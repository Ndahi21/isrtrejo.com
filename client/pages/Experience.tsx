import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../../server/data/experience";

export function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-black w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-20 text-white pt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        My Experience
      </h2>

      <div className="flex">
        {/* <div className="items-center flex flex-col justify-center">
          <div className="items-center flex flex-col justify-center cursor-pointer border border-gray-500 hover:scale-105 h-80 group transition-all duration-500">
            <ArrowLeft className="left-8 text-gray-500 hover:text-white cursor-pointer group-hover:text-white transition-all duration-500" size={40} />
          </div>
        </div> */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {experiences.map((experience) => (
                <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </div>
        {/* <div className="items-center flex flex-col justify-center">
          <div className="items-center flex flex-col justify-center cursor-pointer border border-gray-500 hover:scale-105 h-80 group transition-all duration-500">
            <ArrowRight className="right-8 text-gray-500 hover:text-white cursor-pointer group-hover:text-white transition-all duration-500" size={40} />
          </div>
        </div> */}
      </div>
    </section>
  )
}