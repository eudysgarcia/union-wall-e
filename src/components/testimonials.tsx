"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const baseUrl = import.meta.env.BASE_URL

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const stories = [
    {
      name: "Ana",
      age: "12 años",
      role: "Beneficiaria",
      quote: "Esta fundación cambió mi vida. Ahora puedo ir a la escuela y tengo amigos que me apoyan.",
      image: `${baseUrl}/ana.jpg`,
      video: "Antes no podía asistir a clases...",
      achievement: "Ahora es la mejor de su clase",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Roberto García",
      age: "Padre de familia",
      role: "Testimonio familiar",
      quote: "Ver la sonrisa en el rostro de mi hijo en cada momento del dia es invaluable. Gracias por todo su apoyo.",
      image: `${baseUrl}/father.jpg`,
      video: "Mi hijo ahora tiene oportunidades...",
      achievement: "Su hijo recibió una beca completa",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      name: "Laura Martínez",
      age: "Voluntaria",
      role: "Equipo de apoyo",
      quote: "Ser voluntaria aquí me ha enseñado el verdadero significado de la comunidad y el amor.",
      image: `${baseUrl}/help.jpg`,
      video: "Cada día aprendo algo nuevo...",
      achievement: "Ha impactado a más de 100 niños",
      color: "from-violet-500/20 to-purple-500/20",
    },
  ]

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Historias que Inspiran
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Cada historia es única, cada vida transformada es un testimonio de esperanza.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Lado izquierdo: Imagen con efecto polaroid */}
            <div className="relative">
              <div className="relative group">
                {/* Marco tipo polaroid */}
                <div className="bg-white p-4 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-square overflow-hidden bg-muted relative">
                    <img
                      src={stories[activeIndex].image || "/placeholder.svg"}
                      alt={stories[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay de video */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-center font-serif italic text-gray-700">{stories[activeIndex].name}</p>
                </div>

                {/* Badge de logro */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-bold bg-blue-700/80 text-white">
                  {stories[activeIndex].achievement}
                </div>
              </div>
            </div>

            {/* Lado derecho: Contenido del testimonio */}
            <div className="space-y-6">
              <div
                className={`bg-gradient-to-br ${stories[activeIndex].color} p-8 rounded-2xl border border-border/50`}
              >
                {/* Quote grande decorativo */}
                <div className="text-6xl font-serif text-primary/30 leading-none mb-4 text-blue-700/30">"</div>

                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6 text-balance ">
                  {stories[activeIndex].quote}
                </blockquote>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg bg-blue-700/10 text-blue-700">
                    {stories[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{stories[activeIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{stories[activeIndex].age}</p>
                  </div>
                </div>

                {/* Video preview text */}
                <Card className="p-4 bg-background/50 backdrop-blur-sm border-border/50 bg-white/60 rounded-2xl shadow-lg">
                  <p className="text-sm text-muted-foreground italic">{stories[activeIndex].video}</p>
                </Card>
              </div>

              {/* Controles de navegación */}
              <div className="flex items-center justify-between">
                <Button
                  onClick={prevStory}
                  className="rounded-full  w-12 h-12 bg-transparent border-2 border-gray-200 hover:border-blue-700 hover:text-blue-700"
                >
                  <ChevronLeft className="w-5 h-5 ml-3" />
                </Button>

                {/* Indicadores */}
                <div className="flex gap-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "w-8 bg-blue-700" : "w-2 bg-muted-foreground/30 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextStory}
                  className="rounded-full w-12 h-12 bg-transparent border-2 border-gray-200 hover:border-blue-700 hover:text-blue-700"
                >
                  <ChevronRight className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
