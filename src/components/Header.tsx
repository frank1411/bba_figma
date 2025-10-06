import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#000000] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#e75e00]">
              Best Baller Agency
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="hover:text-[#e75e00] transition-colors">
                Inicio
              </a>
              <a href="#jugadores" className="hover:text-[#e75e00] transition-colors">
                Jugadores
              </a>
              <a href="#tecnicos" className="hover:text-[#e75e00] transition-colors">
                Técnicos
              </a>
              <a href="#servicios" className="hover:text-[#e75e00] transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="hover:text-[#e75e00] transition-colors">
                Contacto
              </a>
            </div>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white hover:text-[#e75e00] hover:bg-gray-900"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-[#e75e00] hover:bg-gray-900"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-800 py-4"
            >
              <div className="relative max-w-md mx-auto">
                <Input
                  type="search"
                  placeholder="Buscar jugadores, técnicos..."
                  className="w-full bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-[#e75e00]"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-800 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="hover:text-[#e75e00] transition-colors">
                  Inicio
                </a>
                <a href="#jugadores" className="hover:text-[#e75e00] transition-colors">
                  Jugadores
                </a>
                <a href="#tecnicos" className="hover:text-[#e75e00] transition-colors">
                  Técnicos
                </a>
                <a href="#servicios" className="hover:text-[#e75e00] transition-colors">
                  Servicios
                </a>
                <a href="#contacto" className="hover:text-[#e75e00] transition-colors">
                  Contacto
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}