import { Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#19232a] text-background py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4 ">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-foreground fill-current" />
              </div>
              <span className="text-lg font-bold">Fundación Union Wall-E</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Transformando vidas y construyendo futuros para los niños que más lo necesitan.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="opacity-80 hover:opacity-100 transition-opacity">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#mision" className="opacity-80 hover:opacity-100 transition-opacity">
                  Misión
                </a>
              </li>
              <li>
                <a href="#programas" className="opacity-80 hover:opacity-100 transition-opacity">
                  Programas
                </a>
              </li>
              <li>
                <a href="#impacto" className="opacity-80 hover:opacity-100 transition-opacity">
                  Impacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Voluntariado
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 XEYA. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Política de Privacidad
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
