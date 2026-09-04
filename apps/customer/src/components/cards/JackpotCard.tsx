import { Trophy } from "lucide-react";
import { BaseGameCard } from "./BaseGameCard";

interface JackpotCardProps {
  title: string;
  provider: string;
  badge?: string;
  poolAmount: number;
  imageBg: string;
  onPlay: () => void;
}

export function JackpotCard({
  title,
  provider,
  badge,
  poolAmount,
  imageBg,
  onPlay,
}: JackpotCardProps) {
  return (
    <BaseGameCard
      title={title}
      category="Progressive Jackpot"
      provider={provider}
      badge={badge || "MEGA"}
      imageBg={imageBg}
      onPlay={onPlay}
    >
      <div className="space-y-1 pt-1">
        <div className="flex items-center gap-1 text-[10px] text-yellow-500 font-bold uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5 animate-pulse" /> Live Pool Prize
        </div>
        <div className="text-base font-mono font-black text-yellow-400 tracking-tight">
          NPR {poolAmount.toLocaleString()}
        </div>
      </div>
    </BaseGameCard>
  );
}
