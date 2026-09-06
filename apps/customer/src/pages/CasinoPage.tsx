import { useState, useEffect, useCallback } from "react";
import {
  Gamepad2,
  Loader2,
  Search,
  SlidersHorizontal,
  Flame,
  Sparkles,
  Dices,
  Trophy,
  Zap,
  RotateCcw,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { toast } from "sonner";
import { GameCard } from "../components/cards/GameCard";
import { fetchCasinoGames } from "../services/casinoApi";
import type { Game } from "../../../../packages/shared/types/casino";

const CATEGORIES = [
  { id: "all", label: "All Games", icon: Gamepad2 },
  { id: "hot", label: "Popular", icon: Flame },
  { id: "live", label: "Live Casino", icon: Users },
  { id: "slots", label: "Slots", icon: Dices },
  { id: "crash", label: "Crash & Instant", icon: Zap },
  { id: "shows", label: "Game Shows", icon: Sparkles },
  { id: "table", label: "Table Games", icon: Trophy },
] as const;

export function CasinoPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [providers, setProviders] = useState<string[]>([]);
  const [totalGames, setTotalGames] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Filter & Pagination States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProvider, setSelectedProvider] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchCasinoGames({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
        category: selectedCategory,
        provider: selectedProvider,
      });

      setGames(res.games);
      setTotalGames(res.total);
      setTotalPages(res.totalPages);
      if (res.providers.length > 0) setProviders(res.providers);
    } catch {
      toast.error("Failed to load games matrix.");
    } finally {
      setLoading(false);
    }
  }, [
    currentPage,
    itemsPerPage,
    searchTerm,
    selectedCategory,
    selectedProvider,
  ]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedProvider("all");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-zinc-800/80 pb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500">
                <Gamepad2 className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white">
                  Casino Lobby
                </h1>
                <p className="text-zinc-400 text-sm mt-0.5 font-medium">
                  Showing {totalGames} active tables & games
                </p>
              </div>
            </div>
          </div>

          {/* Search & Provider Selector */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by title or provider..."
                className="w-full bg-zinc-900/90 border border-zinc-800 text-sm text-white rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-red-500/80 focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="relative">
              <select
                value={selectedProvider}
                onChange={(e) => handleProviderChange(e.target.value)}
                className="w-full sm:w-auto bg-zinc-900/90 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-300 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:border-red-500 cursor-pointer pr-10"
              >
                <option value="all">All Providers ({providers.length})</option>
                {providers.map((provider) => (
                  <option key={provider} value={provider}>
                    {provider}
                  </option>
                ))}
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/20"
                    : "bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800/60 hover:border-zinc-700"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-500"}`}
                />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Games Grid */}
        {loading ? (
          <div className="w-full h-96 flex flex-col items-center justify-center border border-zinc-800/50 rounded-2xl bg-zinc-900/20 backdrop-blur-sm">
            <Loader2 className="w-9 h-9 animate-spin text-red-500 mb-4" />
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              Connecting to Game Matrix...
            </span>
          </div>
        ) : games.length === 0 ? (
          <div className="w-full py-20 flex flex-col items-center justify-center border border-zinc-800/50 rounded-2xl bg-zinc-900/20 text-center px-4">
            <p className="text-zinc-400 font-medium mb-1">No matches found</p>
            <p className="text-zinc-600 text-xs mb-6 max-w-sm">
              We couldn't find any games matching your search query or selected
              provider.
            </p>
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-white font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-10">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800/80 pt-6">
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span>
                    Showing{" "}
                    <strong className="text-white">
                      {(currentPage - 1) * itemsPerPage + 1}
                    </strong>{" "}
                    to{" "}
                    <strong className="text-white">
                      {Math.min(currentPage * itemsPerPage, totalGames)}
                    </strong>{" "}
                    of <strong className="text-white">{totalGames}</strong>{" "}
                    games
                  </span>

                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-zinc-900 border border-zinc-800 text-xs rounded-lg px-2.5 py-1 text-zinc-300 focus:outline-none focus:border-red-500 cursor-pointer ml-2"
                  >
                    <option value={12}>12 per page</option>
                    <option value={18}>18 per page</option>
                    <option value={24}>24 per page</option>
                    <option value={36}>36 per page</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1 px-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(
                        (p) =>
                          p === 1 ||
                          p === totalPages ||
                          (p >= currentPage - 1 && p <= currentPage + 1),
                      )
                      .map((page, idx, array) => {
                        const showEllipsis =
                          idx > 0 && page - array[idx - 1] > 1;
                        return (
                          <div key={page} className="flex items-center gap-1">
                            {showEllipsis && (
                              <span className="text-zinc-600 px-1 text-xs">
                                ...
                              </span>
                            )}
                            <button
                              onClick={() => setCurrentPage(page)}
                              className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                                currentPage === page
                                  ? "bg-red-600 text-white font-bold"
                                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                              }`}
                            >
                              {page}
                            </button>
                          </div>
                        );
                      })}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
