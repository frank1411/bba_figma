import { useState } from "react";
import { PlayerCard } from "./PlayerCard";
import { PlayerModal } from "./PlayerModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// Mock data for players
const players = [
  {
    id: 1,
    name: "Marcus Johnson",
    position: "Escolta",
    age: 24,
    height: "1.96m",
    weight: "85kg",
    nationality: "Estados Unidos",
    experience: "5 años profesional",
    image: "https://images.unsplash.com/photo-1612893562175-9303361dd487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwcGxheWVyJTIwcG9ydHJhaXQlMjBtYWxlfGVufDF8fHx8MTc1OTM2MTgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: {
      points: 22.5,
      rebounds: 5.2,
      assists: 6.8,
      steals: 2.1
    },
    biography: "Marcus es un jugador versátil con una excelente visión de juego. Comenzó su carrera profesional a los 19 años y ha demostrado un crecimiento constante en todas las facetas del juego. Su capacidad para anotar desde cualquier posición en la cancha lo convierte en una amenaza ofensiva formidable.",
    achievements: [
      "Rookie del Año Liga Nacional (2020)",
      "All-Star Game (2022, 2023)",
      "Mejor Sexto Hombre (2021)",
      "Campeón Liga Universitaria (2019)"
    ]
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    position: "Base",
    age: 22,
    height: "1.75m",
    weight: "68kg",
    nationality: "España",
    experience: "3 años profesional",
    image: "https://images.unsplash.com/photo-1659081443046-268bee889587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwcGxheWVyJTIwZmVtYWxlJTIwc3BvcnR8ZW58MXx8fHwxNzU5MzYxODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: {
      points: 18.3,
      rebounds: 4.1,
      assists: 9.2,
      steals: 2.8
    },
    biography: "Sofia es conocida por su excepcional manejo del balón y su capacidad para dirigir el juego. Su visión táctica y liderazgo en la cancha la han convertido en una de las bases más prometedoras de su generación. Su ética de trabajo y determinación son inspiradoras para todo el equipo.",
    achievements: [
      "MVP Liga Femenina Europa (2023)",
      "Campeona Copa del Mundo Sub-21 (2021)",
      "Mejor Base Liga Nacional (2022, 2023)",
      "Récord de asistencias en una temporada"
    ]
  },
  {
    id: 3,
    name: "Tyler Washington",
    position: "Alero",
    age: 20,
    height: "2.01m",
    weight: "92kg",
    nationality: "Canadá",
    experience: "2 años profesional",
    image: "https://images.unsplash.com/photo-1721339038987-11d9b2b9e7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwcGxheWVyJTIweW91bmclMjBhdGhsZXRlfGVufDF8fHx8MTc1OTM2MTgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: {
      points: 16.7,
      rebounds: 7.3,
      assists: 3.9,
      steals: 1.6
    },
    biography: "Tyler es un joven talento con un potencial ilimitado. Su combinación de altura, atletismo y habilidades técnicas lo convierte en un prospecto muy valioso. A pesar de su juventud, muestra una madurez en el juego que supera su edad cronológica.",
    achievements: [
      "Rookie del Año Liga Canadiense (2023)",
      "Campeón Liga Juvenil Nacional (2021)",
      "MVP Torneo Internacional Sub-20",
      "Beca Deportiva Universidad Duke"
    ]
  }
];

const coaches = [
  {
    id: 4,
    name: "Coach Michael Davis",
    position: "Entrenador Principal",
    age: 45,
    height: "1.88m",
    weight: "82kg",
    nationality: "Estados Unidos",
    experience: "20 años como entrenador",
    image: "https://images.unsplash.com/photo-1605673397770-350aeb756b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY29hY2glMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MzYxODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stats: {
      points: 0,
      rebounds: 0,
      assists: 0,
      steals: 0
    },
    biography: "Michael Davis es un entrenador veterano con más de dos décadas de experiencia en el desarrollo de talentos. Su filosofía de entrenamiento se centra en la disciplina, el trabajo en equipo y el crecimiento personal de cada jugador. Ha sido mentor de múltiples jugadores que han llegado a ligas profesionales de élite.",
    achievements: [
      "Entrenador del Año Liga Nacional (2019, 2022)",
      "Campeón Liga Regional (2018, 2020, 2023)",
      "Más de 50 jugadores desarrollados para ligas profesionales",
      "Certificación Nivel A Federación Internacional"
    ]
  }
];

export function PlayersSection() {
  const [selectedPlayer, setSelectedPlayer] = useState<typeof players[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlayerClick = (player: typeof players[0]) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPlayer(null);
  };

  return (
    <section id="jugadores" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#000000] mb-4">
            Nuestro Talento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los jugadores y técnicos que forman parte de nuestra familia deportiva.
            Cada uno con una historia única y un potencial extraordinario.
          </p>
        </div>

        <Tabs defaultValue="players" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="players" className="data-[state=active]:bg-[#e75e00] data-[state=active]:text-white">
              Jugadores
            </TabsTrigger>
            <TabsTrigger value="coaches" className="data-[state=active]:bg-[#e75e00] data-[state=active]:text-white">
              Técnicos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="players">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {players.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onClick={() => handlePlayerClick(player)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coaches">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coaches.map((coach) => (
                <PlayerCard
                  key={coach.id}
                  player={coach}
                  onClick={() => handlePlayerClick(coach)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <PlayerModal
          player={selectedPlayer}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}