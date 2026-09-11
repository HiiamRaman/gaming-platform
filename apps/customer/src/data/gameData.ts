export interface Game {
  id: string;
  title: string;
  provider: string;
  thumbnail: string;
  category: "slots" | "cards" | "casino" | "crash";
  demoUrl?: string;
}

export const allGames: Game[] = [
  // Slots
  { id: "gates-of-olympus", title: "Gates of Olympus", provider: "Pragmatic Play", thumbnail: "/Footer/footer2.webp", category: "slots", demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20gates&jurisdiction=99" },
  { id: "sweet-bonanza", title: "Sweet Bonanza", provider: "Pragmatic Play", thumbnail: "/Footer/footer3.webp", category: "slots", demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20sweetbonzn&jurisdiction=99" },
  { id: "sugar-rush", title: "Sugar Rush", provider: "Pragmatic Play", thumbnail: "/Footer/footer6.webp", category: "slots", demoUrl: "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20sugarrush&jurisdiction=99" },

  // Card Games
  { id: "american-blackjack", title: "Classic Blackjack", provider: "Evolution", thumbnail: "/Footer/footer4.webp", category: "cards" },
  { id: "baccarat", title: "Speed Baccarat", provider: "Pragmatic Play", thumbnail: "/Footer/footer7.webp", category: "cards" },
  { id: "oasis-poker", title: "Oasis Poker", provider: "BGaming", thumbnail: "/Footer/footer8.webp", category: "cards" },

  // Live Casino Tables
  { id: "lightning-roulette", title: "Lightning Roulette", provider: "Evolution", thumbnail: "/Footer/footer5.webp", category: "casino" },
  { id: "crazy-time", title: "Crazy Time", provider: "Evolution", thumbnail: "/Footer/footer9.webp", category: "casino" },

  // Crash Games
  { id: "aviator", title: "Aviator", provider: "Spribe", thumbnail: "/Footer/footer10.webp", category: "crash" },
];
