import React, { useState } from "react";
import { sportsMatchesData, sportsProviders } from "../data/sportsData";
import { SportsCard } from "../components/cards/SportsMatchCard";
import { Zap, Filter } from "lucide-react";

export const SportsPage: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState("All Providers");

  const filteredMatches =
    selectedProvider === "All Providers"
      ? sportsMatchesData
      : sportsMatchesData.filter(
          (match) => match.provider === selectedProvider,
        );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-xl font-black tracking-wider uppercase text-white flex items-center gap-2.5">
            <span className="w-2.5 h-6 bg-amber-500 rounded-sm" />
            <Zap className="w-5 h-5 text-amber-500" />
            Sportsbook Live & Upcoming
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Global sports fixtures, competitive odds, and live betting markets.
          </p>
        </div>

        {/* Provider Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-zinc-500 mr-1 flex-shrink-0" />
          {sportsProviders.map((provider) => (
            <button
              key={provider}
              onClick={() => setSelectedProvider(provider)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all ${
                selectedProvider === provider
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-[#181818] text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {provider}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      {filteredMatches.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMatches.map((match) => (
            <SportsCard key={match.id} match={match} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#141414] rounded-xl border border-[#222]">
          <p className="text-sm text-zinc-400">
            No sports matches found for {selectedProvider}.
          </p>
        </div>
      )}
    </div>
  );
};
