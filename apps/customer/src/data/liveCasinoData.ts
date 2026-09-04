export interface LiveCasinoGame {
  id: string;
  title: string;
  provider: string;
  gameType: "Roulette" | "Blackjack" | "Baccarat" | "Game Show";
  image: string;
  minBet: string;
  dealersName: string;
  isHot?: boolean;
}

export const liveCasinoProviders = [
  "All Providers",
  "Evolution",
  "Pragmatic Play",
  "Ezugi",
  "DreamGaming",
];

export const liveCasinoGamesData: LiveCasinoGame[] = [
  {
    id: "live-1",
    title: "Lightning Roulette",
    provider: "Evolution",
    gameType: "Roulette",
    image:
      "https://images.unsplash.com/photo-1606167685413-577de2d66761?w=500&auto=format&fit=crop&q=60",
    minBet: "NPR 100",
    dealersName: "Sarah",
    isHot: true,
  },
  {
    id: "live-2",
    title: "One Blackjack",
    provider: "Pragmatic Play",
    gameType: "Blackjack",
    image:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&auto=format&fit=crop&q=60",
    minBet: "NPR 500",
    dealersName: "Michael",
    isHot: true,
  },
  {
    id: "live-3",
    title: "Speed Baccarat A",
    provider: "Ezugi",
    gameType: "Baccarat",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=500&auto=format&fit=crop&q=60",
    minBet: "NPR 200",
    dealersName: "Elena",
    isHot: false,
  },
  {
    id: "live-4",
    title: "Crazy Time",
    provider: "Evolution",
    gameType: "Game Show",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop&q=60",
    minBet: "NPR 50",
    dealersName: "Host Chris",
    isHot: true,
  },
];
