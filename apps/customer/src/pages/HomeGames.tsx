import { useState } from "react";
import { Play } from "lucide-react";
import { allGames } from "../data/gameData";

export function HomeGames() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredGames = selectedCategory === "all"
    ? allGames
    : allGames.filter((g) => g.category === selectedCategory);

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-white tracking-wide uppercase">
          Casino & <span className="text-emerald-500">Games Lobby</span>
        </h2>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 sm:pb-0">
          {["all", "slots", "cards", "casino", "crash"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                  : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Game Grid using a named target to reuse the same tab */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredGames.map((game) => (
          <a
            key={game.id}
            href={`/play/${game.id}`}
            target="casino_game_player" // <-- Changed this line!
            rel="noopener noreferrer"
            className="group relative bg-[#111] border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:border-red-500/50 transition-all duration-300 shadow-lg block z-10"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 relative">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-500 text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="p-3">
              <p className="text-xs text-zinc-400 font-medium truncate pointer-events-none">{game.provider}</p>
              <h3 className="text-sm font-bold text-white truncate mt-0.5 pointer-events-none">{game.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
