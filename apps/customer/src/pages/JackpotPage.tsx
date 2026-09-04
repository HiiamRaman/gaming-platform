import { Trophy } from 'lucide-react';
import { JackpotCard } from '../components/cards/JackpotCard';
import { toast } from 'sonner';

export function JackpotPage() {
  const jackpots = [
    { id: '1', title: 'Mega Moolah Supreme', provider: 'Microgaming', badge: 'MEGA', poolAmount: 15450000, imageBg: 'from-yellow-950 via-zinc-900 to-zinc-950' },
    { id: '2', title: 'Divine Fortune Gold', provider: 'NetEnt', badge: 'HOT', poolAmount: 4200000, imageBg: 'from-emerald-950 via-zinc-900 to-zinc-950' },
    { id: '3', title: 'Age of Gods Nepal', provider: 'Playtech', badge: 'EPIC', poolAmount: 8900000, imageBg: 'from-amber-950 via-zinc-900 to-zinc-950' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
        <Trophy className="w-8 h-8 text-yellow-500" />
        <div>
          <h1 className="text-2xl font-black text-white">JACKPOT ARENA</h1>
          <p className="text-xs text-zinc-400">Progressive prize pools rendered using specialized jackpot cards.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jackpots.map((jackpot) => (
          <JackpotCard
            key={jackpot.id}
            title={jackpot.title}
            provider={jackpot.provider}
            badge={jackpot.badge}
            poolAmount={jackpot.poolAmount}
            imageBg={jackpot.imageBg}
            onPlay={() => toast.success(`Entering jackpot room: ${jackpot.title}`)}
          />
        ))}
      </div>
    </div>
  );
}
