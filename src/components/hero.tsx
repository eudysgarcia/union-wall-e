import { ArrowRight } from "lucide-react";
import TextAnimation from "./text/textAnimation.tsx";
import CountUpOnView from "./animation/countUpOnView.tsx";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              <TextAnimation />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-[700px] mx-auto md:mx-36 text-gray-400">
              Regalando amor, sonrisas y una mano de ayuda a quien mas lo necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-[700px] mx-auto md:mx-36">
              <button
                className="bg-blue-600 hover:bg-blue-600 text-white rounded-full font-bold py-2 px-8 transition-all duration-300 
              cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600/50"
              >
                Hazte Voluntario
              </button>
              <button
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-blue-600 rounded-full font-bold py-2 px-8 transition-all duration-300 cursor-pointer 
             border border-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600/50"
              >
                Conoce Más
                <span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 ml-36">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-500">
                  <CountUpOnView to={5000} suffix="+" />
                </div>
                <div className="text-lg text-muted-foreground font-semibold ">
                  Niños Ayudados
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-500">
                  <CountUpOnView to={15} />
                </div>
                <div className="text-lg text-muted-foreground font-semibold ">
                  Años de Impacto
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-500">
                  <CountUpOnView to={50} suffix="+" />
                </div>
                <div className="text-lg text-muted-foreground font-semibold ">
                  Comunidades
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/portada.JPG"
                alt="Niños felices jugando y aprendiendo juntos"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
