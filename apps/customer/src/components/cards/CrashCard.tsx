import React from 'react';
import type { CrashGame } from '../../data/crashData';
import { Play, Users, Flame, Rocket } from 'lucide-react';

interface CrashCardProps {
  game: CrashGame;
}

export const CrashCard: React.FC<CrashCardProps> = ({ game }) => {
  return (
    <div className="group relative bg-[#141414] rounded-xl overflow-hidden border border-[#222] hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col">

      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />

        {/* Hot Badge */}
        {game.isHot && (
          <div className="absolute top-2.5 right-2.5 bg-amber-500/90 text-black px-2 py-0.5 rounded-md flex items-center gap-1 text-[10px] font-black tracking-wider uppercase shadow-md">
            <Flame className="w-3 h-3 fill-black" />
            <span>Hot</span>
          </div>
        )}

        {/* Live Players Badge */}
        <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1.5 border border-white/10 text-[10px] font-medium text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <Users className="w-3 h-3 text-zinc-400" />
          <span>{game.playersCount}</span>
        </div>

        {/* Hover Overlay Button */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase px-4 py-2.5 rounded-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
            <Play className="w-3.5 h-3.5 fill-black" />
            Launch
          </button>
        </div>
      </div>

      {/* Card Footer Meta */}
      <div className="p-3.5 flex items-center justify-between bg-[#181818] border-t border-[#222] mt-auto">
        <div>
          <h3 className="text-white font-semibold text-xs truncate max-w-[140px]">{game.title}</h3>
          <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">{game.provider}</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded bg-[#222] text-amber-400 border border-zinc-800 font-mono">
          <Rocket className="w-3 h-3 text-amber-500" />
          <span>{game.maxMultiplier}</span>
        </div>
      </div>

    </div>
  );
};
