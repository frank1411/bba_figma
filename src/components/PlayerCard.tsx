import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PlayerCardProps {
  player: {
    id: number;
    name: string;
    position: string;
    age: number;
    nationality: string;
    image: string;
    stats: {
      points: number;
      rebounds: number;
      assists: number;
    };
  };
  onClick: () => void;
}

export function PlayerCard({ player, onClick }: PlayerCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 border-2 hover:border-[#e75e00]"
        onClick={onClick}
      >
        <div className="aspect-[3/4] overflow-hidden">
          <ImageWithFallback
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-lg text-[#000000]">{player.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="bg-[#e75e00] text-white text-xs">
                  {player.position}
                </Badge>
                <span className="text-sm text-gray-600">{player.age} años</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              <p>{player.nationality}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t">
              <div className="text-center">
                <p className="text-lg font-bold text-[#e75e00]">{player.stats.points}</p>
                <p className="text-xs text-gray-600">PTS</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-[#e75e00]">{player.stats.rebounds}</p>
                <p className="text-xs text-gray-600">REB</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-[#e75e00]">{player.stats.assists}</p>
                <p className="text-xs text-gray-600">AST</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}