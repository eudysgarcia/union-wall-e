import { Quote } from "./text/textAnimation.tsx";

export function Dedication() {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="pl-8 pr-4 py-8 border-l-4 border-primary/30">
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground/90 leading-relaxed text-balance">
                  <Quote />
                </p>
                <footer className="mt-6 text-right">
                  <cite className="text-lg text-muted-foreground not-italic">— Fundación Union Wall-E</cite>
                </footer>
              </blockquote>
              <div className="absolute -right-4 bottom-0 text-6xl text-primary/20 font-serif">"</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  