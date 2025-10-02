/* import { faHeart, faBullseye, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Mission() {
  return (
    <section id="mision" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nuestra Misión
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Trabajamos incansablemente para garantizar que cada niño tenga acceso a las herramientas y oportunidades
            necesarias para alcanzar su máximo potencial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faHeart} className="w-7 h-7 dark:text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">Amor y Cuidado</h3>
            <p className="text-muted-foreground leading-relaxed">
              Brindamos un ambiente seguro y amoroso donde cada niño se siente valorado y protegido.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faBullseye} className="w-7 h-7 dark:text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">Educación de Calidad</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proporcionamos acceso a educación de calidad y recursos que impulsan el aprendizaje y el desarrollo.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <FontAwesomeIcon icon={faUsers} className="w-7 h-7 dark:text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-3">Comunidad Fuerte</h3>
            <p className="text-muted-foreground leading-relaxed">
              Construimos comunidades resilientes que apoyan el crecimiento y bienestar de todos los niños.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
 */

"use client"

import { Heart, Target, Users, Sparkles } from "lucide-react"
import { useState } from "react"
import CountUpOnView from "./animation/countUpOnView"
import Reveal from "./animation/reveal"

export function Mission() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const values = [
    {
      icon: Heart,
      title: "Amor y Cuidado",
      description: "Brindamos un ambiente seguro y amoroso donde cada niño se siente valorado y protegido.",
      stat: "100%",
      statLabel: "Dedicación",
    },
    {
      icon: Target,
      title: "Educación de Calidad",
      description:
        "Proporcionamos acceso a educación de calidad y recursos que impulsan el aprendizaje y el desarrollo.",
      stat: "500+",
      statLabel: "Niños becados",
    },
    {
      icon: Users,
      title: "Comunidad Fuerte",
      description: "Construimos comunidades resilientes que apoyan el crecimiento y bienestar de todos los niños.",
      stat: "15",
      statLabel: "Comunidades",
    },
  ]

  return (
    <section
      id="mision"
      className="py-24 md:py-32 min-h-[80vh] bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header with split design */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 bg-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <p className="text-blue-600 font-bold">Nuestra Razón de Ser</p>
            </div>
            <h2 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-[1.05] tracking-tight">
              Transformando
              <span className="block text-primary text-blue-600">Vidas Infantiles</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Trabajamos incansablemente para garantizar que cada niño tenga acceso a las herramientas y oportunidades
              necesarias para alcanzar su máximo potencial.
            </p>
          </div>

          {/* Visual stats grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-3xl p-10 md:p-12 aspect-square flex flex-col justify-center items-center text-center bg-blue-600 text-white shadow-lg">
              <CountUpOnView to={1200} className="text-6xl md:text-7xl font-extrabold mb-2 tracking-tight" />
              <div className="text-sm opacity-90">Niños Impactados</div>
            </div>
            <div className="rounded-3xl p-10 md:p-12 aspect-square flex flex-col justify-center items-center text-center bg-white border-2 border-slate-200 shadow-sm">
              <CountUpOnView to={8} className="text-6xl md:text-7xl font-extrabold text-blue-600 mb-2 tracking-tight" />
              <div className="text-sm text-slate-500">Años de Experiencia</div>
            </div>
            <div className="rounded-3xl p-10 md:p-12 aspect-square flex flex-col justify-center items-center text-center bg-white border-2 border-blue-100 shadow-sm">
              <div className="text-6xl md:text-7xl font-extrabold text-blue-600 mb-2 tracking-tight"><CountUpOnView to={24} className="" /><span>/7</span></div>
              <div className="text-sm text-slate-500">Apoyo Continuo</div>
            </div>
            <div className="rounded-3xl p-10 md:p-12 aspect-square flex flex-col justify-center items-center text-center bg-blue-600 text-white shadow-lg">
              <CountUpOnView to={100} suffix="%" className="text-6xl md:text-7xl font-extrabold mb-2 tracking-tight" />
              <div className="text-sm opacity-90">Compromiso</div>
            </div>
          </div>
        </div>

        {/* Interactive values cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            const isActive = activeCard === index

            return (
              <Reveal
                key={index}
                delay={index * 0.08}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`
                  relative bg-card rounded-3xl p-8 border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "hover:border-blue-600 shadow-2xl shadow-primary/20 -translate-y-2"
                      : "border-border hover:border-primary/50"
                  }
                `}
              >
                {/* Icon with animated background */}
                <div
                  className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                  ${isActive ? "bg-blue-600 scale-110" : "bg-blue-600/10"}
                `}
                >
                  <Icon
                    className={`w-8 h-8 transition-colors duration-300 ${isActive ? "text-white" : "text-blue-600"}`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{value.description}</p>

                {/* Stat badge */}
                <div
                  className={`
                  inline-flex flex-col items-start px-4 py-3 rounded-xl transition-all duration-300
                  ${isActive ? "bg-blue-600/10 text-blue-600" : "bg-muted bg-blue-600/10"}
                `}
                >
                  <div
                    className={`text-2xl font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground"}`}
                  >
                    {value.stat}
                  </div>
                  <div className="text-xs text-muted-foreground">{value.statLabel}</div>
                </div>

                {/* Hover indicator */}
                {isActive && <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse" />}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
