import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PlayerModalProps {
  player: {
    id: number;
    name: string;
    position: string;
    age: number;
    height: string;
    weight: string;
    nationality: string;
    image: string;
    stats: {
      points: number;
      rebounds: number;
      assists: number;
      steals: number;
    };
    biography: string;
    achievements: string[];
    experience: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

export function PlayerModal({ player, open, onClose }: PlayerModalProps) {
  if (!player) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#e75e00]">
            {player.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-[#e75e00] text-white">
                {player.position}
              </Badge>
              <Badge variant="outline">{player.nationality}</Badge>
              <Badge variant="outline">{player.age} años</Badge>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Información Personal</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Altura:</span>
                  <p className="font-medium">{player.height}</p>
                </div>
                <div>
                  <span className="text-gray-600">Peso:</span>
                  <p className="font-medium">{player.weight}</p>
                </div>
                <div>
                  <span className="text-gray-600">Experiencia:</span>
                  <p className="font-medium">{player.experience}</p>
                </div>
                <div>
                  <span className="text-gray-600">Nacionalidad:</span>
                  <p className="font-medium">{player.nationality}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Stats */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Estadísticas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#e75e00]">{player.stats.points}</p>
                  <p className="text-sm text-gray-600">Puntos por juego</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#e75e00]">{player.stats.rebounds}</p>
                  <p className="text-sm text-gray-600">Rebotes por juego</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#e75e00]">{player.stats.assists}</p>
                  <p className="text-sm text-gray-600">Asistencias por juego</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-[#e75e00]">{player.stats.steals}</p>
                  <p className="text-sm text-gray-600">Robos por juego</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Biography */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Biografía</h3>
              <p className="text-gray-700 leading-relaxed">{player.biography}</p>
            </div>

            <Separator />

            {/* Achievements */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Logros</h3>
              <ul className="space-y-2">
                {player.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#e75e00] rounded-full mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}