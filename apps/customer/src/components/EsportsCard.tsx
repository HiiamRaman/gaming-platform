import React from "react";
import  type { EsportsGame } from "../data/esportsData";
import { Trophy, Play } from "lucide-react";

interface EsportsCardProps {
  game: EsportsGame;
}

export const EsportsCard: React.FC<EsportsCardProps> = ({ game }) => {
  return (
    <div className="group relative bg-[#141414] rounded-xl overflow-hidden border border-[#222] hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col">
      {/* Thumbnail Header */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />

        {/* Live Badge */}
        {game.isLive ? (
          <div className="absolute top-2.5 left-2.5 bg-red-600/90 text-white px-2 py-0.5 rounded-md flex items-center gap-1.5 text-[10px] font-black tracking-wider uppercase shadow-md animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>LIVE</span>
          </div>
        ) : (
          <div className="absolute top-2.5 left-2.5 bg-zinc-800/80 backdrop-blur-md text-zinc-300 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase border border-white/10">
            Upcoming
          </div>
        )}

        {/* Game Category Badge */}
        <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-mono text-amber-400 border border-white/10 uppercase">
          {game.gameCategory}
        </div>
      </div>

      {/* Match Details & Odds Box */}
      <div className="p-3.5 bg-[#181818] flex flex-col gap-3 flex-grow border-t border-[#222]">
        <div>
          <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">
            {game.provider}
          </span>
          <h3 className="text-white font-bold text-xs truncate mt-0.5">
            {game.title}
          </h3>
        </div>

        {/* Teams and Odds Matchup */}
        <div className="bg-[#121212] p-2 rounded-lg border border-[#222] flex items-center justify-between text-xs">
          <div className="flex flex-col truncate max-w-[100px]">
            <span className="text-zinc-300 font-semibold truncate">
              {game.teamA}
            </span>
            <span className="text-amber-400 font-mono text-[11px] font-bold">
              {game.oddsA}
            </span>
          </div>
          <span className="text-zinc-600 font-bold text-[10px] px-1">VS</span>
          <div className="flex flex-col text-right truncate max-w-[100px]">
            <span className="text-zinc-300 font-semibold truncate">
              {game.teamB}
            </span>
            <span className="text-amber-400 font-mono text-[11px] font-bold">
              {game.oddsB}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-auto bg-[#222] hover:bg-amber-500 hover:text-black text-zinc-300 font-bold text-xs uppercase py-2 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:border-amber-500/30">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Enter Lobby</span>
        </button>
      </div>
    </div>
  );
};
