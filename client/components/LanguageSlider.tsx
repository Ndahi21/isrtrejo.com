import { useState } from 'react';

interface LanguageSliderProps {
  initialLanguage?: 'en' | 'es';
  onChange?: (lang: 'en' | 'es') => void;
}

export function LanguageSlider({ initialLanguage = 'en', onChange }: LanguageSliderProps) {
  const [lang, setLang] = useState<'en' | 'es'>(initialLanguage);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'es' : 'en';
    setLang(nextLang);
    if (onChange) {
      onChange(nextLang);
    }
  };

  return (
    <div className="flex items-center gap-3">

      {/* Slider Track Wrapper */}
      <button
        type="button"
        onClick={toggleLanguage}
        className="relative inline-flex h-10 w-24 shrink-0 cursor-pointer items-center rounded-full bg-gray-800 border border-gray-700 p-1 transition-colors duration-300 ease-in-out hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-offset-2 focus:ring-offset-black"
        role="switch"
        aria-checked={lang === 'es'}
        aria-label="Switch language between English and Spanish"
      >
        {/* Track Label Left: EN */}
        <span className={`absolute left-3 text-xs font-bold transition-opacity duration-200 ${lang === 'en' ? 'text-[#4ECDC4] opacity-100' : 'text-gray-500 opacity-60'}`}>
          EN
        </span>

        {/* Track Label Right: ES */}
        <span className={`absolute right-3 text-xs font-bold transition-opacity duration-200 ${lang === 'es' ? 'text-[#4ECDC4] opacity-100' : 'text-gray-500 opacity-60'}`}>
          ES
        </span>

        {/* Draggable/Sliding Sliding Puck */}
        <span
          className={`
            pointer-events-none h-8 w-10 rounded-full bg-white shadow-lg ring-0 
            transition duration-300 ease-in-out transform flex items-center justify-center text-xs font-extrabold text-gray-800
            ${lang === 'es' ? 'translate-x-[48px]' : 'translate-x-0'}
          `}
        >
          {lang.toUpperCase()}
        </span>
      </button>
    </div>
  );
}