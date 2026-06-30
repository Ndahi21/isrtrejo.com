import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, ArrowDownIcon } from "lucide-react";

import { TopBar } from "./components/TopBar";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { LanguageSlider } from './components/LanguageSlider';

export function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
  }, []);

  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');
  const handleLanguageChange = (lang: 'en' | 'es') => {
    setCurrentLang(lang);
    // Add logic here to switch your app translation context or routing
    console.log("App language updated to:", lang);
  };

  return (
    <>
      <TopBar />
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <section 
        id="home"
        className="relative min-h-screen w-full flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Galaxy Image */}
        <div className="absolute inset-0 bg-black pointer-events-none">
          <img 
            src="/images/galaxy.jpg" 
            alt="Galaxy"
            className="float-right pt-32 w-[900px] pr-32 opacity-40
              xl:opacity-100"
          />
        </div>

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
        <div className={`relative z-10 max-w-2xl pl-24 transition-all duration-700 ${
              animationComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}>

          <p className="text-xl uppercase tracking-widest text-gray-300 mb-2">
            {currentLang === 'en' ? 'Tech Enthusiast • Developer • Designer' : 'Ingeniero • Desarrollador • Diseñador'}
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-1 leading-tight pb-4"> 
            <span className="text-white">Israel Trejo</span>
          </h1> 

          <p className="text-xl md:text-2xl uppercase tracking-wide text-gray-300 mb-8 font-normal"> 
            {currentLang === 'en' ? 'Exploring the vast universe of tech' : 'Explorando el universo de la tecnología'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pl-4">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/israel-trejo-2863a8226/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={32} />
              </a>
              <a
                href="https://github.com/Ndahi21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
                aria-label="GitHub"
              >
                <GithubIcon size={32} />
              </a>
            </div>
            <div>
              <LanguageSlider initialLanguage={currentLang} onChange={handleLanguageChange} />
            </div>
          </div>
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