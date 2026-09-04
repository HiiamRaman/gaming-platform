export interface OddsOption {
  label: string;
  odd: string;
}

export interface SportsMatchItem {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  timeStatus: string;
  odds: OddsOption[];
}
