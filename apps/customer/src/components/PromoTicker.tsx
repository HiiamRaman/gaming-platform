
import { Gift, Sparkles } from "lucide-react";

interface PromoTickerProps {
  text?: string;
}

export function PromoTicker({
  text = "Claim New Member Bonus On Your First Deposit, Up To NPR 10,000",
}: PromoTickerProps) {
  // We repeat the content items to create a seamless infinite loop illusion
  const tickerItems = Array(4).fill(text);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="relative bg-[#111] border border-red-500/30 rounded-2xl py-3.5 overflow-hidden shadow-2xl shadow-red-950/20 group">

        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-amber-500/5 to-red-600/5 pointer-events-none" />

        {/* Marquee Wrapper */}
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <div className="animate-marquee flex items-center gap-12">
            {tickerItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 mx-4">
                <div className="p-1 rounded-full bg-red-500/10 text-red-500 flex-shrink-0">
                  {index % 2 === 0 ? (
                    <Gift className="w-4 h-4 animate-bounce" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  )}
                </div>
                <span className="text-red-500 font-black text-xs sm:text-sm tracking-widest uppercase">
                  {item}
                </span>
                <span className="text-zinc-700 font-bold ml-6">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
