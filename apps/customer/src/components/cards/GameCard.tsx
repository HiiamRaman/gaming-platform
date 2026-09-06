import { Users, Play } from "lucide-react";
import { toast } from "sonner";

interface GameProps {
  game: {
    id: number;
    title: string;
    provider: string;
    players: number;
    image: string;
    badge?: string;
    badgeColor?: string;
  };
}


export function GameCard({ game }: GameProps) {
  return (
    <div
      className="group relative rounded-2xl bg-[#111] border border-zinc-800/80 overflow-hidden hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-300 cursor-pointer"
      onClick={() => toast.success(`Launching ${game.title}...`)}
    >
      {/* Thumbnail & Overlays */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
          <div className="bg-red-600 text-white rounded-full p-4 transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>

        {/* Badge */}
        <div
          className={`absolute top-3 left-3 ${game.badgeColor} text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-lg`}
        >
          {game.badge}
        </div>

        {/* Live Counter */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono px-2 py-1 rounded-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <Users className="w-3 h-3 text-zinc-400" />
          {game.players.toLocaleString()}
        </div>
      </div>

      {/* Details */}
      <div className="p-4 border-t border-zinc-800/50 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <h3 className="text-white font-bold text-sm truncate group-hover:text-red-400 transition-colors">
          {game.title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
          {game.provider}
        </p>
      </div>
    </div>
  );
}
