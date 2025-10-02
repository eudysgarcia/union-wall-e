"use client"

import { useState } from "react"
import { BookOpen, Utensils, Stethoscope, Palette, ArrowRight, Check } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import Reveal from "./animation/reveal.tsx"

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "Educación y Becas",
      description: "Proporcionamos becas escolares completas, útiles educativos y apoyo académico personalizado.",
      stats: "500+ niños becados",
      image: "/education.jpg",
      benefits: ["Becas completas", "Útiles escolares", "Tutorías personalizadas", "Acceso a tecnología"],
    },
    {
      icon: Utensils,
      title: "Nutrición",
      description: "Programas de alimentación saludable y balanceada que garantizan comidas nutritivas necesarias.",
      stats: "1,200 comidas diarias",
      image: "/donation.jpg",
      benefits: ["Desayunos nutritivos", "Almuerzos balanceados", "Meriendas saludables", "Educación nutricional"],
    },
    {
      icon: Stethoscope,
      title: "Salud",
      description: "Acceso gratuito a atención médica de calidad, chequeos regulares y programas preventivos.",
      stats: "800+ consultas mensuales",
      image: "/operativo.jpg",
      benefits: ["Consultas médicas", "Vacunación completa", "Chequeos regulares", "Atención dental"],
    },
    {
      icon: Palette,
      title: "Arte y Recreación",
      description: "Actividades artísticas, deportivas y recreativas que fomentan la creatividad y el talento.",
      stats: "15 talleres activos",
      image: "/recreative.jpeg",
      benefits: ["Talleres de arte", "Deportes", "Música y danza", "Teatro y expresión"],
    },
  ]

  const [selectedProgram, setSelectedProgram] = useState(0)

  return (
    <section id="programas" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">Nuestros Programas</h2>
          <p className="text-base text-muted-foreground leading-relaxed text-pretty">
            Programas integrales diseñados para el desarrollo pleno de cada niño.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="0" className="w-full" onValueChange={(value: string) => setSelectedProgram(Number(value))}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto gap-2 bg-transparent">
              {programs.map((program, index) => {
                const Icon = program.icon
                return (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-bold text-center">{program.title}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Reveal>
                <TabsContent key={index} value={index.toString()} className="mt-0">
                  <Card className="overflow-hidden border-gray-200 border-2 rounded-3xl bg-white shadow-lg">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Imagen */}
                      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <Icon className="w-4 h-4 text-primary text-blue-600" />
                            <span className="text-sm font-bold text-foreground">{program.stats}</span>
                          </div>
                        </div>
                      </div>

                      {/* Contenido */}
                      <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 bg-blue-600/10">
                          <Icon className="w-6 h-6 text-primary text-blue-600" />
                        </div>

                        <h3 className="text-2xl font-bold text-card-foreground mb-3">{program.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>

                        {/* Lista de beneficios */}
                        <div className="space-y-2 mb-6">
                          {program.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 bg-blue-600/10">
                                <Check className="w-3 h-3 text-primary text-blue-600" />
                              </div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-accent/90 text-white rounded-full font-bold py-2 px-8 transition-all duration-300 cursor-pointer 
                        border border-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 hover:border-blue-600/50 w-fit mx-auto">
                          Conocer más detalles
                          <span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>
                </Reveal>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
