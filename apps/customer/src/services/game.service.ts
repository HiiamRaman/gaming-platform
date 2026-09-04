import { apiClient } from "./api.client";
import type {
  GameItem,
  GameCategory,
} from "../../../../packages/shared/types/game";
export const gameService = {
  // Fetch all games or filter by category (slot, jackpot, live-casino, etc.)
  async getGames(category?: GameCategory): Promise<GameItem[]> {
    const url = category ? `/games?category=${category}` : "/games";
    const response = await apiClient.get(url);
    return response.data.games;
  },

  // Fetch a single game by its unique ID for game play mode
  async getGameById(id: string): Promise<GameItem> {
    const response = await apiClient.get(`/games/${id}`);
    return response.data.game;
  },

  // Fetch live sports matches and current odds
  async getSportsMatches() {
    const response = await apiClient.get("/sports/live");
    return response.data.matches;
  },
};
