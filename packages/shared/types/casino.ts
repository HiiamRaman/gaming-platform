// types/casino.ts

export interface Game {
  id: number;
  title: string;
  provider: string;
  category: "live" | "slots" | "table" | "crash" | "shows";
  players: number;
  rtp: string;
  image: string;
  badge?: "LIVE" | "HOT" | "NEW" | "VIP" | "EXCLUSIVE" | "DROPS" | string;
  badgeColor?: string; // <-- Add this line
}

export interface FetchGamesParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  provider?: string;
}

export interface FetchGamesResponse {
  games: Game[];
  total: number;
  totalPages: number;
  currentPage: number;
  providers: string[];
}
