
export type GameCategory =
  | 'home'
  | 'jackpot'
  | 'slot'
  | 'live-casino'
  | 'crash-game'
  | 'cricket'
  | 'card-game'
  | 'sports'
  | 'fishing'
  | 'esport';

export interface GameItem {
  id: string;
  title: string;
  category: GameCategory;
  provider: string;
  badge?: string;
  imageBg: string;
  rtp?: string;
  minBet?: string;
  poolAmount?: number;
  maxMultiplier?: string;
}


export interface BaseGameCardProps {
  title: string;
  category: string;
  provider: string;
  badge?: string;
  imageBg: string;
  onPlay: () => void;
  children?: React.ReactNode;
}
