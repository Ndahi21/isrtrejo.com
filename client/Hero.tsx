import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, FileTextIcon, ArrowDownIcon } from "lucide-react";

import { TopBar } from "./components/TopBar";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
  }, []);

  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');

  return (
    <>
      <TopBar currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <section 
        id="home"
        className="relative justify-center bg-black min-h-screen w-full flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
      >

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center 
            text-[#4ECDC4] transition-colors duration-300 z-20 scroll-smooth hover:drop-shadow-[0_5px_15px_yellow] transition duration-300">
          <a
            href="#about"
            className="flex flex-col items-center"
          >
            <p className="text-sm mb-2">{currentLang === 'en' ? 'Scroll Down' : 'Desplázate hacia abajo'}</p>
            <ArrowDownIcon size={20} className="animate-bounce justify-center align-middle"/>
          </a>
        </div>

        {/* Content */}
        <div className={`relative z-10 w-[800px] transition-all duration-700 xl:pl-24 ${
              animationComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}>

          <p className="inline-block text-2xl uppercase tracking-widest 
                        bg-gradient-to-r from-purple-200 to-gray-300 bg-clip-text text-transparent mb-2 whitespace-nowrap">
            {currentLang === 'en' ? 'HELLO WORLD, I\'M' : 'HOLA MUNDO, SOY'}
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-[105px] font-bold mb-1 leading-tight pb-4 whitespace-nowrap"> 
            <span className="text-white">Israel Trejo</span>
          </h1> 

          <p className="text-xl md:text-2xl uppercase tracking-wide text-gray-300 mb-8 font-normal whitespace-nowrap"> 
            {currentLang === 'en' ? 'Exploring the vast universe of tech' : 'Explorando el universo de la tecnología'}
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="/resume/Israel_Trejo_Resume.pdf" download="Israel_Trejo_Resume.pdf">
              <button className="px-8 py-4 text-base font-medium rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]"
                      >
                {currentLang === 'en' ? 'Download CV' : 'Descargar CV'}
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-4 text-base font-medium rounded-full border-2 border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]">
                {currentLang === 'en' ? 'Contact Info' : 'Contactos'}
              </button>
            </a>
          </div> */}

          {/* Social Links */}
          <div className="flex gap-6 pl-4">
            <div className="flex gap-8">
              <div className="group flex flex-col items-center">
                <a
                  href="https://www.linkedin.com/in/israeltrejo07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={36} />
                </a>
                <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">LinkedIn</span>
              </div>
              <div className="group flex flex-col items-center">
                <a
                  href="https://github.com/Ndahi21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
                  aria-label="GitHub"
                >
                  <GithubIcon size={36} />
                </a>
                <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">GitHub</span>
              </div>
              <div className="group flex flex-col items-center">
                <a
                  href="/resume/Israel_Trejo_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
                  aria-label="Resume"
                >
                  <FileTextIcon size={36} />
                </a>
                <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">Resume</span>
              </div>
            </div>
          </div>
        </div>

        {/* Galaxy Image */}
        <div className="pointer-events-none -ml-28">
          <img 
            src="/images/galaxy.jpg" 
            alt="Galaxy"
            className="float-right w-[900px] pr-0 opacity-40
              xl:opacity-100"
          />
        </div>

      </section>
      <About language={currentLang} />
      <Skills language={currentLang} />
      <Experience language={currentLang} />
      <Projects language={currentLang} />
      <Contact language={currentLang} />
    </>
  );
}