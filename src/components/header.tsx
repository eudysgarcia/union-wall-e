"use client";

import { Logo } from "./logo";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 ">
      <div
        className={`container mx-auto max-w-5xl transition-all duration-300 ${
          isScrolled
            ? "bg-white backdrop-blur-md shadow-lg"
            : "bg-white backdrop-blur-sm shadow-lg"
        } rounded-full`}
      >
        <div className="flex items-center justify-between h-14 px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transform scale-400 m-6">
              <Logo />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#inicio"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors hover:text-blue-600"
            >
              Inicio
            </a>
            <a
              href="#mision"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors hover:text-blue-600"
            >
              Misión
            </a>
            <a
              href="#programas"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors hover:text-blue-600"
            >
              Programas
            </a>
            <a
              href="#impacto"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors hover:text-blue-600"
            >
              Impacto
            </a>
            <a
              href="#contacto"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors hover:text-blue-600"
            >
              Contacto
            </a>
          </nav>
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold cursor-pointer">
              Donar
            </button>
            <button className="hidden md:flex rounded-full font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
              <a href="/login">
                <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-2xl dark:text-blue-600 rounded-full border border-primary p-2 mt-1" />
              </a>
            </button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 px-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#mision"
                className="font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Misión
              </a>
              <a
                href="#programas"
                className="font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programas
              </a>
              <a
                href="#impacto"
                className="font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Impacto
              </a>
              <a
                href="#contacto"
                className="font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full rounded-full font-bold">
                Donar Ahora
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
