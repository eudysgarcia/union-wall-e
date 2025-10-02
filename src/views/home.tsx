import { Dedication } from "../components/dedication.tsx";
import { Mission } from "../components/mision.tsx";
import { Hero } from "../components/hero.tsx";
import { Programs } from "../components/programs.tsx";
import { Impact } from "../components/impact.tsx";
import { Testimonials } from "../components/testimonials.tsx";
import { HowToHelp } from "../components/how-to-help.tsx";
import { Contact } from "../components/contact.tsx";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Dedicacion */}
      <Dedication />

      {/* Mision */}
      <Mission />

      {/* Programas */}
      <Programs />

      {/* Impactos */}
      <Impact />

      {/* Testimonios */}
      <Testimonials />
      
      {/* Como puedo ayudar */}
      <div className="relative">
        {/* Decorative dashed arrow pointing to the section */}
        <div aria-hidden className="pointer-events-none absolute -top-10 left-0 w-full h-28 text-blue-300 hidden md:block">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="currentColor" />
              </marker>
            </defs>
            <path
              d="M100,30 C 320,0 520,80 700,40 C 740,40 740,120 740,150"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="10 10"
              strokeLinecap="round"
              marker-end="url(#arrowhead)"
            />
          </svg>
        </div>
        <HowToHelp />
      </div>

      {/* Divider before CTA */}
      <div aria-hidden className="w-full">
        <svg viewBox="0 0 1440 12" preserveAspectRatio="none" className="block w-full h-3">
          <line x1="0" y1="6" x2="1440" y2="6" stroke="currentColor" strokeWidth="2" className="text-blue-300" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Contact */}
      <Contact />

      {/* CTA final */}
{/*       <section className="py-20 bg-blue-50 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-20 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Empieza a marcar la diferencia hoy
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
              Tu contribución, sin importar el tamaño, puede tener un impacto significativo en
              las vidas de aquellos a quienes servimos.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Donar Ahora
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-700 border-2 border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Únete como Voluntario
              </a>
            </div>
          </Reveal>
        </div>
      </section> */}
    </>
  );
}
