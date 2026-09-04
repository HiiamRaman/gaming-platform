import { Gamepad2 } from 'lucide-react';
import { SlotCard } from '../components/cards/SlotCard';
import { toast } from 'sonner';

export function SlotPage() {
  const slots = [
    { id: '1', title: 'Gates of Khalti', provider: 'Pragmatic Play', badge: 'HOT', rtp: '96.50%', imageBg: 'from-amber-950 via-zinc-900 to-zinc-950' },
    { id: '2', title: 'Sweet Bonanza 88', provider: 'Pragmatic Play', badge: 'NEW', rtp: '96.48%', imageBg: 'from-rose-950 via-zinc-900 to-zinc-950' },
    { id: '3', title: 'Sugar Rush Nepal', provider: 'Habanero', badge: 'POPULAR', rtp: '95.50%', imageBg: 'from-purple-950 via-zinc-900 to-zinc-950' },
    { id: '4', title: 'Starlight Princess', provider: 'Pragmatic Play', badge: 'HOT', rtp: '96.50%', imageBg: 'from-indigo-950 via-zinc-900 to-zinc-950' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-8 h-8 text-red-500" />
          <div>
            <h1 className="text-2xl font-black text-white">SLOT ARENA</h1>
            <p className="text-xs text-zinc-400">High-multiplier video slots powered by modular slot card components.</p>
          </div>
        </div>
        <span className="text-xs bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-xl text-zinc-400 font-mono">
          {slots.length} Games
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {slots.map((slot) => (
          <SlotCard
            key={slot.id}
            title={slot.title}
            provider={slot.provider}
            badge={slot.badge}
            rtp={slot.rtp}
            imageBg={slot.imageBg}
            onPlay={() => toast.success(`Launching ${slot.title}...`)}
          />
        ))}
      </div>
    </div>
  );
}
