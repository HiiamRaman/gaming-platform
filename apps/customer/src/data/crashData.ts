export interface CrashGame {
  id: string;
  title: string;
  provider: string;
  image: string;
  maxMultiplier: string;
  playersCount: number;
  isHot?: boolean;
}

export const crashProviders = [
  "All Providers",
  "Spribe",
  "SmartSoft",
  "Evolution",
  "JILI"
];

export const crashGamesData: CrashGame[] = [
  {
    id: "crash-1",
    title: "Aviator",
    provider: "Spribe",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&auto=format&fit=crop&q=60",
    maxMultiplier: "10,000x",
    playersCount: 4820,
    isHot: true,
  },
  {
    id: "crash-2",
    title: "JetX",
    provider: "SmartSoft",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&auto=format&fit=crop&q=60",
    maxMultiplier: "25,000x",
    playersCount: 2310,
    isHot: true,
  },
  {
    id: "crash-3",
    title: "Aviatrix",
    provider: "Evolution",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=500&auto=format&fit=crop&q=60",
    maxMultiplier: "10,000x",
    playersCount: 1540,
    isHot: false,
  },
  {
    id: "crash-4",
    title: "Crashing Cargo",
    provider: "JILI",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500&auto=format&fit=crop&q=60",
    maxMultiplier: "5,000x",
    playersCount: 920,
    isHot: false,
  },
];
