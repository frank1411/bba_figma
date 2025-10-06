import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#e75e00]">
              Best Baller Agency
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Desarrollando el talento deportivo del mañana. Comprometidos con la excelencia 
              y el crecimiento integral de nuestros atletas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#e75e00] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e75e00] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e75e00] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e75e00] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#e75e00] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#jugadores" className="text-gray-300 hover:text-[#e75e00] transition-colors">
                  Jugadores
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#e75e00] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#e75e00] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Desarrollo de Talento</span>
              </li>
              <li>
                <span className="text-gray-300">Preparación Física</span>
              </li>
              <li>
                <span className="text-gray-300">Competición Elite</span>
              </li>
              <li>
                <span className="text-gray-300">Análisis de Rendimiento</span>
              </li>
              <li>
                <span className="text-gray-300">Bienestar Mental</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#e75e00]" />
                <span className="text-gray-300 text-sm">
                  Av. Deportiva 123, Centro Deportivo Elite
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#e75e00]" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#e75e00]" />
                <span className="text-gray-300 text-sm">info@bestballeragency.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Best Baller Agency. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#e75e00] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e75e00] transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e75e00] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}