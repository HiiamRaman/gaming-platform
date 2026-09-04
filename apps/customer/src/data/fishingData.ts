export interface FishingGame {
  id: string;
  title: string;
  provider: string;
  image: string;
  playersCount: number;
  isHot?: boolean;
}

export const fishingProviders = [
  "All Providers",
  "JILI",
  "Spadegaming",
  "CQ9",
  "JDB",
  "AskmeSlot"
];

export const fishingGamesData: FishingGame[] = [
  {
    id: "fish-1",
    title: "Ocean King Mega",
    provider: "JILI",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=60",
    playersCount: 1420,
    isHot: true,
  },
  {
    id: "fish-2",
    title: "Fishing War",
    provider: "Spadegaming",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60",
    playersCount: 890,
    isHot: true,
  },
  {
    id: "fish-3",
    title: "Golden Toad Fish",
    provider: "CQ9",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500&auto=format&fit=crop&q=60",
    playersCount: 650,
  },
  {
    id: "fish-4",
    title: "Monster Awaken",
    provider: "JDB",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60",
    playersCount: 1120,
    isHot: false,
  },
  {
    id: "fish-5",
    title: "Royal Fishing",
    provider: "JILI",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=500&auto=format&fit=crop&q=60",
    playersCount: 2310,
    isHot: true,
  },
  {
    id: "fish-6",
    title: "Dragon Fortune",
    provider: "AskmeSlot",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
    playersCount: 430,
    isHot: false,
  },
];
