export interface SportsMatch {
  id: string;
  league: string;
  provider: string;
  sportCategory: 'Football' | 'Cricket' | 'Basketball' | 'Tennis';
  image: string;
  teamA: string;
  teamB: string;
  oddsA: number;
  oddsDraw?: number;
  oddsB: number;
  matchTime: string;
  isLive?: boolean;
}

export const sportsProviders = [
  "All Providers",
  "SABA Sports",
  "CMD368",
  "United Gaming"
];

export const sportsMatchesData: SportsMatch[] = [
  {
    id: "spo-1",
    league: "English Premier League",
    provider: "SABA Sports",
    sportCategory: "Football",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=60",
    teamA: "Manchester United",
    teamB: "Arsenal",
    oddsA: 2.45,
    oddsDraw: 3.40,
    oddsB: 2.80,
    matchTime: "Today, 21:00",
    isLive: true,
  },
  {
    id: "spo-2",
    league: "Indian Premier League",
    provider: "CMD368",
    sportCategory: "Cricket",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=60",
    teamA: "Mumbai Indians",
    teamB: "Royal Challengers",
    oddsA: 1.75,
    oddsB: 2.05,
    matchTime: "Tomorrow, 19:30",
    isLive: false,
  },
  {
    id: "spo-3",
    league: "NBA Regular Season",
    provider: "United Gaming",
    sportCategory: "Basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=60",
    teamA: "New York Knicks",
    teamB: "Boston Celtics",
    oddsA: 2.15,
    oddsB: 1.70,
    matchTime: "Today, 05:00",
    isLive: true,
  },
  {
    id: "spo-4",
    league: "ATP Masters Tennis",
    provider: "SABA Sports",
    sportCategory: "Tennis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=500&auto=format&fit=crop&q=60",
    teamA: "Jannik Sinner",
    teamB: "Ben Shelton",
    oddsA: 1.40,
    oddsB: 3.00,
    matchTime: "Live Now",
    isLive: true,
  },
];
