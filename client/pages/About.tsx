import { PicturePile } from "../components/PicturePile";
import { fotos, pictures } from "../../server/data/pictures";

type AboutProps = {
  language: 'en' | 'es';
}

export function About({ language }: AboutProps) {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-20 bg-black text-white pt-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        {language === 'en' ? 'About Me' : 'Sobre Mí'}
      </h2>
      <div className="absolute inset-0 opacity-70">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="grid col-span-1 flex items-center justify-center">
          {language === 'en' ? (
            <PicturePile pictures={pictures} />
          ) : (
            <PicturePile pictures={fotos} />
          )} 
        </div>
        <div className="grid col-span-1 mt-24 lg:col-span-2 lg:mt-0 pl-0 lg:pl-20 text-lg md:text-xl leading-relaxed">
          <div className="flex flex-col justify-center h-full pb-8 lg:pb-36 max-w-3xl">
            {language === 'en' ? (
              <>
                <p className="mb-4">
                  I'm Israel Trejo, currently a Senior Computer Science student at the University of Houston with a passion 
                  for <span className="font-bold">Data Science</span> and <span className="font-bold">Software Engineering</span>. 
                  I really like working on projects that makes a great impact on the world.
                  I'm a team player that enjoys working and growing with others!
                </p>
                <p>
                  My hobbies outside of tech include drawing comics, animating, playing the guitar and lifting weights at home.
                </p>
              </>
            ) : (
              <>
                <p className="mb-4">
                  Soy Israel Trejo, actualmente estudiante de último año de Ciencias de la Computación en la Universidad de 
                  Houston con una pasión por la <span className="font-bold">Ciencia de Datos</span> y la <span className="font-bold">
                  Ingeniería de Software</span>. Yo realmente disfruto trabajar en proyectos que tengan un gran impacto en el mundo.
                </p>
                <p>
                  Mis pasatiempos fuera de la tecnología incluyen dibujar cómics, animar, tocar la guitarra y levantar pesas en casa.
                </p>
              </>
            )}
          </div>
          <div className="hidden lg:block group relative w-full">
            <img className="absolute bottom-[-70px] left-[280px] w-[400px]
              filter grayscale brightness-200 contrast-100 mix-blend-screen" 
              src="/images/pulsar_map.png"/>
            <div className="absolute border border-gray-500 bg-black bottom-[50px] left-0 w-[260px] text-sm py-4 px-5">
              {language === 'en' ? (
                <p><span className="font-bold">Pulsar Map: </span>This diagram appears on the covers of the Voyager spacecrafts. Used to locate Earth in the galaxy, using 14 pulsars</p>
              ) : (
                <p><span className="font-bold">Mapa de Pulsar: </span>Este diagrama aparece en las naves espaciales Voyager. Localiza la Tierra en la galaxia utilizando 14 púlsares</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
