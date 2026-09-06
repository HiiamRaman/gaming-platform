import type { FetchGamesParams, FetchGamesResponse, Game } from '../../../../packages/shared/types/casino'

const CASINO_IMAGES = {
  poker: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=600&q=80",
  roulette: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=600&q=80",
  chips: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
  cards: "https://images.unsplash.com/photo-1541278107931-e006523892df?auto=format&fit=crop&w=600&q=80",
  casinoFloor: "https://images.unsplash.com/photo-1596838132731-3301c3fd431b?auto=format&fit=crop&w=600&q=80",
  blackJack: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
  slots: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
  dice: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
};

const MOCK_DATABASE: Game[] = [
  // --- SLOTS ---
  { id: 101, title: "Gates of Olympus 1000", provider: "Pragmatic Play", category: "slots", players: 8420, rtp: "96.50%", image: CASINO_IMAGES.slots, badge: "HOT" },
  { id: 102, title: "Sweet Bonanza 1000", provider: "Pragmatic Play", category: "slots", players: 7120, rtp: "96.53%", image: CASINO_IMAGES.chips, badge: "DROPS" },
  { id: 103, title: "Sugar Rush 1000", provider: "Pragmatic Play", category: "slots", players: 5930, rtp: "96.53%", image: CASINO_IMAGES.dice, badge: "HOT" },
  { id: 104, title: "Book of Dead", provider: "Play'n GO", category: "slots", players: 4890, rtp: "96.21%", image: CASINO_IMAGES.cards },
  { id: 105, title: "Big Bass Splash", provider: "Pragmatic Play", category: "slots", players: 6200, rtp: "96.71%", image: CASINO_IMAGES.slots, badge: "DROPS" },
  { id: 106, title: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", category: "slots", players: 5410, rtp: "96.38%", image: CASINO_IMAGES.casinoFloor, badge: "HOT" },
  { id: 107, title: "Le Bandit", provider: "Hacksaw Gaming", category: "slots", players: 4320, rtp: "96.34%", image: CASINO_IMAGES.chips, badge: "NEW" },
  { id: 108, title: "San Quentin xWays", provider: "NoLimit City", category: "slots", players: 2890, rtp: "96.03%", image: CASINO_IMAGES.cards },
  { id: 109, title: "Mental", provider: "NoLimit City", category: "slots", players: 3100, rtp: "96.08%", image: CASINO_IMAGES.dice },
  { id: 110, title: "Razor Returns", provider: "Push Gaming", category: "slots", players: 3950, rtp: "96.55%", image: CASINO_IMAGES.slots, badge: "HOT" },
  { id: 111, title: "Jammin' Jars 2", provider: "Push Gaming", category: "slots", players: 2100, rtp: "96.40%", image: CASINO_IMAGES.chips },
  { id: 112, title: "Tombstone RIP", provider: "NoLimit City", category: "slots", players: 1840, rtp: "96.09%", image: CASINO_IMAGES.cards },
  { id: 113, title: "Starlight Princess 1000", provider: "Pragmatic Play", category: "slots", players: 4780, rtp: "96.50%", image: CASINO_IMAGES.slots, badge: "DROPS" },
  { id: 114, title: "Money Train 4", provider: "Relax Gaming", category: "slots", players: 3290, rtp: "96.10%", image: CASINO_IMAGES.poker },
  { id: 115, title: "Temple Tumble Megaways", provider: "Relax Gaming", category: "slots", players: 2450, rtp: "96.25%", image: CASINO_IMAGES.casinoFloor },
  { id: 116, title: "Rip City", provider: "Hacksaw Gaming", category: "slots", players: 2980, rtp: "96.22%", image: CASINO_IMAGES.cards },
  { id: 117, title: "Chaos Crew 2", provider: "Hacksaw Gaming", category: "slots", players: 3120, rtp: "96.27%", image: CASINO_IMAGES.dice, badge: "NEW" },
  { id: 118, title: "Fire in the Hole xBomb", provider: "NoLimit City", category: "slots", players: 1950, rtp: "96.06%", image: CASINO_IMAGES.chips },

  // --- LIVE CASINO ---
  { id: 201, title: "Lightning Roulette", provider: "Evolution Gaming", category: "live", players: 4120, rtp: "97.30%", image: CASINO_IMAGES.roulette, badge: "LIVE" },
  { id: 202, title: "Speed Baccarat A", provider: "Pragmatic Play Live", category: "live", players: 1850, rtp: "98.94%", image: CASINO_IMAGES.cards, badge: "LIVE" },
  { id: 203, title: "Infinite Blackjack", provider: "Evolution Gaming", category: "live", players: 2940, rtp: "99.47%", image: CASINO_IMAGES.blackJack, badge: "LIVE" },
  { id: 204, title: "XXXtreme Lightning Roulette", provider: "Evolution Gaming", category: "live", players: 3810, rtp: "97.30%", image: CASINO_IMAGES.roulette, badge: "HOT" },
  { id: 205, title: "Mega Baccarat", provider: "Pragmatic Play Live", category: "live", players: 1240, rtp: "98.76%", image: CASINO_IMAGES.poker, badge: "LIVE" },
  { id: 206, title: "Immersive Roulette", provider: "Evolution Gaming", category: "live", players: 2100, rtp: "97.30%", image: CASINO_IMAGES.roulette, badge: "LIVE" },
  { id: 207, title: "Blackjack VIP Diamond", provider: "Evolution Gaming", category: "live", players: 180, rtp: "99.28%", image: CASINO_IMAGES.blackJack, badge: "VIP" },

  // --- GAME SHOWS ---
  { id: 301, title: "Crazy Time", provider: "Evolution Gaming", category: "shows", players: 11250, rtp: "96.08%", image: CASINO_IMAGES.casinoFloor, badge: "HOT" },
  { id: 302, title: "Monopoly Live", provider: "Evolution Gaming", category: "shows", players: 4310, rtp: "96.23%", image: CASINO_IMAGES.chips, badge: "EXCLUSIVE" },
  { id: 303, title: "Sweet Bonanza Candyland", provider: "Pragmatic Play Live", category: "shows", players: 5120, rtp: "96.48%", image: CASINO_IMAGES.casinoFloor, badge: "HOT" },
  { id: 304, title: "Funky Time", provider: "Evolution Gaming", category: "shows", players: 3890, rtp: "95.99%", image: CASINO_IMAGES.chips },

  // --- CRASH & INSTANT ---
  { id: 401, title: "Aviator", provider: "Spribe", category: "crash", players: 16800, rtp: "97.00%", image: CASINO_IMAGES.chips, badge: "HOT" },
  { id: 402, title: "Spaceman", provider: "Pragmatic Play", category: "crash", players: 5410, rtp: "96.50%", image: CASINO_IMAGES.casinoFloor, badge: "HOT" },
  { id: 403, title: "Space XY", provider: "BGaming", category: "crash", players: 2890, rtp: "97.00%", image: CASINO_IMAGES.chips, badge: "NEW" },
  { id: 404, title: "Mines", provider: "Spribe", category: "crash", players: 8900, rtp: "97.00%", image: CASINO_IMAGES.dice, badge: "HOT" },
  { id: 405, title: "Plinko", provider: "BGaming", category: "crash", players: 9420, rtp: "99.00%", image: CASINO_IMAGES.casinoFloor, badge: "HOT" },

  // --- TABLE GAMES ---
  { id: 501, title: "European Roulette VIP", provider: "Play'n GO", category: "table", players: 1450, rtp: "97.30%", image: CASINO_IMAGES.roulette },
  { id: 502, title: "Multihand Blackjack", provider: "Pragmatic Play", category: "table", players: 1890, rtp: "99.51%", image: CASINO_IMAGES.blackJack },
  { id: 503, title: "Casino Hold'em", provider: "BGaming", category: "table", players: 980, rtp: "98.89%", image: CASINO_IMAGES.poker },
  { id: 504, title: "Baccarat Zero Commission", provider: "Habanero", category: "table", players: 1120, rtp: "98.76%", image: CASINO_IMAGES.cards },
];

export async function fetchCasinoGames(params: FetchGamesParams = {}): Promise<FetchGamesResponse> {
  const { page = 1, limit = 18, search = "", category = "all", provider = "all" } = params;

  // Real backend implementation example:
  // const query = new URLSearchParams({ page: String(page), limit: String(limit), search, category, provider });
  // const res = await fetch(`/api/v1/games?${query}`);
  // if (!res.ok) throw new Error("Failed to fetch games");
  // return res.json();

  // Simulated Async API Latency
  await new Promise((resolve) => setTimeout(resolve, 600));

  let results = [...MOCK_DATABASE];

  if (search.trim()) {
    const query = search.toLowerCase();
    results = results.filter(
      (g) => g.title.toLowerCase().includes(query) || g.provider.toLowerCase().includes(query)
    );
  }

  if (category !== "all") {
    if (category === "hot") {
      results = results.filter((g) => g.badge === "HOT" || g.players > 4000);
    } else {
      results = results.filter((g) => g.category === category);
    }
  }

  if (provider !== "all") {
    results = results.filter((g) => g.provider === provider);
  }

  const total = results.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const games = results.slice(startIndex, startIndex + limit);

  const providers = Array.from(new Set(MOCK_DATABASE.map((g) => g.provider))).sort();

  return {
    games,
    total,
    totalPages,
    currentPage: page,
    providers,
  };
}
