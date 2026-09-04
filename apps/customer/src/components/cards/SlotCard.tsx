import { Sparkles } from 'lucide-react';
import { BaseGameCard } from './BaseGameCard';

interface SlotCardProps {
  title: string;
  provider: string;
  badge?: string;
  rtp: string;
  imageBg: string;
  onPlay: () => void;
}

export function SlotCard({ title, provider, badge, rtp, imageBg, onPlay }: SlotCardProps) {
  return (
    <BaseGameCard
      title={title}
      category="Video Slot"
      provider={provider}
      badge={badge}
      imageBg={imageBg}
      onPlay={onPlay}
    >
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
          <span>Reels & Spins</span>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
          RTP {rtp}
        </span>
      </div>
    </BaseGameCard>
  );
}
