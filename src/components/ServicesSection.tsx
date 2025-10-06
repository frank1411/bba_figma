import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Target, Trophy, TrendingUp, Heart, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Desarrollo de Talento",
    description: "Programas personalizados de entrenamiento para maximizar el potencial de cada jugador, desde niveles amateur hasta profesional."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Preparación Física",
    description: "Entrenamiento físico especializado diseñado para mejorar la condición atlética y prevenir lesiones."
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Competición Elite",
    description: "Participación en torneos y ligas de alto nivel para obtener experiencia competitiva valiosa."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Análisis de Rendimiento",
    description: "Evaluación técnica y táctica detallada utilizando tecnología avanzada para optimizar el rendimiento."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Bienestar Mental",
    description: "Apoyo psicológico deportivo para desarrollar la fortaleza mental y la confianza en la cancha."
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Educación Académica",
    description: "Equilibrio entre el desarrollo deportivo y la educación, preparando a los atletas para su futuro integral."
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#000000] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un enfoque integral para el desarrollo deportivo, combinando entrenamiento de élite 
            con apoyo académico y personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-[#e75e00]">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-[#e75e00] text-white rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-[#000000]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#e75e00] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para llevar tu juego al siguiente nivel?
            </h3>
            <p className="text-lg mb-6">
              Contáctanos para una evaluación gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos deportivos.
            </p>
            <button className="bg-white text-[#e75e00] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Evaluación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}