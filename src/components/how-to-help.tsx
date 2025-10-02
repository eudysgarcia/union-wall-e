import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, HandHeart, Calendar, Share2 } from "lucide-react"
import Reveal from "./animation/reveal.tsx"

export function HowToHelp() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Cómo Puedes Ayudar
          </h2>
          </Reveal>
          <Reveal delay={0.08}>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-gray-400">
            Hay muchas formas de marcar la diferencia. Cada contribución, grande o pequeña, transforma vidas.
          </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">

          <Reveal delay={0.30}>
          <Card className="text-center hover:shadow-lg transition-shadow bg-white rounded-3xl border-2 border-gray-200 p-8 px-12">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-600/10">
                <DollarSign className="w-7 h-7 text-accent text-blue-600" />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">Dona</h3>
              <p className="text-sm text-muted-foreground">Tu donación ayuda directamente a los niños</p>
            </CardContent>
          </Card>
          </Reveal>


          <Reveal delay={0.35}>
          <Card className="text-center hover:shadow-lg transition-shadow bg-white rounded-3xl border-2 border-gray-200 p-10 px-12">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-600/10">
                <HandHeart className="w-7 h-7 text-primary text-blue-600" />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">Voluntariado</h3>
              <p className="text-sm text-muted-foreground">Comparte tu tiempo y talento</p>
            </CardContent>
          </Card>
          </Reveal>

          <Reveal delay={0.40}>
          <Card className="text-center hover:shadow-lg transition-shadow bg-white rounded-3xl border-2 border-gray-200 p-8 px-12">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-600/10">
                <Calendar className="w-7 h-7 text-accent text-blue-600" />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">Eventos</h3>
              <p className="text-sm text-muted-foreground">Participa en nuestras actividades</p>
            </CardContent>
          </Card>
          </Reveal>

          <Reveal delay={0.45}>
          <Card className="text-center hover:shadow-lg transition-shadow bg-white rounded-3xl border-2 border-gray-200 p-10 px-12">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-600/10">
                <Share2 className="w-7 h-7 text-primary text-blue-600" />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">Comparte</h3>
              <p className="text-sm text-muted-foreground">Difunde nuestra misión</p>
            </CardContent>
          </Card>
          </Reveal>
        </div>

        <div className=" mx-auto max-w-6xl bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center bg-blue-400/20">
            <Reveal delay={0.50}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Haz una Donación Hoy</h3>
            </Reveal>
            <Reveal delay={0.55}>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-gray-500">
                Con tu apoyo, podemos continuar brindando educación, alimentación y esperanza a miles de niños que lo
                necesitan.
                </p>
            </Reveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Reveal delay={0.60}>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground bg-blue-600 text-white rounded-full p-2 px-8 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600/50 cursor-pointer">
              Donar $25
            </Button>
            </Reveal>

            <Reveal delay={0.65}>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground bg-blue-600 text-white rounded-full p-2 px-8 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600/50 cursor-pointer">
              Donar $50
            </Button>
            </Reveal>

            <Reveal delay={0.70}>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground bg-blue-600 text-white rounded-full p-2 px-8 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600/50 cursor-pointer">
              Donar $100
            </Button>
            </Reveal>

            <Reveal delay={0.75}>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground bg-white text-blue-600 rounded-full p-2 px-8 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600/50 border-2 border-blue-600 cursor-pointer">
              Otra Cantidad
            </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
