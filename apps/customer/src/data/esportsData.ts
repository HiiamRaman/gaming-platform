export interface EsportsGame {
  id: string;
  title: string;
  provider: string;
  gameCategory: 'CS2' | 'Dota 2' | 'Valorant' | 'LoL';
  image: string;
  teamA: string;
  teamB: string;
  oddsA: number;
  oddsB: number;
  isLive?: boolean;
}

export const esportsProviders = [
  "All Providers",
  "TF Gaming",
  "IM Esports",
  "BTI Sports"
];

export const esportsGamesData: EsportsGame[] = [
  {
    id: "esp-1",
    title: "CS2 Global Pro League",
    provider: "TF Gaming",
    gameCategory: "CS2",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60",
    teamA: "Natus Vincere",
    teamB: "FaZe Clan",
    oddsA: 1.85,
    oddsB: 1.95,
    isLive: true,
  },
  {
    id: "esp-2",
    title: "Dota 2 The International",
    provider: "IM Esports",
    gameCategory: "Dota 2",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60",
    teamA: "Team Liquid",
    teamB: "Gaimin Gladiators",
    oddsA: 2.10,
    oddsB: 1.72,
    isLive: true,
  },
  {
    id: "esp-3",
    title: "Valorant Champions Tour",
    provider: "TF Gaming",
    gameCategory: "Valorant",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60",
    teamA: "Sentinels",
    teamB: "Fnatic",
    oddsA: 1.90,
    oddsB: 1.80,
    isLive: false,
  },
  {
    id: "esp-4",
    title: "League of Legends Worlds",
    provider: "BTI Sports",
    gameCategory: "LoL",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60",
    teamA: "T1",
    teamB: "Gen.G",
    oddsA: 1.65,
    oddsB: 2.20,
    isLive: true,
  },
];
