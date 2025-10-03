import { TrendingUp, Award, Globe, Smile } from "lucide-react"
import Reveal from "./animation/reveal.tsx"

export function Impact() {
  return (
    
    <section id="impacto" className="relative overflow-hidden py-16 md:py-24 bg-blue-700/90 text-primary-foreground">
    <div aria-hidden className="pointer-events-none absolute left-0 top-0 w-full">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[120px]">
            <path d="M0,64 C 240,32 480,96 720,64 C 960,32 1200,96 1440,64 L1440,0 L0,0 Z" fill="#f9fcff" />
        </svg>
    </div>
      <div className="container mx-auto px-4 text-white">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <Reveal delay={0.08}>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Nuestro Impacto</h2>
            </Reveal>
            <Reveal delay={0.12}>
                <p className="text-lg opacity-90 leading-relaxed text-pretty">
                    Cada día trabajamos para crear un cambio positivo y duradero en la vida de miles de niños.
                </p>
            </Reveal>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-6xl">
          <div className="text-center">
            <Reveal delay={0.30}>
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-500/80">
                    <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90 font-semibold">Tasa de Graduación</div>
            </Reveal>            
          </div>

          <div className="text-center">
            <Reveal delay={0.35}>
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-500/80">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">1,200</div>
            <div className="text-sm opacity-90 font-semibold">Becas Otorgadas</div>
            </Reveal>
          </div>

          <div className="text-center">
            <Reveal delay={0.40}>
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-500/80">
              <Globe className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-90 font-semibold">Comunidades Alcanzadas</div>
            </Reveal>
          </div>

          <div className="text-center">
            <Reveal delay={0.45}>
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-500/80">
              <Smile className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
            <div className="text-sm opacity-90 font-semibold">Vidas Transformadas</div>
            </Reveal>
          </div>
        </div>

        <div className="relative overflow-hidden mt-16 grid md:grid-cols-2 gap-8 mx-auto max-w-6xl text-justify">
          <Reveal delay={0.50}>
          <div className="bg-primary-foreground/10 rounded-2xl p-8  bg-blue-500/80">
            <h3 className="text-2xl font-bold mb-4">Historia de Éxito</h3>
            <p className="leading-relaxed opacity-90 mb-4 ">
              "Gracias a la Fundación Esperanza, pude terminar mis estudios y ahora soy maestra. Quiero devolver todo lo
              que recibí ayudando a otros niños a alcanzar sus sueños."
            </p>
            <p className="font-semibold">- María, Ex-beneficiaria</p>
          </div>
          </Reveal>

            
          <Reveal delay={0.60}>
          <div className="bg-primary-foreground/10 rounded-2xl p-8  bg-blue-500/80">
            <h3 className="text-2xl font-bold mb-4">Testimonio de Padre</h3>
            <p className="leading-relaxed opacity-90 mb-4 ">
              "No tengo palabras para agradecer todo el apoyo que mi familia ha recibido. Mis hijos ahora tienen un
              futuro brillante gracias a esta maravillosa fundación."
            </p>
            <p className="font-semibold">- Carlos, Padre de familia</p>
          </div>
          </Reveal>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute left-0 bottom-0 w-full">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[120px] rotate-180">
          <path d="M0,64 C 240,32 480,96 720,64 C 960,32 1200,96 1440,64 L1440,0 L0,0 Z" fill="#f9fcff" />
        </svg>
      </div>
    </section>
  )
}
