"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import Reveal from "./animation/reveal.tsx";


export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Contáctanos</h2>
          </Reveal>
          <Reveal delay={0.08}>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-gray-500">
            ¿Tienes preguntas o quieres saber más sobre cómo puedes ayudar? Estamos aquí para ti.
          </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 mr-22 bg-white rounded-2xl border-2 border-gray-200 p-6 px-8 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-600/10">
                    <Mail className="w-6 h-6 text-primary text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contacto@fundacionesperanza.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-600/10">
                    <Phone className="w-6 h-6 text-primary text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-600/10">
                    <MapPin className="w-6 h-6 text-primary text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-muted-foreground">
                      Calle Principal 123
                      <br />
                      Ciudad, Estado 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* columna derecha */}
           <div className="space-y-8 ml-22 bg-white rounded-2xl border-2 border-gray-200 p-6 px-8 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Redes Sociales</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 ">
                    <FaInstagram className="w-8 h-8 text-primary text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <p className="text-muted-foreground">contacto@fundacionesperanza.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 ">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-8 h-8 text-primary text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Whatsapp</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 ">
                    <FaFacebookF className="w-8 h-8 text-primary text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Facebook</p>
                    <p className="text-muted-foreground">
                      Calle Principal 123
                      <br />
                      Ciudad, Estado 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
