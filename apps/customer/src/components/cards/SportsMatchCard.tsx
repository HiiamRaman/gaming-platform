import React from 'react';
import type { SportsMatch } from '../../data/sportsData';
import { Zap, Play, Clock } from 'lucide-react';

interface SportsCardProps {
  match: SportsMatch;
}

export const SportsCard: React.FC<SportsCardProps> = ({ match }) => {
  return (
    <div className="group relative bg-[#141414] rounded-xl overflow-hidden border border-[#222] hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col">

      {/* Thumbnail Header */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
        <img
          src={match.image}
          alt={match.league}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
        />

        {/* Live Status Badge */}
        {match.isLive ? (
          <div className="absolute top-2.5 left-2.5 bg-red-600/90 text-white px-2 py-0.5 rounded-md flex items-center gap-1.5 text-[10px] font-black tracking-wider uppercase shadow-md animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>LIVE</span>
          </div>
        ) : (
          <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-zinc-300 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase border border-white/10 flex items-center gap-1">
            <Clock className="w-3 h-3 text-zinc-400" />
            <span>{match.matchTime}</span>
          </div>
        )}

        {/* Sport Category Badge */}
        <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-mono text-amber-400 border border-white/10 uppercase">
          {match.sportCategory}
        </div>
      </div>

      {/* Match Details & 1X2 Odds Section */}
      <div className="p-3.5 bg-[#181818] flex flex-col gap-3 flex-grow border-t border-[#222]">
        <div>
          <span className="text-[10px] text-zinc-500 font-medium tracking-wide uppercase">{match.provider} • {match.league}</span>
          <h3 className="text-white font-bold text-xs truncate mt-0.5">{match.teamA} vs {match.teamB}</h3>
        </div>

        {/* Odds Box */}
        <div className="bg-[#121212] p-2 rounded-lg border border-[#222] grid grid-cols-3 gap-1.5 text-center text-xs">
          <div className="bg-[#181818] p-1.5 rounded border border-zinc-800 flex flex-col justify-between">
            <span className="text-[9px] text-zinc-400 uppercase font-medium truncate">1</span>
            <span className="text-amber-400 font-mono text-xs font-bold">{match.oddsA}</span>
          </div>
          {match.oddsDraw ? (
            <div className="bg-[#181818] p-1.5 rounded border border-zinc-800 flex flex-col justify-between">
              <span className="text-[9px] text-zinc-400 uppercase font-medium truncate">X</span>
              <span className="text-amber-400 font-mono text-xs font-bold">{match.oddsDraw}</span>
            </div>
          ) : (
            <div className="bg-[#181818] p-1.5 rounded border border-zinc-800 flex flex-col justify-between opacity-40">
              <span className="text-[9px] text-zinc-400 uppercase font-medium truncate">-</span>
              <span className="text-zinc-500 font-mono text-xs">-</span>
            </div>
          )}
          <div className="bg-[#181818] p-1.5 rounded border border-zinc-800 flex flex-col justify-between">
            <span className="text-[9px] text-zinc-400 uppercase font-medium truncate">2</span>
            <span className="text-amber-400 font-mono text-xs font-bold">{match.oddsB}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-auto bg-[#222] hover:bg-amber-500 hover:text-black text-zinc-300 font-bold text-xs uppercase py-2 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:border-amber-500/30">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Place Bet</span>
        </button>
      </div>

    </div>
  );
};
