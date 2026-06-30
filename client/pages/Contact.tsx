import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { BottomBar } from "../components/BottomBar";

type ContactProps = {
  language: 'en' | 'es';
}

export function Contact({ language }: ContactProps) {
  return (
    <>
    <section id="contact" className="relative min-h-screen bg-black w-full flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div>
        <img className="absolute bottom-[16.2857%] left-36 w-[370px] opacity-20
          xl:opacity-100"
          src="/images/astronaut.jpg"/>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center relative z-10">{language === 'en' ? 'Contact Me' : 'Contáctame'}</h2>
      <div className="flex justify-center gap-10 p-10 border border-2 border-gray-700 rounded-lg px-14 bg-black relative z-10">
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/israel-trejo-2863a8226/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={32} />
          </a>
          <p className="text-white text-xl">LinkedIn</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ndahi21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
            aria-label="GitHub"
          >
            <GithubIcon size={32} />
          </a>
          <a className="text-white text-xl">GitHub</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:isrtrejo07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
          <p className="text-white text-xl">Email</p>
          {/* <p className="text-white text-xl">Correo</p> */}
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <BottomBar />
      </div>
    </section>
    </>
  );
}