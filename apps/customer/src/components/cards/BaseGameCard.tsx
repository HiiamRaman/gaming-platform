
import { Play } from 'lucide-react';

import type  { BaseGameCardProps } from '../../../../../packages/shared/types/game';
export function BaseGameCard({
  title,
  category,
  provider,
  badge,
  imageBg,
  onPlay,
  children
}: BaseGameCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl p-4 hover:border-red-600/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
      <div>
        {/* Visual Thumbnail Frame */}
        <div className={`h-36 bg-gradient-to-br ${imageBg} rounded-xl mb-4 relative flex items-center justify-center border border-zinc-800 overflow-hidden group-hover:scale-[1.02] transition-transform`}>
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

          {badge && (
            <span className="absolute top-2.5 right-2.5 bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-md z-10">
              {badge}
            </span>
          )}

          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded backdrop-blur z-10">
            {provider}
          </div>
        </div>

        {/* Metadata Section */}
        <div className="space-y-1.5 mb-4">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{category}</span>
          <h3 className="text-white font-bold text-sm tracking-wide truncate">{title}</h3>
          {children}
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onPlay}
        className="w-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group-hover:shadow-red-900/40"
      >
        <Play className="w-3.5 h-3.5 fill-current" /> PLAY NOW
      </button>
    </div>
  );
}
