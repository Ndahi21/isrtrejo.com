import { LanguageSlider } from "./LanguageSlider";

interface TopBarProps {
  currentLang: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
}

export function TopBar({ currentLang, onLanguageChange }: TopBarProps) {

  return ( 
    <nav className="fixed bg-black bg-gradient-to-r from-gray-900 to-black top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-6">
      <div className="flex justify-between items-center">
        {/* Logo/Name on the left */}
        <div className="flex gap-8 text-2xl font-bold text-white">
          <a href="#home"
            className="text-white hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)] duration-300">
            Trejo
          </a>
          <div>
            <LanguageSlider initialLanguage={currentLang} onChange={onLanguageChange} />
          </div>
        </div>
        
        {/* Navigation links on the right */}
        <ul className="flex gap-8 items-center">
          <li>
            <a 
              href="#about" 
              className="text-white hover:underline decoration-2 underline-offset-8 transition-underline duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="text-white hover:underline decoration-2 underline-offset-8 transition-underline duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="text-white hover:underline decoration-2 underline-offset-8 transition-underline duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-white hover:underline decoration-2 underline-offset-8 transition-underline duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-white hover:underline decoration-2 underline-offset-8 transition-underline duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}